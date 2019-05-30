let buttons = document.getElementsByTagName('button');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

console.log(buttons);

const argue1 = () => {
  //console.log(p1.innerText);
  //console.log(p1.innerText == "");
  if(p2.innerText == ""){
    p1.innerText = 'I\'m Right';
  }else{
    p1.innerText = 'No, I\'m Right';
    p2.innerText = '';
  }
};

const argue2 = () => {
  if(p1.innerText == ""){
    p2.innerText = 'I\'m Right';
  }else{
    p2.innerText = 'No, I\'m Right';
    p1.innerText = "";
  }
};



buttons[0].addEventListener('click', argue1);
buttons[1].addEventListener('click', argue2);
