
const imgball=document.getElementById('ballimg');
const btnask=document.getElementById('questionbtn');
let answer = document.getElementById('answer')
btnask.addEventListener('click', () => {
  let question= prompt("Ask me what you want to know");
  imgball.effect("shaking");

});

