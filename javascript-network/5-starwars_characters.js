const request = require('request');

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        return;
    }

    const film = JSON.parse(body);

    if (film.characters.length === 0) {
        console.log(movieId);
    } else {
    //     console.log(film.title);
        film.characters.forEach((characterUrl) => {
            const characterId = characterUrl.split('/').slice(-2, -1)[0];

            request.get(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    console.error(charError);
                } else if (charResponse.statusCode !== 200) {
                    console.error(charResponse.statusCode);
                } else {
                    const character = JSON.parse(charBody);
                    console.log(character.name);
                }
            });
        });
    }
});