const body = document.querySelector("body");
const clock = document.querySelector('.clock');

const coloChange = function(){
    
    clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(coloChange,1000);




body.style.color = "white";
const randomColor = function () {
  let startCC = '#';
  const colorCode = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    startCC += colorCode[Math.floor(Math.random() * 16)];
  }
  return startCC;
};

const c = function(){
    document.body.style.backgroundColor=randomColor();
    console.log(randomColor());

}

setInterval(c,1000)