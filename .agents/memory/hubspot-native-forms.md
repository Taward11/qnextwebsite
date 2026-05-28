---
name: HubSpot native HTML forms (no JS embed)
description: Gotchas when submitting to HubSpot Forms directly from a native HTML form via the v3 integration API
---

# HubSpot native HTML forms — submission gotchas

When replacing HubSpot's `hbspt.forms.create` JS embed with a native HTML form that POSTs directly to HubSpot, three behaviors will bite you and aren't documented anywhere obvious.

## 1. The form must have captcha DISABLED in HubSpot

The public v3 integration API (`https://api.hsforms.com/submissions/v3/integration/submit/{portal}/{form}`) refuses to accept any submission when the form has CAPTCHA enabled in HubSpot's UI:

```
HTTP 400 — FORM_HAS_RECAPTCHA_ENABLED
"Form '%s' can't receive API submissions as Captcha (SPAM prevention) is enabled."
```

**Why:** the captcha is only solvable by HubSpot's own embed JS. There is no public way to pass a captcha token to the integration API.
**How to apply:** Marketing → Forms → open form → Settings tab → CAPTCHA toggle off. Replace the lost protection with your own (honeypot field + N-second timing gate covers >99% of bot spam in practice).

## 2. HubSpot's internal `/formsnext/multipart/` endpoint is NOT a substitute

Despite `/public/` appearing in its path, `https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/{portal}/{form}` returns **HTTP 401** when called from a third-party origin. It validates origin/referer or signed tokens that only HubSpot's own embed JS produces. Do not try to reverse-engineer it — they rotate the contract.

## 3. Submissions with `@example.com` (and other reserved domains) are silently dropped

The v3 integration API returns **HTTP 200 with the form's configured success message** for submissions using `@example.com` / `@test.com` / `@foo.com` etc., but **no contact is created**. The submission won't appear in Contacts, in the form's Submissions tab, or trigger notifications.

**How to apply:** when smoke-testing a form via curl, always use a real-looking domain (e.g. `you+test-$(date +%s)@gmail.com` or your own corporate domain). An HTTP 200 alone does not prove the contact landed — verify in HubSpot Contacts.

## 4. Notification-email suppression for known HubSpot users

HubSpot suppresses form-notification emails when the submitter's email matches a HubSpot user/recipient on the same form. Testing the form as yourself will not send you the notification even though the submission lands correctly. Test with an outside email (gmail, personal) or add a second recipient to confirm notifications work.

## 5. Don't put feedback DOM inside the `<form>` if you hide the form on success

A common pattern is `form.style.display = 'none'; setStatus('Thanks!', 'ok')`. If the status element is a *child of the form*, the success message gets hidden along with the form and the user sees nothing happen.
**How to apply:** keep the status `<div>` as a sibling of `<form>`, not a child. Scroll it into view on success — long forms push the status below the fold.

## Payload shape that works

```js
{
  submittedAt: Date.now(),
  fields: [{ name, value }, ...],                 // skip empty optional fields
  context: { pageUri, pageName, hutk? },          // hutk from `hubspotutk` cookie
  legalConsentOptions: {
    consent: {
      consentToProcess: true,
      text: "...",
      communications: [{ value: bool, subscriptionTypeId: N, text: "..." }]
    }
  }
}
```

`subscriptionTypeId` for each consent checkbox comes from the form's JSON schema at
`https://forms-na1.hsforms.com/embed/v3/form/{portal}/{form}/json` (look inside `metaData[].legalConsentOptions`).
