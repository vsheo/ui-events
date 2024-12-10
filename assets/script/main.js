let interaction = document.querySelector('a:nth-of-type(12)');

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Frontend interaction
let upSideDown = document.querySelector('a:nth-of-type(1)');

upSideDown.addEventListener('mouseover', flipHandler)

function flipHandler() {
  upSideDown.classList.toggle('flip180deg')
}


// desktop interaction
let rotateY360deg = document.querySelector('a:nth-of-type(2)');

rotateY360deg.addEventListener('click', rotateHandler)

function rotateHandler() {
  rotateY360deg.classList.toggle('rotateY360deg')
}


// & interaction
let dblClick = document.querySelector('a:nth-of-type(3)');

dblClick.addEventListener('dblclick', rotateJump)
console.log(dblClick)

function rotateJump() {
  dblClick.classList.toggle('rotateJump')
}


// Development interaction
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX
// https://www.geeksforgeeks.org/how-to-change-background-color-according-to-the-mouse-location-using-javascript/
let mousePosition = document.querySelector('a:nth-of-type(4)')

mousePosition.addEventListener('mousemove', returnPosition);
console.log(mousePosition);

function returnPosition(e) {
  // geef de coordinaten van de mouse positie terug
  x = e.offsetX;
  y = e.offsetY;
  console.log(`Mouse coordinates: X: ${x}, Y: ${y}`);
  // maak de x en y coordinaten tot CSS variables
  mousePosition.style.setProperty('--x', x);
  mousePosition.style.setProperty('--y', y);
  mousePosition.style.setProperty('--z', x-y);

  // css class om de kleur aan te passen
  mousePosition.classList.add('positionColor');
}


// Sprint 5 interaction
let ctrlClick = document.querySelector('a:nth-of-type(5)');

ctrlClick.addEventListener('click', newColor);

function newColor (e) {
  console.log(e.ctrlKey)
  // doe dit als de control key gedrukt wordt
  if (e.ctrlKey) {
    ctrlClick.classList.add('newColor');
  }
}


// Fix interaction
let spaceClick = document.querySelector('a:nth-of-type(6)');

spaceClick.addEventListener('keydown', spaceSpin);

function spaceSpin (e) {
  // hover op 'fix' +   spacebar
  if (e.key == ' ') {
    spaceClick.classList.toggle('spinUpDown');
  }
}


// the interaction
let spaceUp = document.querySelector('a:nth-of-type(7)');

spaceUp.addEventListener('keyup', spaceUpJump);

function spaceUpJump (e) {
  // spacebar 
  if (e.key == ' ') {
    spaceUp.classList.toggle('spaceJump');
  }

  if (spaceUp.classList.contains('spaceJump')) {
    let varSeconds = getSeconds()

    // maak rgb kleur afkangekijk van hoelang de animation bezig was 
    spaceUp.style.setProperty('--r', varSeconds * 0.1234);
    spaceUp.style.setProperty('--g', varSeconds * 1.987);
    spaceUp.style.setProperty('--b', varSeconds * 0.52354);
    console.log(getSeconds())
  }
}

function getSeconds() {
  let now = new Date();
  let seconds = now.getSeconds();
  return seconds;
}


// flow interaction
let spin = document.querySelector('a:nth-of-type(8)');
let rotation = 0;
console.log(spin);

spin.addEventListener('wheel', onscroll);
spin.classList.add('scaling');

function onscroll() {
  rotation+=1;
  // spin.style.transform = `rotateX(${rotation}deg)`;
  spin.style.setProperty('--scrolled', rotation);
  console.log(spin);
}
// function scrollEnd() {
//   scrolling = false;
//   console.log(scrolling);
// }


// function scrolling() {
//   // scroll event
//   // spin.classList.toggle('scaling');
//   let wheelCount = 0

//   console.log(spin);

//   isSpinning = true;

//   if (spin) {
//     console.log(isSpinning);

//     while (isSpinning == true) {
//       wheelCount++;
//       console.log(wheelCount);
//       isSpinning = false;
//     }
//   }



//   // while (spin == true) {
//   //   wheelCount++;
//   //   console.log(wheelCount);
//   // }
// }
