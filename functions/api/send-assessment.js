// Cloudflare Pages Function — POST /api/send-assessment
//
// Emails the Secure Lending Collaboration Assessment report (PDF attachment)
// to the prospect, and a copy — including every answer — to the assessment owner.
// Delivery is handled by Resend (https://resend.com).
//
// Configure these in the Cloudflare Pages dashboard
// (Settings -> Environment variables), NOT in source:
//   RESEND_API_KEY  (required) — your Resend API key
//   OWNER_EMAIL     (required for the owner copy) — where sales/owner copies go
//   FROM_EMAIL      (optional) — a verified Resend sender, e.g.
//                    "FileFlex Assessment <assessment@fileflex.com>".
//                    Defaults to Resend's test sender (onboarding@resend.dev),
//                    which can only deliver to your own Resend account address.

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

function validEmail(e) {
  return typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// --- Input hardening: this is a public, unauthenticated endpoint, so clamp
// every field to a sane size/shape before it reaches an email or Resend. ---
function clampStr(v, max) {
  return typeof v === 'string' ? v.slice(0, max) : '';
}
function num(v, min, max) {
  var n = Number(v);
  if (!isFinite(n)) return null;
  if (n < min) n = min;
  if (n > max) n = max;
  return Math.round(n);
}
function sanitizeContact(c) {
  c = c || {};
  return {
    name: clampStr(c.name, 200),
    title: clampStr(c.title, 200),
    company: clampStr(c.company, 200),
    email: clampStr((typeof c.email === 'string' ? c.email.trim() : ''), 254),
    users: clampStr(c.users, 80),
    consent: !!c.consent,
  };
}
function sanitizeCategories(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 12).map(function (c) {
    c = c || {};
    return {
      short: clampStr(c.short, 120),
      title: clampStr(c.title, 200),
      raw: num(c.raw, 0, 1000),
      max: num(c.max, 0, 1000),
      pct: num(c.pct, 0, 100),
      benchmark: num(c.benchmark, 0, 100),
      rating: clampStr(c.rating, 40),
    };
  });
}
function sanitizeAnswers(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 60).map(function (a) {
    a = a || {};
    return {
      section: clampStr(a.section, 120),
      question: clampStr(a.question, 400),
      answer: clampStr(a.answer, 400),
      points: num(a.points, 0, 1000),
    };
  });
}

function th(t) {
  return '<th style="padding:6px 10px;border:1px solid #d8dee6;background:#0e1a2b;color:#fff;font-size:13px;text-align:left;">' + esc(t) + '</th>';
}

function categoryTable(categories) {
  var rows = (categories || []).map(function (c) {
    var delta = (Number(c.pct) || 0) - (Number(c.benchmark) || 0);
    return '<tr>' +
      '<td style="padding:6px 10px;border:1px solid #d8dee6;font-size:13px;">' + esc(c.short) + '</td>' +
      '<td style="padding:6px 10px;border:1px solid #d8dee6;font-size:13px;">' + esc(c.raw) + ' / ' + esc(c.max) + '</td>' +
      '<td style="padding:6px 10px;border:1px solid #d8dee6;font-size:13px;">' + esc(c.pct) + '%</td>' +
      '<td style="padding:6px 10px;border:1px solid #d8dee6;font-size:13px;">' + esc(c.rating) + '</td>' +
      '<td style="padding:6px 10px;border:1px solid #d8dee6;font-size:13px;">' + esc(c.benchmark) + '% (' + (delta >= 0 ? '+' : '') + delta + ')</td>' +
      '</tr>';
  }).join('');
  return '<table style="border-collapse:collapse;width:100%;margin:12px 0;">' +
    '<thead><tr>' + th('Category') + th('Score') + th('%') + th('Rating') + th('Peer avg') + '</tr></thead>' +
    '<tbody>' + rows + '</tbody></table>';
}

function answersTable(answers) {
  if (!Array.isArray(answers) || !answers.length) return '';
  var rows = answers.map(function (a) {
    return '<tr>' +
      '<td style="padding:5px 8px;border:1px solid #d8dee6;font-size:12px;">' + esc(a.section) + '</td>' +
      '<td style="padding:5px 8px;border:1px solid #d8dee6;font-size:12px;">' + esc(a.question) + '</td>' +
      '<td style="padding:5px 8px;border:1px solid #d8dee6;font-size:12px;">' + esc(a.answer) + '</td>' +
      '<td style="padding:5px 8px;border:1px solid #d8dee6;font-size:12px;text-align:center;">' + esc(a.points) + '</td>' +
      '</tr>';
  }).join('');
  return '<h3 style="font-size:15px;margin:18px 0 6px;">All answers</h3>' +
    '<table style="border-collapse:collapse;width:100%;">' +
    '<thead><tr>' + th('Section') + th('Question') + th('Answer') + th('Pts') + '</tr></thead>' +
    '<tbody>' + rows + '</tbody></table>';
}

function headline(d) {
  return '<div style="background:#0e1a2b;color:#fff;padding:20px 24px;border-radius:8px;">' +
    '<div style="font-size:34px;font-weight:700;line-height:1;">' + esc(d.overall) + ' <span style="font-size:16px;font-weight:400;color:#aeb8c6;">/ 100</span></div>' +
    '<div style="color:#e8590a;font-weight:600;margin-top:6px;">' + esc(d.maturity) + '</div>' +
    '<div style="color:#d2d8e0;font-size:13px;margin-top:2px;">Overall risk rating: ' + esc(d.risk) + '</div>' +
    '</div>';
}

