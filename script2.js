const validateForm = () =>{

 let value = document.getElementsByName('pass')[0].value;
  if (value != 12345678) alert("wrong password");
  else{
    document.getElementsByTagName('h1')[0].innerText = "good job";
  }
  return false;

};
