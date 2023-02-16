let favoriteBooks = [
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
if (favoriteBooks[0].isNewerThan2000 !== true){
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
}



