//selects aand extract all DOM element that we will work with
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time-remaining')//# for an element with ID
const score = document.querySelector('#score')

let result = 0;

/*
//function to randomise square output
function randomSquare() {
    squares.forEach(square => {
        squares.classList.remove('mole')//if mole exist in a square remove it
    })

    let randomPosition = squares[Math.floor(Math.random()*9)]// pass random square into an array 1-9
    console.log(randomPosition)
    console.log(Math.floor(Math.random()*9))

}
randomSquare()
//error message :code.js:11 Uncaught TypeError: squares.forEach is not a function
*/

function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole')
    })
  
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    console.log(randomPosition)
    console.log(Math.floor(Math.random()*9))
    randomSquare.classList.add('mole')
    console.log(randomPosition)
  
    
  }