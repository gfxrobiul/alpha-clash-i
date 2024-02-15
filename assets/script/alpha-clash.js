// function play() {
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground section 
//     const playGroundSection =document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }



function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log('player Pressed:',playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed , expectedAlphabet);

//check matched or not
if (playerPressed === expectedAlphabet) {
    console.log('You get a point') ;
    //update score:
    // 1.get the current score
    const currentScoreElement =document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // 2. increase the  score by 1
    const newScore = currentScore +1;

    // 3. show the updated score
    currentScoreElement.innerText = newScore;
    //start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}else{
    console.log('You missed. you lost a life')
    // Step-1: get the current life number
    const currentLifeElement =document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log(currentLife);
    // Step-2: reduce the life count
    const newLife = currentLife -1;
    // Step-3: display the updated life count
    currentLifeElement.innerText = newLife;

}


}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

    


}