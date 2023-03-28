# `@nooptoday/profanity-filter`

![https://github.com/nooptoday/profanity-filter/actions](https://github.com/nooptoday/profanity-filter/workflows/CI/badge.svg)

> Node.js API for rustrict.
> Built with napi-rs

# Usage

## Install

```
yarn add @nooptoday/profanity-filter
```

```
npm install @nooptoday/profanity-filter
```

## Code

```javascript
const { censor } = require('@nooptoday/profanity-filter');

censor('hello fucking world'); // hello f****** world
```