#!/usr/bin/node
const request = require('request');
request('https://swapi-api.alx-tools.com/api/films/' +process.argv[2], function (error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        //this will convert it to a js object to be able to use it
        console.log(JSON.parse(body).title);
    } else {
        console.log('code:' +response.statusCode);
    }
});
