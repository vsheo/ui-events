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


