# Practise-js


>Clock

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock</title>
    <link rel="stylesheet" href="just.css" />
  </head>
  <body>
    <div class="container">
      <span class="clock"></span>
    </div>

    <script src="just.js"></script>
  </body>
</html>

```
```css

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    /* background-color: black; */
    font-family: Arial, sans-serif;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    background-color: orange;
    border-radius: 10px;
  }
  
  .clock {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
```
```javascript
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

```
![UI](https://github.com/user-attachments/assets/826c8611-39e5-4c24-b6a9-a7945640b33d>
)