function prospectHtml(d) {
  var c = d.contact || {};
  return '<div style="font-family:Arial,Helvetica,sans-serif;color:#1b2433;max-width:640px;margin:0 auto;">' +
    '<p style="font-size:15px;">Hi ' + esc(c.name || 'there') + ',</p>' +
    '<p style="font-size:14px;line-height:1.6;">Thank you for completing the Secure Lending Collaboration Assessment. ' +
    'Your full report is attached as a PDF, and here is a summary of your results:</p>' +
    headline(d) +
    '<h3 style="font-size:15px;margin:18px 0 6px;">Category scores</h3>' +
    categoryTable(d.categories) +
    '<p style="font-size:14px;line-height:1.6;">Want to see how FileFlex closes these gaps with Zero Trust Data Access — ' +
    'least-privilege, view-only, no-download access with a full audit trail, without moving your data? ' +
    '<a href="https://www.fileflex.com/demo-request/" style="color:#e8590a;">Request a demo</a>.</p>' +
    '<p style="font-size:12px;color:#7a8595;margin-top:24px;">FileFlex Enterprise · Zero Trust Data Access · fileflex.com</p>' +
    '</div>';
}

function ownerHtml(d) {
  var c = d.contact || {};
  return '<div style="font-family:Arial,Helvetica,sans-serif;color:#1b2433;max-width:680px;margin:0 auto;">' +
    '<h2 style="font-size:18px;margin:0 0 4px;">New Secure Lending Assessment submission</h2>' +
    '<table style="border-collapse:collapse;margin:12px 0;font-size:13px;">' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">Name</td><td style="padding:3px 0;font-weight:600;">' + esc(c.name) + '</td></tr>' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">Title</td><td style="padding:3px 0;">' + esc(c.title) + '</td></tr>' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">Company</td><td style="padding:3px 0;">' + esc(c.company) + '</td></tr>' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">Email</td><td style="padding:3px 0;"><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></td></tr>' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">IT users</td><td style="padding:3px 0;">' + esc(c.users) + '</td></tr>' +
    '<tr><td style="padding:3px 10px 3px 0;color:#7a8595;">Marketing consent</td><td style="padding:3px 0;">' + (c.consent ? 'Yes' : 'No') + '</td></tr>' +
    '</table>' +
    headline(d) +
    '<h3 style="font-size:15px;margin:18px 0 6px;">Category scores</h3>' +
    categoryTable(d.categories) +
    answersTable(d.answers) +
    '<p style="font-size:12px;color:#7a8595;margin-top:18px;">The prospect-facing PDF is attached.</p>' +
    '</div>';
}

async function sendEmail(env, msg) {
  var res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + env.RESEND_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  });
  var text = await res.text();
  var body;
  try { body = JSON.parse(text); } catch (e) { body = { raw: text }; }
  return { ok: res.ok, status: res.status, body: body };
}

// Cloudflare Turnstile verification. If TURNSTILE_SECRET is not set, verification is
// skipped (treated as success) so the endpoint keeps working until it's configured.
async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET) return { ok: true, skipped: true };
  if (!token || typeof token !== 'string') return { ok: false };
  var body = new URLSearchParams();
  body.set('secret', env.TURNSTILE_SECRET);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);
  try {
    var res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    var j = await res.json();
    // Also bind the token to this form's action to limit cross-context token reuse.
    var actionOk = !j.action || j.action === 'lending-assessment';
    return { ok: !!j.success && actionOk, data: j };
  } catch (e) {
    return { ok: false };
  }
}

export async function onRequestPost(context) {
  var request = context.request;
  var env = context.env;

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: 'not_configured' }, 500);
  }

  var data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  // Honeypot — silently accept and drop.
  if (data.website_url_confirm) return json({ ok: true });

  // Bot protection (enforced only when TURNSTILE_SECRET is configured).
  var ts = await verifyTurnstile(env, data.turnstileToken, request.headers.get('CF-Connecting-IP'));
  if (!ts.ok) return json({ ok: false, error: 'verification_failed' }, 403);

  var pdf = typeof data.pdfBase64 === 'string' ? data.pdfBase64 : '';
  if (pdf.length > 4 * 1024 * 1024) {
    return json({ ok: false, error: 'pdf_too_large' }, 413);
  }

  // Clamp/validate everything before it reaches an email.
  var overall = num(data.overall, 0, 100);
  if (overall === null) return json({ ok: false, error: 'invalid_overall' }, 400);
  var clean = {
    contact: sanitizeContact(data.contact),
    overall: overall,
    maturity: clampStr(data.maturity, 120),
    risk: clampStr(data.risk, 60),
    categories: sanitizeCategories(data.categories),
    answers: sanitizeAnswers(data.answers),
  };
  if (!validEmail(clean.contact.email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  var from = env.FROM_EMAIL || 'FileFlex Assessment <onboarding@resend.dev>';
  var attachments = pdf
    ? [{ filename: 'FileFlex-Lending-Assessment.pdf', content: pdf }]
    : [];

  var results = {};

  var prospect = await sendEmail(env, {
    from: from,
    to: [clean.contact.email],
    subject: 'Your Secure Lending Collaboration Assessment results',
    html: prospectHtml(clean),
    attachments: attachments,
  });
  results.prospect = prospect.ok;

  if (validEmail(env.OWNER_EMAIL)) {
    var ownerMsg = {
      from: from,
      to: [env.OWNER_EMAIL],
      subject: 'New Lending Assessment — ' + (clean.contact.company || clean.contact.name || 'Prospect') + ' (' + clean.overall + '/100)',
      html: ownerHtml(clean),
      attachments: attachments,
      reply_to: clean.contact.email,
    };
    var owner = await sendEmail(env, ownerMsg);
    results.owner = owner.ok;
  }

  if (!results.prospect) {
    return json({ ok: false, error: 'send_failed', results: results }, 502);
  }
  return json({ ok: true, results: results });
}
