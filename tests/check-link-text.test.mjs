import { test } from "node:test";
import assert from "node:assert/strict";

import {
  normalize,
  isGeneric,
  checkHtmlAnchors,
  checkHtmlButtons,
  checkIconOnlyControls,
  checkEmptyControls,
  checkAriaHiddenNameControls,
  stripAriaHidden,
  checkMarkdownLinks,
} from "../scripts/check-link-text.mjs";

test("normalize strips tags, entities, arrows and punctuation", () => {
  assert.equal(normalize("  Learn <span>More</span> &rarr; "), "learn more");
  assert.equal(normalize("Read more \u2192"), "read more");
  assert.equal(normalize("Click, here!"), "click here");
});

test("isGeneric matches generic phrases case/whitespace-insensitively", () => {
  assert.equal(isGeneric("Learn More"), true);
  assert.equal(isGeneric("  CLICK   HERE  "), true);
  assert.equal(isGeneric("Read the zero trust guide"), false);
});

test("checkHtmlAnchors flags generic-text anchors without aria-label", () => {
  const v = checkHtmlAnchors('<a href="/x">Learn More</a>');
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "anchor");
  assert.equal(v[0].text, "learn more");
});

test("checkHtmlAnchors clears anchors with aria-label (quoted)", () => {
  const v = checkHtmlAnchors(
    '<a href="/x" aria-label="Learn more about the platform">Learn More</a>',
  );
  assert.equal(v.length, 0);
});

test("checkHtmlAnchors clears anchors with aria-labelledby", () => {
  const v = checkHtmlAnchors('<a href="/x" aria-labelledby="t1">More</a>');
  assert.equal(v.length, 0);
});

test("checkHtmlAnchors clears anchors with non-generic text", () => {
  const v = checkHtmlAnchors('<a href="/x">Read the zero trust guide</a>');
  assert.equal(v.length, 0);
});

test("checkHtmlButtons flags generic-text buttons without aria-label", () => {
  const v = checkHtmlButtons("<button>Go</button>");
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "button");
  assert.equal(v[0].text, "go");
});

test("checkHtmlButtons clears buttons with aria-label", () => {
  const v = checkHtmlButtons('<button aria-label="Submit form">Go</button>');
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls flags icon-only anchor with aria-hidden svg", () => {
  const v = checkIconOnlyControls(
    '<a href="/x"><svg aria-hidden="true"><path/></svg></a>',
  );
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "icon-only anchor");
});

test("checkIconOnlyControls flags icon-only button with empty img alt", () => {
  const v = checkIconOnlyControls('<button><img src="i.svg" alt=""></button>');
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "icon-only button");
});

test("checkIconOnlyControls clears control with aria-label", () => {
  const v = checkIconOnlyControls(
    '<button aria-label="Open search"><svg aria-hidden="true"></svg></button>',
  );
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls clears control with title", () => {
  const v = checkIconOnlyControls(
    '<a href="/x" title="Open menu"><svg></svg></a>',
  );
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls clears img with non-empty alt", () => {
  const v = checkIconOnlyControls(
    '<a href="/x"><img src="i.svg" alt="Company logo"></a>',
  );
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls clears img with expression alt", () => {
  const v = checkIconOnlyControls('<a href="/x"><img src={src} alt={label}></a>');
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls clears svg with aria-label", () => {
  const v = checkIconOnlyControls(
    '<button><svg aria-label="Search"></svg></button>',
  );
  assert.equal(v.length, 0);
});

test("checkIconOnlyControls clears svg with role=img and title", () => {
  const v = checkIconOnlyControls(
    '<a href="/x"><svg role="img"><title>Search</title></svg></a>',
  );
  assert.equal(v.length, 0);
});

test("checkEmptyControls flags empty anchor with no accessible name", () => {
  const v = checkEmptyControls('<a href="/x"></a>');
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "empty anchor");
});

test("checkEmptyControls flags empty button with no accessible name", () => {
  const v = checkEmptyControls("<button></button>");
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "empty button");
});

test("checkEmptyControls clears empty control with aria-label", () => {
  const v = checkEmptyControls('<button aria-label="Close"></button>');
  assert.equal(v.length, 0);
});

test("checkEmptyControls ignores controls containing an icon", () => {
  const v = checkEmptyControls("<button><svg></svg></button>");
  assert.equal(v.length, 0);
});

test("stripAriaHidden removes aria-hidden subtrees and their text", () => {
  assert.equal(
    normalize(stripAriaHidden('<span aria-hidden="true">More</span>')),
    "",
  );
  assert.equal(
    normalize(stripAriaHidden('Read <span aria-hidden="true">more</span>')),
    "read",
  );
});

test("checkAriaHiddenNameControls flags anchor whose text is only aria-hidden", () => {
  const v = checkAriaHiddenNameControls(
    '<a href="/x"><span aria-hidden="true">Continue</span></a>',
  );
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "aria-hidden-name anchor");
});

test("checkAriaHiddenNameControls flags button whose text is only aria-hidden", () => {
  const v = checkAriaHiddenNameControls(
    '<button><span aria-hidden="true">Submit</span></button>',
  );
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "aria-hidden-name button");
});

test("checkAriaHiddenNameControls clears control with aria-label", () => {
  const v = checkAriaHiddenNameControls(
    '<a href="/x" aria-label="Continue to checkout"><span aria-hidden="true">Continue</span></a>',
  );
  assert.equal(v.length, 0);
});

test("checkAriaHiddenNameControls clears control with title", () => {
  const v = checkAriaHiddenNameControls(
    '<button title="Submit form"><span aria-hidden="true">Submit</span></button>',
  );
  assert.equal(v.length, 0);
});

test("checkAriaHiddenNameControls clears control with visible text outside aria-hidden", () => {
  const v = checkAriaHiddenNameControls(
    '<a href="/x">Read <span aria-hidden="true">&rarr;</span></a>',
  );
  assert.equal(v.length, 0);
});

test("checkAriaHiddenNameControls clears control with a labelled icon", () => {
  const v = checkAriaHiddenNameControls(
    '<a href="/x"><img src="i.svg" alt="Download"><span aria-hidden="true">Get it</span></a>',
  );
  assert.equal(v.length, 0);
});

test("checkAriaHiddenNameControls ignores fully empty controls", () => {
  const v = checkAriaHiddenNameControls('<a href="/x"></a>');
  assert.equal(v.length, 0);
});

test("checkMarkdownLinks flags generic-text markdown links", () => {
  const v = checkMarkdownLinks("See [click here](/x) for info.");
  assert.equal(v.length, 1);
  assert.equal(v[0].kind, "markdown link");
  assert.equal(v[0].text, "click here");
});

test("checkMarkdownLinks clears descriptive markdown links", () => {
  const v = checkMarkdownLinks("[read the zero trust guide](/blog/zt)");
  assert.equal(v.length, 0);
});

test("checkMarkdownLinks skips image links", () => {
  const v = checkMarkdownLinks("![more](/img.png)");
  assert.equal(v.length, 0);
});
