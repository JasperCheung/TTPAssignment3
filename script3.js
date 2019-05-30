const getVolume = () =>{
  let volume = Math.PI;// returns 3.141592653589793
  let radius = document.getElementsByName('radius')[0].value;
  volume = volume * 4 / 3 * radius * radius * radius;
  document.getElementById('volume').innerHTML = "the answer is: " + volume;


};
