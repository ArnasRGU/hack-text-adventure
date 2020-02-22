function gel(id) {return document.getElementById(id)}
charImg1 = gel("img1");
charImg2 = gel("img2");
description = gel("description");
choices = gel("choices");


domBody = document.body

function changeBackground(path) {
	domBody.background = path;
}

changeBackground("images/bedroom.jpg")

function changeSpeakingCharacter(path) {
	charImg2.src = path;
}

function writeDialog(str) {
	description.innerHTML += str + "<br>";
}

function getChoices(choicesArr, callbacksArr) {
	for (let i = 0; i < choicesArr.length; i++) {
		let choice = document.createElement("button");
		choice.innerHTML = choicesArr[i];
		choice.onclick = function () {
			choices.innerHTML = "";
			description.innerHTML += choicesArr[i] + "<br>";
			callbacksArr[i]();
		}
		choices.appendChild(choice);
	}
}


writeDialog("<i>You awake</i>")
getChoices(["go down stairs"],[kitchen1]);

function kitchen1() {
	changeBackground("images/kitchen.jpg");
	changeSpeakingCharacter("images/cheemsMother.png");
	writeDialog("<u>Mother:</u>Hey honey what do you want for breakfast?")
	getChoices(["cereal","beef jerky", "nothing"],[cerealBreakfast,beefJerkyBreakfast,nothingBreakfast]);
}

function cerealBreakfast() {
	writeDialog("A fufilling meal, you feel full");
	writeDialog("<u>Mother:</u>Time for school honey");
	getChoices(["go out the door"],[frontYardGood]);

}

function beefJerkyBreakfast() {
	writeDialog("Its really chewy");
}

function nothingBreakfast() {

}

function frontYardGood() {
	changeSpeakingCharacter("");
	changeBackground("images/houseExterior.jpg");
	writeDialog("<i>The airs smells good</i>")
	getChoices(["go to get the bus"], [busScene]);

}

function busScene() {
	changeBackground("images/bus.jpg")
	changeSpeakingCharacter("images/busDriver.png")
}
