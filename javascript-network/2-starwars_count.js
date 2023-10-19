// const request = require('request');

// const url = process.argv[2];
// request.get(url, function(error, response, body) {
//     if (error) {
//         console.error(`Error: ${error}`);
//         return;
//     }
//     if (response.statusCode !== 200) {
//         console.error(`Status: ${response.statusCode}`);
//         return;
//     }
//     // this script prints No. of movies he was in
//     // const films= JSON.parse(body).results;
//     const films= JSON.parse(body).results;
//     const id = "18";
//     let count = 0;

//     //Iterate film by film
//     for (const film of films) {
//         if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)) {
//         count++;
//         }
//     }
//     console.log(count)
// });




// const request = require('request');

// const url = process.argv[2];
// const id = "18";

// request.get(url, function(error, response, body) {
//     if (error) {
//         console.error(`Error: ${error}`);
//         return;
//     }
//     if (response.statusCode !== 200) {
//         console.error(`Status: ${response.statusCode}`);
//         return;
//     }
//     // this script prints No. of movies he was in
//     // const films= JSON.parse(body).results;
//     const films= JSON.parse(body).results;
//     let count = 0;

//     //Iterate film by film
//     for (const film of films) {
//         if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)) {
//         count++;
//         }
//     }
//     console.log(count)
// });

const request = require('request');

const apiUrl = process.argv[2]; // The API URL for Star Wars films
const characterId = "18"; // Character ID for Wedge Antilles

// Make a GET request to the Star Wars API films URL
request.get(apiUrl, function(error, response, body) {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    if (response.statusCode !== 200) {
        console.error(`Status: ${response.statusCode}`);
        return;
    }

    const films = JSON.parse(body).results;
    let count = 0;

    // Iterate through the films and count those where Wedge Antilles is present
    for (const film of films) {
        // Check if characters array contains the character ID
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
            count++;
        }
    }

    console.log(`Number of movies where Wedge Antilles is present: ${count}`);
});