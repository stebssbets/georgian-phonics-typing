var arrayOfAllCheckboxes = document.getElementsByClassName('lettersToPracticeCheckbox');

document.addEventListener("keydown", function(e)
{
	switch(e.keyCode) {
  case 13://enter
    handleEnterKey(e);
    break;
  case 17://ctrl
    handleCtrlKey();
    break;
}
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var checkboxClickFunction = function handleCheckBoxClick(e)
{
	e.stopPropagation();
	
	arrayOfCurrentPossibleAudioLetters = [];
	for (let i = 0; i < arrayOfAllCheckboxes.length; i++)
	{
		if (arrayOfAllCheckboxes[i].checked)
		{
			arrayOfCurrentPossibleAudioLetters.push(arrayOfAllAudioLetters[i]);
		}

	}
}//end of handleCheckBoxClick

var buttonWasJustPressed = false;
var numberCorrect = 0;
var numberIncorrect = 0;
var handleSubmitButtonFunction = function handleSubmitButton(e) 
{
	e.stopPropagation();
	
	var answerTextbox = document.getElementById("answerTextbox");
	console.log('answerTextbox.value: ' + answerTextbox.value);
	if (answerTextbox.value == currentCorrectAudioLetter.name)
	{
		numberCorrect++;
		georgianYes.play();
		document.getElementById('correct').textContent = 'Correct: ' + numberCorrect;
	}
	else
	{
		numberIncorrect++;
		georgianNo.play();
		document.getElementById('incorrect').textContent = 'Incorrect: ' + numberIncorrect;
	}

	answerTextbox.value = '';
}

function handleCtrlKey()
{
	console.log('handle ctrl recognized');
	randomAudioLetterIndex = getRndInteger(0, arrayOfCurrentPossibleAudioLetters.length - 1);
	
	currentCorrectAudioLetter = arrayOfCurrentPossibleAudioLetters[randomAudioLetterIndex];
	console.log('currentCorrectAudioLetter: ' + currentCorrectAudioLetter);
	console.log('currentCorrectAudioLetter.name: ' + currentCorrectAudioLetter.name);

	currentCorrectAudioLetter.play();
}

function handleEnterKey(e)
{
	e.stopPropagation();
	
	var answerTextbox = document.getElementById("answerTextbox");
	console.log('answerTextbox.value: ' + answerTextbox.value);
	console.log('currentCorrectAudioLetter.name: ' + currentCorrectAudioLetter.name);
	if (answerTextbox.value == currentCorrectAudioLetter.name)
	{
		numberCorrect++;
		georgianYes.play();
		document.getElementById('correct').textContent = 'Correct: ' + numberCorrect;
	}
	else
	{
		numberIncorrect++;
		georgianNo.play();
		document.getElementById('incorrect').textContent = 'Incorrect: ' + numberIncorrect;
	}

	answerTextbox.value = '';
}

document.getElementById("submitButton").onclick = handleSubmitButtonFunction;

for (let i = 0; i < arrayOfAllCheckboxes.length; i++)
{
	arrayOfAllCheckboxes[i].onclick = checkboxClickFunction;
}//end of for loop to assign onclick functions to checkboxes

var currentCorrectAudioLetter = undefined;

function handlePlayButtonClick()
{
	randomAudioLetterIndex = getRndInteger(0, arrayOfCurrentPossibleAudioLetters.length - 1);
	
	currentCorrectAudioLetter = arrayOfCurrentPossibleAudioLetters[randomAudioLetterIndex];
	console.log('currentCorrectAudioLetter: ' + currentCorrectAudioLetter);
	console.log('currentCorrectAudioLetter.name: ' + currentCorrectAudioLetter.name);

	currentCorrectAudioLetter.play();
}