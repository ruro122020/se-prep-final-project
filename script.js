const factsButton = document.getElementById("factsButton");
const factsArray = [
  `The "sixth sick sheik's sixth sheep's sick" is believed to be the toughest tongue twister in the English language.`,
   `Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.`, 
   `"Stewardesses" is the longest word that is typed with only the left hand.`,
   `"Dreamt" is the only English word that ends in the letters "mt".`,
   `Bugs breath through holes on the sides of their bodies called sphericals`,
]
let count = 0;

factsButton.addEventListener("click", changeFact);

function changeFact(){
  const facts = document.getElementById('fact');
  const newFact = document.createElement('div');
  const h1Child = document.getElementById("h1Facts");
  //count resets to zero once it hits the end of the array
  if(count === factsArray.length){
    count=0;
  }
    //remove current fact element showing
    if(facts){
      facts.remove();
    }
    //give new element an id name
    newFact.setAttribute("id", "fact");
    //add text to new element
    newFact.textContent = factsArray[count];
    //append new element 
    h1Child.parentNode.insertBefore(newFact, h1Child.nextSibling);
    //increase count to go to the next fact in the factsArray
    count++
}
