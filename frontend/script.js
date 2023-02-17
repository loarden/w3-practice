/* let favoriteBooks = [
  {
      title: "Öreg néne őzikéje",
      author: "Fazekas Anna",
      year: 1952,
      isNewerThan2000: false,
  },
  {
      title: "Szamárfül",
      author: "Romhányi József",
      year: 2003,
      isNewerThan2000: true
  }
]
 */
/* for (const elements of favoriteBooks){
  console.log(elements.title)
}

for (let i=0; i < favoriteBooks.length; i++) {
  console.log(favoriteBooks[i].author)
}
 */
/* if (favoriteBooks[0].isNewerThan2000 == true){
  console.log(favoriteBooks[0].title)
}

if (favoriteBooks[0].isNewerThan2000 === true){
  console.log("This book is newer than 2000: " + favoriteBooks[0].title)
}
else {
  console.log("This book is older than 2000: "+ favoriteBooks[0].title)
}

 */

//5. feladat
/* if (favoriteBooks[0].isNewerThan2000 !== true){
  console.log("This book is older than 2000:"+favoriteBooks[0].title)
}
else {
  console.log("This book is newer than 2000:"+favoriteBooks[0].title)
}

if (favoriteBooks[1].isNewerThan2000 !== true){
  console.log("This book is older than 2000:"+favoriteBooks[1].title)
}
else {
  console.log("This book is newer than 2000:"+favoriteBooks[1].title)
}

//6.feladat
if (favoriteBooks[0].year < 2000){
  console.log("This book is older than 2000:"+favoriteBooks[0].title)
}
else {
  console.log("This book is newer than 2000:"+favoriteBooks[0].title)
}

if (favoriteBooks[1].year < 2000){
  console.log("This book is older than 2000:"+favoriteBooks[1].title)
}
else {
  console.log("This book is newer than 2000:"+favoriteBooks[1].title)
} */

//7. feladat

/* function isNewerThan(year, condition) {
  return year <= condition
} */
/*
for(const elements of favoriteBooks) {
  if(favoriteBooks.isNewerThan(elements.year, 2000)){
    console.log("This book is older than 2000: "+elements.title)
  }
  else {
    console.log("This book is newer than 2000: "+elements.title)
  }
} */

// TODO: define addFavoritePlace(..) function

/* function addFavoritePlace(placeName) {
  if(!placeName.includes("Great")){
    favoritePlaces.push(placeName)
  }
  else {
    return true
  }
} */

// TODO: define printFavoritePlaces() function
/* 
function printFavoritePlaces() {
  console.log(`Favorite Places: ${favoritePlaces.length}`) 
  for (let place of favoritePlaces){
    console.log(place)
  }
}

let favoritePlaces = []

addFavoritePlace("Galápagos Islands")
addFavoritePlace("Great Pyramid of Giza")
addFavoritePlace("Eiffel Tower")
addFavoritePlace("Great Wall of China")
addFavoritePlace("Trans Bhutan Trail")
addFavoritePlace("Colosseum of Rome")
addFavoritePlace("Great Smoky Mountains National Park")

// TODO: print out favorite places

/* console.log(favoritePlaces) */

/* printFavoritePlaces()
 */
 
const person1 = 'Cyclops';
const person2 = 'Princess Diana';
const numOfEyesOfFirst = 1;
const numOfEyesOfSecond = 2;

let joinedNames = person1 + person2; // It is your task to change '?' to valid code
  joinedNames = joinedNames.split(" ").join("")
  console.log(joinedNames)
const lengthOfJoinedNames = joinedNames.length; // change '?' to valid code
  console.log(lengthOfJoinedNames)
const joinedNamesHasEvenCharacters = lengthOfJoinedNames % 2 === 0 // it should be an expressions which gives true or false
  console.log(joinedNamesHasEvenCharacters)

let diffOfNumOfEyesIsLow = 0; // it should be true or false. Hint: Math.abs(x) can be used, but there are other solutions too
  if(Math.abs(diffOfNumOfEyesIsLow)<5) {
    diffOfNumOfEyesIsLow = true
  }
  else {
    diffOfNumOfEyesIsLow = false
  }
  console.log(diffOfNumOfEyesIsLow)

const mostLovedOnes = ['Princess Diana', 'David Attenborough', 'Rowan Atkinson', 'David Beckham'];
const person1IsPerfectToAnyone = mostLovedOnes.includes(person1); // it should be true or false. Hint: you have learnt about a function which checks if an array includes an element
  console.log(person1IsPerfectToAnyone)
const person2IsPerfectToAnyone = mostLovedOnes.includes(person2); // it should be true or false
  console.log(person2IsPerfectToAnyone)

if (joinedNamesHasEvenCharacters && diffOfNumOfEyesIsLow === true) { // final challenge: please code THE condition
  console.log('❤️');
} else {
  console.log("😢");
}
