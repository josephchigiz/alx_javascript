const request = require('request');

const url = process.argv[2];
const id = "18";

request.get(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    if (response.statusCode !== 200) {
        console.error(`Status: ${response.statusCode}`);
        return;
    }
    // this script prints No. of movies he was in
    // const films= JSON.parse(body).results;
    const films= JSON.parse(body).results;
    // const id = "18";
    let count = 0;

    //Iterate film by film
    for (const film of films) {
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)) {
        count++;
        }
    }
    console.log(count)
});
