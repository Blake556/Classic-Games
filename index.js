
// Computer Selector Code


function computerChoice() {

    let randomNum = Math.floor(Math.random() * 3) + 1

    let computerSelector = 'images/hand' + randomNum + '.png'

    document.querySelectorAll('img')[1].setAttribute('src', computerSelector);

    return computerSelector
}

let computersChoice = document.querySelectorAll('img')[1]

// Player Selector / Results Code

let player = 1
let computer = 1

let rock = 'images/hand3.png'
let rockButton = document.querySelectorAll('button')[0]

rockButton.addEventListener('click', function() {
    document.querySelectorAll('img')[0].setAttribute('src', rock);
    computerChoice()
    
    if(computersChoice.src === 'http://127.0.0.1:5502/images/hand2.png') {
        document.querySelector('#title').innerHTML = 'You Lose!'
        document.querySelector('.computerScore').innerHTML = 'Computer: ' + computer++
    } else if (computersChoice.src === 'http://127.0.0.1:5502/images/hand1.png') {
        document.querySelector('#title').innerHTML = 'You Win!'
        document.querySelector('.playerScore').innerHTML = 'Player: ' + player++ 
        
    } else {
        document.querySelector('#title').innerHTML = 'Draw!'
        
    }
})


let paper = 'images/hand2.png';
let paperButton = document.querySelectorAll('button')[1]

paperButton.addEventListener('click', function() {
    document.querySelectorAll('img')[0].setAttribute('src', paper);
    computerChoice()
    
    if(computersChoice.src === 'http://127.0.0.1:5502/images/hand1.png') {
        document.querySelector('#title').innerHTML = 'You Lose!'
        document.querySelector('.computerScore').innerHTML = 'Computer: ' + computer++
    } else if (computersChoice.src === 'http://127.0.0.1:5502/images/hand3.png') {
        document.querySelector('#title').innerHTML = 'You Win!'
        document.querySelector('.playerScore').innerHTML = 'Player: ' + player++ 
        
    } else {
        document.querySelector('#title').innerHTML = 'Draw!'
        console.log('Draw')
    }
})


let scissors = 'images/hand1.png';
let scissorsButton = document.querySelectorAll('button')[2]

scissorsButton.addEventListener('click', function() {
    document.querySelectorAll('img')[0].setAttribute('src', scissors);
    computerChoice()
    
    if(computersChoice.src === 'http://127.0.0.1:5502/images/hand3.png') {
        document.querySelector('#title').innerHTML = 'You Lose!'
        document.querySelector('.computerScore').innerHTML = 'Computer: ' + computer++ 
    } else if (computersChoice.src === 'http://127.0.0.1:5502/images/hand2.png') {
        document.querySelector('#title').innerHTML = 'You Win!'
        document.querySelector('.playerScore').innerHTML = 'Player: ' + player++ 
    } else {
        document.querySelector('#title').innerHTML = 'Draw!'
        console.log('Draw')
    }
})











// Keeping Score Logic

// let img1 = document.querySelectorAll('img')[0]

// let img2 = document.querySelectorAll('img')[0]


// if(img === 'images/hand3.png' && img === 'images/hand1.png') {

// } else if () {

// }

// if (rock === computerChoice()){
//     console.log('draw')
// }





