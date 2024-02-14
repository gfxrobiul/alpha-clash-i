// function play() {
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground section 
//     const playGroundSection =document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet:', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()

    


}