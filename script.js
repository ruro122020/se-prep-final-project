const button = document.getElementById("factsButton");
button.addEventListener("click", changeFact);
const factsArray = [
  `The "sixth sick sheik's sixth sheep's sick" is believed to be the toughest tongue twister in the English language.`,
   `Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.`, 
   `"Stewardesses" is the longest word that is typed with only the left hand.`,
   `"Dreamt" is the only English word that ends in the letters "mt".`,
   `Bugs breath through holes on the sides of their bodies called sphericals`,
]
let count = 0;
function changeFact(){
  const h1Child = document.getElementById("h1Facts");
  if(count === factsArray.length){
    count=0;
  }

    const facts = document.getElementsByClassName('facts');
    facts[0].remove();
    const newFact = document.createElement('div');
    newFact.className = 'facts';
    newFact.textContent = factsArray[count];
    h1Child.parentNode.insertBefore(newFact, h1Child.nextSibling);
   
  
    // const parentDiv = document.getElementById('mainBox');
    // parentDiv.prepend(newFact);
    count++
}
