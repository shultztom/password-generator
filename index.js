#! /usr/bin/env node
'use strict';

const {program} = require('commander');
const crypto = require('crypto');

program.version('1.2.0');

program
    .option('--length <length>', "Length of password")
    .parse();

const options = program.opts();

let length = Number(options.length) || 12;
if(length <= 0){
    length = 12;
}

const wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';

const generateRandomString = (length) => {
    let array = new Uint32Array(length);
    return Array.from(crypto.getRandomValues(array)).map((x) => wishlist[x % wishlist.length]).join(""); // getRandomValues introduced in Node 17.4.0
  }

const password = generateRandomString(length);

console.log(password);