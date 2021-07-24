#! /usr/bin/env node
'use strict';

const {program} = require('commander');
const crypto = require('crypto');

program.version('1.0.0');

program
    .option('--length <length>', "Length of password")
    .parse();

const options = program.opts();

let length = Number(options.length) || 12;
if(length <= 0){
    length = 12;
}

const wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';

const password = Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join("");

console.log(password);