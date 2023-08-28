# Chromium Bug 1474271

[https://bugs.chromium.org/p/chromium/issues/detail?id=1474271&q=backwards&can=2](https://bugs.chromium.org/p/chromium/issues/detail?id=1474271&q=backwards&can=2)

This repo contains an small react app to demonstrate the behaivour of Chromium Bug 1474271

## Working demo

[https://rubendigio.github.io/test-input-backwards/](https://rubendigio.github.io/test-input-backwards/)

## Installation

Clone repo and install dependencies

```
$ npm install
```

Start development server

```
$ npm run dev
```

## Steps to reproduce

 1. Mouse down on the last char of the text input
 2. Drag selection to the left and move mouse outside of the text input.
 3. Mouse up when cursor is hover the PDF or iframe.
 4. Use keyboard to enter text.
 5. The text is written backwards.

 ## Variants

The bug occurs either with iframes or with embedded PDF views (which I think it's an iframe also). Also, a parent cointainer should have visible scrollbars.

You can toggle between PDF and iframe. You can also toggle the scrollbar visibility