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


// user interaction
let longpress = document.querySelector('a:nth-of-type(9)');

// de functie aan roepen
holdTime(longpress);


// de fuctie die berekent hoeveel miliseconden de knop ingedrukt was.
function holdTime(link) {
  link.addEventListener('mousedown', (e) => {
    // 0 is de linker muisknop
    console.log(e.button);

    if (e.button == 0) {
      // sla op: de huidige tijd, in miliseconden, op het moment van mousedown
      startTime = Date.now();

      // check wat gebeurt
      console.log('start time ' + startTime);

      // haal de oude losGelaten class weg. voor de volgende keer dat de knop los gelaten wordt.(hier onder)
      link.classList.remove('losGelaten');

      // op mousedown add een class die de link kleiner maakt en van kleur veranderd.
      link.classList.add('ingedrukt');
    }
  });

  link.addEventListener('mouseup', (f) => {
    if (f.button == 0) {
      // sla op: de huidige tijd, in miliseconden, op het moment van mouseup
      stopTime = Date.now()

      // bereken het verschil tussen de start en stop tijden. dit is de tijd hoelang de knop ingedrukt was.
      holdTijd = stopTime - startTime;

      // check wat gebeurt
      console.log('stop time ' + stopTime);
      console.log('verschil ' + holdTijd);
    }

    // als het langer dan 2 seconden ingedrukt was, verander de kleur
    if (holdTijd >= 2000) {
      link.classList.add('losGelaten');
    } else {
      // haal de ingedrukt class weg als het niet lang genoeg ingedrukt was.
      link.classList.remove('ingedrukt');
      console.log('probeer tenminste 2 seconden ingedrukt te houden');
    }
  });
}


// interface interaction
let screenSize = document.querySelector('a:nth-of-type(10)');

window.addEventListener("resize", newColor);


function newColor() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 1200) {
    console.log(windowWidth)
    screenSize.style.setProperty('--x', windowWidth / 8);
    screenSize.style.setProperty('--y', windowWidth / 12);
    screenSize.style.setProperty('--z', 0);

    screenSize.classList.add('resizeColor');
  }
}
