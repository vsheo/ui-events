let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Frontend interaction
let upSideDown = document.querySelector('a:nth-of-type(1)')

upSideDown.addEventListener('mouseover', flipHandler)

function flipHandler() {
  upSideDown.classList.toggle('flip180deg')
}


// desktop interaction
let rotateY360deg = document.querySelector('a:nth-of-type(2)')

rotateY360deg.addEventListener('click', rotateHandler)

function rotateHandler() {
  rotateY360deg.classList.toggle('rotateY360deg')
}


// Development interaction
let mousePosition = document.querySelector('a:nth-of-type(4)')

mousePosition.addEventListener('mousemove', returnPosition)
console.log(mousePosition);

function returnPosition(e) {
  // geef de coordinaten van de mouse positie terug
  x = e.offsetX;
  y = e.offsetY;
  console.log(`Mouse coordinates: X: ${x}, Y: ${y}`);
  // maak de x en y coordinaten tot CSS variables
  mousePosition.style.setProperty('--x', x)
  mousePosition.style.setProperty('--y', y)
  mousePosition.style.setProperty('--z', x-y)

  // css class om de kleur aan te passen
  mousePosition.classList.add('positionColor')
}

