# husky-check-name

[![npm](https://img.shields.io/npm/v/husky-check-name.svg)](https://npm.im/husky-check-name)
[![license](https://img.shields.io/npm/l/husky-check-name.svg)](https://npm.im/husky-check-name)
[![Build Status](https://travis-ci.org/jehy/husky-check-name.svg?branch=master)](https://travis-ci.org/jehy/husky-check-name)
[![dependencies Status](https://david-dm.org/jehy/husky-check-name/status.svg)](https://david-dm.org/jehy/husky-check-name)
[![devDependencies Status](https://david-dm.org/jehy/husky-check-name/dev-status.svg)](https://david-dm.org/jehy/husky-check-name?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/jehy/husky-check-name/badge.svg?branch=master)](https://coveralls.io/github/jehy/husky-check-name?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jehy/husky-check-name/badge.svg)](https://snyk.io/test/github/jehy/husky-check-name)

Add this module to check that user names correspond to their emails.

For example, user with email "kate@google.com" should have git name "Kate",
and user with name "vladimir.putin@kremlin.ru" should have git name "Vladimir Putin".

#### Install

```bash
npm i husky-check-name
```

#### Usage (package.json)

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "husky-check-name"
    }
  }
}
```


#### See also

 * [husky-check-email](https://www.npmjs.com/package/husky-check-email)
 * [husky-add-issue-tracker](https://www.npmjs.com/package/husky-add-issue-tracker)

