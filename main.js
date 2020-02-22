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
	writeDialog("<span style=\"color:#b0378a"\>Hey honey what do you want for breakfast?</span>")
	getChoices(["<i>cereal</i>","<i>beef jerky</i>", "<i>nothing</i>"],[cerealBreakfast,beefJerkyBreakfast,nothingBreakfast]);
}

function cerealBreakfast() {
	writeDialog("A fufilling meal, you feel full");
	writeDialog("<span style="color:#b0378a">Time for school honey</span>");
	getChoices(["<i>go out the door</i>"],[frontYardGood]);

}

function beefJerkyBreakfast() {
	writeDialog("<i>Its really chewy</i>");
	writeDialog("<u>Mother:</u>Time for school honey");
	getChoices(["go out the door"],[frontYardBad]);
}

function nothingBreakfast() {
	writeDialog("<i>you feel airy and light<i>");
	writeDialog("<u>Mother:</u>Time for school honey");
	getChoices(["go out the door"],[frontYardGood]);
}

function frontYardBad() {
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("<i>you missed the bus</i>")
	getChoices(["quit life"],[console.log]);
}

function frontYardGood() {
	name2.innerHTML = "";
	changeSpeakingCharacter("");
	changeBackground("images/houseExterior.jpg");
	writeDialog("<i>The airs smells good</i>")
	getChoices(["go to get the bus"], [busScene]);

}

function busScene() {
	changeBackground("images/bus.jpg")
	changeSpeakingCharacter("images/busDriver.png")
	name2.innerHTML = "Bus Driver";
	writeDialog("<u>Bus Driver:</u>...")
	getChoices(["sit down and ride to school"],[schoolArrival]);
}


function schoolArrival() {
	changeBackground("images/schoolExterior.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("<i>Aberdeen University</i>");
	getChoices(["go inside"],[goInsideSchoolReal]);
}

function goInsideSchoolFake() {
	
}


function goInsideSchoolReal() {
	changeBackground("images/schoolCorridor.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("<i>first on the rota, science</i>")
	getChoices(["go to science"],[scienceClass]);
}

function scienceClass() {
	changeBackground("images/classroomScience.jpg");
	changeSpeakingCharacter("images/teacherScience.png");
	name2.innerHTML = "Science Teacher";
	writeDialog("<u>Science Teacher:</u>E=mcheems");
}
