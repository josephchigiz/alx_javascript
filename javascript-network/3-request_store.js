const request = require('request');
const fs = require('fs');
const path = require('path');

const url = process.argv[2];
const fileName = 'loremipsum.html';

const filePath = path.join(__dirname, fileName);
request.get(url).pipe(fs.createWriteStream(filePath))