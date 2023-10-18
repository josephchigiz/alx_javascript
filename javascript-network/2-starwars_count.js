const request = require('request');

const url = process.argv[2];
request.get(url, function(error, response, body) {
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
    const films= JSON.parse(body);
    const charID = "18";
    let count = 0;

    //Iterate film by film
    for (const film of films.results) {
        if (film.characters.includes(charID)) {
        count++;
        }
    }
    console.log(count)
});
