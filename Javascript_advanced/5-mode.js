function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);


    const buttonSpooks = document.createElement('button');
    buttonSpooks.textContent = 'Spooky';
    buttonSpooks.addEventListener('click', spooky);
    document.body.appendChild(buttonSpooks);


    const buttonDark = document.createElement('button');
    buttonDark.textContent = 'Dark Mode';
    buttonDark.addEventListener('click', darkMode);
    document.body.appendChild(buttonDark);
    
    
    const buttonScream = document.createElement('button');
    buttonDark.textContent = 'Scream Mode';
    buttonDark.addEventListener('click', screamMode);
    document.body.appendChild(buttonScream);
}

main();