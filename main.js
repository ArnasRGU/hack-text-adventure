function gel(id) {return document.getElementById(id)}
charImg1 = gel("img1");
charImg2 = gel("img2");
description = gel("description");
choices = gel("choices");


domBody = document.body

function changeBackground(path) {
	domBody.background = path;
}

name1.innerHTML += "Cheems";

changeBackground("images/bedroom.jpg")

function changeSpeakingCharacter(path) {
	charImg2.src = path;
}

function writeDialog(str) {
	description.innerHTML += str + "<br>";
	dialogBox.scrollBy(0,1000);
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


writeDialog("You awake")
getChoices(["<i>go down stairs</i>"],[kitchen1]);

function kitchen1() {
	changeBackground("images/kitchen.jpg");
	changeSpeakingCharacter("images/cheemsMother.png");
	name2.innerHTML = "Cheems Mother";
	writeDialog('<span style="color:#b0378a">Hey honey what do you want for breakfast?</span>')
	getChoices(["<i>cereal</i>","<i>beef jerky</i>", "<i>nothing</i>"],[cerealBreakfast,beefJerkyBreakfast,nothingBreakfast]);
}

function cerealBreakfast() {
	writeDialog("A fufilling meal, you feel full");
	writeDialog('<span style="color:#b0378a">Time for school honey</span>');
	getChoices(["<i>go out the door</i>"],[frontYardGood]);

}

function beefJerkyBreakfast() {
	writeDialog("Its really chewy");
	writeDialog('<span style="color:#b0378a">Time for school honey</span>');
	getChoices(["<i>go out the door</i>"],[frontYardBad]);
}

function nothingBreakfast() {
	writeDialog("you feel airy and light");
	writeDialog('<span style="color:#b0378a">Time for school honey</span>');
	getChoices(["<i>go out the door</i>"],[frontYardGood]);
}

function frontYardBad() {
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("you missed the bus")
	getChoices(["<i>quit life</i>"],[console.log]);
}

function frontYardGood() {
	name2.innerHTML = "";
	changeSpeakingCharacter("");
	changeBackground("images/houseExterior.jpg");
	writeDialog("the airs smells good")
	getChoices(["<i>go to get the bus</i>"], [busScene]);

}

function busScene() {
	changeBackground("images/bus.jpg")
	changeSpeakingCharacter("images/busDriver.png")
	name2.innerHTML = "Bus Driver";
	writeDialog('<span style="color:#132575">...</span')
	getChoices(["<i>sit down and ride to school</i>"],[schoolArrival]);
}


function schoolArrival() {
	changeBackground("images/schoolExterior.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("Aberdeen University");
	getChoices(["<i>go inside</i>"],[goInsideSchoolReal]);
}

function goInsideSchoolFake() {
	
}


function goInsideSchoolReal() {
	changeBackground("images/schoolCorridor.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("first on the rota, science")
	getChoices(["<i>go to science</i>"],[scienceClass]);
}

function scienceClass() {
	changeBackground("images/classroomScience.jpg");
	changeSpeakingCharacter("images/teacherScience.png");
	name2.innerHTML = "Science Teacher";
	writeDialog('<span style="color:#797f99">E=mcheems</span>');
}
