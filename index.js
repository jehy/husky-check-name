#!/usr/bin/env node

'use strict';

const lib = require('./lib.js');

const {colors} = lib;

const userEmail = lib.getUserEmail();
const userName = lib.getUserName();
const proposedName = lib.emailToName(userEmail);

// console.log(`checking if email is ${needEmail}`);
if (proposedName.toLowerCase() !== userName.toLowerCase())
{
  colors.red('You need to commit with your name');
  colors.red(`Your email is set to "${userEmail}"`);
  colors.red(`Your name is set to "${userName}"`);
  colors.red('You can fix this with following command:');
  colors.red(`git config --global user.name "${proposedName}"`);
  colors.red('or, only for local repo,');
  colors.red(`git config user.name "${proposedName}"`);
  process.exit(1);
}
// console.log('email check okay');
