#!/usr/bin/node

const fs = require('fs');
const filep = process.argv[2];
const msg = process.argv[3];
fs.writeFile(filep, msg, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
