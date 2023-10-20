const request = require('request');

const fs = require('fs');

const url = process.argv[2];

request.get(url).pipe(fs.createWriteStream('loremipsum.html'))