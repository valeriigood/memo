let divColor = 0
let randomNamber = 0
let dificulty = prompt("вибери складнісьть від 4 - 8")
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
let countCards = dificulty * dificulty
let uniqueLettersData = countCards/2


function buildMemoCarts() {
	let mainElement = document.getElementById('main')
	let dataCards = getDataForCards()

	countY = 0;
	do {
	  countY = countY + 1;

	  divY = document.createElement('div');
	  divY.id = 'y' + countY
	  divY.className = 'row';


		countX = 0;
		do {
		  countX = countX + 1;

		  divX = document.createElement('div');
		  divX.className = 'cart';
		  divX.id = 'x' + countY + countX

		  divValue = document.createElement('div');
		  divValue.className = 'cardValueDisplayNone';
		  divValue.id = 'val' + countY + countX
		  divValue.innerHTML = dataCards.shift()

		  divX.appendChild(divValue);
		  divY.appendChild(divX);

		  	divX.addEventListener('click', function handleClick(event) {
		  		showCard(this);
		  		checkSimilarCards();
			});


		  dataCards = getRandomLetters(dataCards);

		} while (countX < dificulty);

	  mainElement.appendChild(divY)

	} while (countY < dificulty);
}

function getRandomLetters(array){
	let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}

function getDataForCards(){
	let randomLetters = getRandomLetters(letters)
	let uniqueLetters = randomLetters.slice(0,uniqueLettersData)


	return uniqueLetters.concat(getRandomLetters(uniqueLetters))
}

function checkSimilarCards(){
	//textContent
	let allOpenCards = document.querySelectorAll('.cardValueDisplayYes');
	if (allOpenCards.length == 2) {
			if (allOpenCards[0].textContent == allOpenCards[1].textContent) {
				setTimeout(() => {
					whiteCard(allOpenCards[0])
					whiteCard(allOpenCards[1])
				}, "500")
			} else {
				setTimeout(() => {
					hideCard(allOpenCards[0]);
					hideCard(allOpenCards[1]);
				}, "500")

			}
	}
}

function showCard(element){
		element.querySelector('.cardValueDisplayNone').className = 'cardValueDisplayYes';
}

function hideCard(element) {
		element.className = 'cardValueDisplayNone';
}
function whiteCard(element) {
		element.className = 'cardValueDisplayWhite';
}

document.addEventListener('DOMContentLoaded', function() {
if (dificulty % 2 != 0) {
	dificulty--
}
buildMemoCarts()
	
}, false);


































