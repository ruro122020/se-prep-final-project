const factsButton = document.getElementById("factsButton");
const jokesButton = document.getElementById("jokesButton");
const factsArray = [
  `The "sixth sick sheik's sixth sheep's sick" is believed to be the toughest tongue twister in the English language.`,
   `Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.`, 
   `"Stewardesses" is the longest word that is typed with only the left hand.`,
   `"Dreamt" is the only English word that ends in the letters "mt".`,
   `Bugs breath through holes on the sides of their bodies called sphericals`,
]
const jokesArray = ['joke-2', 'joke-3', 'joke-4']
let count = 0;

factsButton.addEventListener("click", changeFact);
jokesButton.addEventListener("click", changeJoke)

function changeFact(){
  const facts = document.getElementsByClassName('facts');
  const newFact = document.createElement('div');
  const h1Child = document.getElementById("h1Facts");
  //count resets to zero once it hits the end of the array
  if(count === factsArray.length){
    count=0;
  }
    //remove current fact element showing
    facts[0].remove();
    //give new element a class name
    newFact.className = 'facts';
    //add text to new element
    newFact.textContent = factsArray[count];
    //append new element 
    h1Child.parentNode.insertBefore(newFact, h1Child.nextSibling);
    //increase count to go to the next fact in the factsArray
    count++
}

function changeJoke(){
  const joke = document.getElementsByClassName("jokes");
  const newJoke = document.createElement("div");
  const h1Child = document.getElementById("h1Jokes");
  //count resets to zero once it hits the end of the array
  if(count === jokesArray.length){
    count = 0
  }
  //remove current joke element showing
  joke[0].remove();
  //give new element a class name
  newJoke.className = 'jokes';
  //add text to new element
  newJoke.textContent = jokesArray[count];
  //append new element
  h1Child.parentNode.insertBefore(newJoke, h1Child.nextSibling)
  count++


}