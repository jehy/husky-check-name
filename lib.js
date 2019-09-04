'use strict';

const {execSync} = require('child_process');

/* istanbul ignore next */
const colors = {
  // eslint-disable-next-line no-console
  red: ((...args)=>console.log(`\x1b[41m${args.join('')}\x1b[0m`)),
};

/* istanbul ignore next */
function getUserEmail()
{
  return execSync('git config user.email').toString('utf8').trim();
}

/* istanbul ignore next */
function getUserName()
{
  return execSync('git config user.name').toString('utf8').trim();
}
function capitalize(str)
{
  return str[0].toUpperCase() + str.substr(1).toLowerCase();
}
function emailToName(userEmail)
{
  if (!userEmail.includes('@')) {
    throw new Error(`Email should contain "@", received "${userEmail}"`);
  }
  const namePart = userEmail.substr(0, userEmail.indexOf('@'));
  const twoParts = namePart.split('.');
  if (twoParts.length === 1) {
    return capitalize(twoParts[0]);
  }
  return `${capitalize(twoParts[0])} ${capitalize(twoParts[1])}`;
}

module.exports = {
  colors,
  getUserEmail,
  getUserName,
  emailToName,
};
