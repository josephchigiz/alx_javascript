#!/usr/bin/node
/**
 * This script gets the contents of a webpage and stores it in a file.
 */

const request = require('request');
const fs = require('fs');
const path = require('path');

const url = process.argv[2];
const fileName = process.argv[3];

const filePath = path.join(__dirname, fileName);
request.get(url).pipe(fs.createWriteStream(filePath));