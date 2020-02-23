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

writeDialog("<b>7:00am. The morning sun filters in through the blinds, basking your bedroom in a golden glow.<br>Your feet crunch on a decades worth of discarded cans as you shuffle off your bed.</b>");
getChoices(["<i>head down stairs</i>","<i>go back to bed</i>"],[kitchen1,bedroom1]);

function bedroom1(){
	writeDialog("<b>School starts in an hour, you'd better get up.</b>");
	getChoices(["<i>head down stairs</i>","<i>go back to bed</i>"],[kitchen1,bedroom1]);
}	
		    
function kitchen1(){
	changeBackground("images/kitchen.jpg");
	changeSpeakingCharacter("images/cheemsMother.png");
	name2.innerHTML = "Cheems Mother";
	writeDialog('<b><span style="color:#b0378a">Hey Cheems, I hope you slept well.<br>What do you want for breakfast?</span></b>')
	getChoices(["<i>cereal</i>","<i>beef jerky</i>", "<i>nothing</i>"],[cerealBreakfast,beefJerkyBreakfast,nothingBreakfast]);
}

function cerealBreakfast(){
	writeDialog("<b>A fufilling meal, you feel full</b>");
	writeDialog('<b><span style="color:#b0378a">Time for school honey</span></b>');
	getChoices(["<i>go out the door</i>"],[frontYardGood]);

}

function beefJerkyBreakfast() {
	writeDialog("<b>Its really chewy</b>");
	writeDialog('<b><span style="color:#b0378a">Time for school honey</span></b>');
	getChoices(["<i>go out the door</i>"],[frontYardBad]);
}

function nothingBreakfast() {
	writeDialog("<b>you feel airy and light</b>");
	writeDialog('<b><span style="color:#b0378a">Time for school honey</span></b>');
	getChoices(["<i>go out the door</i>"],[frontYardGood]);
}

function frontYardBad() {
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("<b>you missed the bus</b>")
	getChoices(["<i>quit life</i>"],[console.log]);
}

function frontYardGood() {
	name2.innerHTML = "";
	changeSpeakingCharacter("");
	changeBackground("images/houseExterior.jpg");
	writeDialog("<b>the airs smells good</b>")
	getChoices(["<i>go to get the bus</i>"], [busScene]);

}

function busScene() {
	changeBackground("images/bus.jpg")
	changeSpeakingCharacter("images/busDriver.png")
	name2.style.color = "#132575";
	name2.innerHTML = "Bus Driver";
	writeDialog('<b><span style="color:#132575">...</span></b>')
	getChoices(["<i>sit down and ride to school</i>"],[schoolArrival]);
}


function schoolArrival() {
	changeBackground("images/schoolExterior.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("<b>Aberdeen University...</b>");
	getChoices(["<i>go inside</i>"],[goInsideSchoolReal]);
}

function goInsideSchoolFake() {
	
}


function goInsideSchoolReal() {
	changeBackground("images/schoolCorridor.jpg");
	changeSpeakingCharacter("");
	name2.innerHTML = "";
	writeDialog("<b>first on the rota, science</b>")
	getChoices(["<i>go to science</i>"],[scienceClass]);
}

function scienceClass() {
	changeBackground("images/classroomScience.jpg");
	changeSpeakingCharacter("images/teacherScience.png");
	name2.style.color = "#797f99";
	name2.innerHTML = "Science Teacher";
	writeDialog('<b><span style="color:#797f99">E=mcheems</span></b>');
}
