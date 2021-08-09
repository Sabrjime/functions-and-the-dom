let pokemonImageURLs = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
]





let pokemonHeading = document.createElement("h1");
pokemonHeading.append("Best Pokemon");
pokemonHeading.classList.add("pokemon-heading");
//pokemonHeading.classList.add("pokemon-yellow");

let pokemonGalleryElement = document.querySelector(".pokemon-gallery")
pokemonGalleryElement.append(pokemonHeading);
//"append" means "add to the end of a list"
//"prepend" means "add to the beginning of a list

for(let index=0;index<pokemonImageURLs.length;index+=1){
    let imageURL = pokemonImageURLs[index];
    let pokemonImage = document.createElement("img")
    pokemonImage.src = imageURL;
    pokemonGalleryElement.append(pokemonImage)
    
}

//let allParagraphElements = document.querySelectorAll("p");
//console.log(allParagraphElements);