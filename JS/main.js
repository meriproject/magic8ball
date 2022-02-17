
const imgball = document.getElementById('ballimg');
const btnask = document.getElementById('questionbtn');
let answer = document.getElementById('answer');

btnask.addEventListener('click', () => {

  var magic8Answers= new Array();
  magic8Answers[0]='img/magic/magic8ball_1.png'; 
  magic8Answers[1]='img/magic/magic8ball_2.png';
  magic8Answers[2]='img/magic/magic8ball_3.png';
  magic8Answers[3]='img/magic/magic8ball_4.png';
  magic8Answers[4]='img/magic/magic8ball_5.png';
  magic8Answers[5]='img/magic/magic8ball_6.png';
  magic8Answers[6]='img/magic/magic8ball_7.png';
  magic8Answers[7]='img/magic/magic8ball_8.png';
  magic8Answers[8]='img/magic/magic8ball_9.png';
  magic8Answers[9]='img/magic/magic8ball_10.png';
  magic8Answers[10]='img/magic/magic8ball_11.png';
  magic8Answers[11]='img/magic/magic8ball_12.png';
  magic8Answers[12]='img/magic/magic8ball_13.png';
  magic8Answers[13]='img/magic/magic8ball_14.png';
  magic8Answers[14]='img/magic/magic8ball_15.png';
  magic8Answers[15]='img/magic/magic8ball_16.png';
  magic8Answers[16]='img/magic/magic8ball_17.png';
  magic8Answers[17]='img/magic/magic8ball_18.png';
  magic8Answers[18]='img/magic/magic8ball_19.png';
  magic8Answers[19]='img/magic/magic8ball_20.png';
  magic8Answers[20]='img/magic/magic8ball_extra.png';
  
  imgball.classList.remove("shaking");
  let question = prompt("Ask me what you want to know");
  imgball.classList.add("shaking");

  if (question.length >1) {
    var index = Math.floor(Math.random() * Math.floor(magic8Answers.length));
       document.querySelector('img').src=magic8Answers[index];
    console.log(magic8Answers[index])
  } 
  else {

    alert('Please Enter a question!');
    imgball.classList.remove("shaking");

  }

});