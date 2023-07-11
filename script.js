// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2)
const button = document.getElementById("button")

button.addEventListener("click", changeFact)

function changeFact(event){
  console.log('event', event)

}
function show(element){
document.getElementById(element).hidden = false;
}
function hide(element){
  document.getElementById(element).hidden=true;
}
