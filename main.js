function gel(id) {return document.getElementById(id)}
charImg1 = gel("img1");
charImg2 = gel("img2");
description = gel("description");
choices = gel("choices");

domBody = document.body

function changeBackground(path) {
	domBody.background = path;
}

function changeImg2(path) {
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

name1.innerHTML += "Cheems";
info1.innerHTML += "Age: 34<br>Still lives with his mother.";
changeBackground("images/bedroom.jpg")

writeDialog("<b>7:00am. The morning sun filters in through the blinds, basking your bedroom in a golden glow.<br>Your feet crunch on a decades worth of discarded cans as you shuffle off your bed.</b>");
getChoices(["<i>head down stairs</i>","<i>go back to bed</i>"],[kitchen1,bedroom1]);

function bedroom1(){
	writeDialog('<b>"Uni starts in an hour, I had better get up."</b>');
	getChoices(["<i>head down stairs</i>"],[kitchen1]);
}	
		    
function kitchen1(){
	changeBackground("images/kitchen.jpg");
	changeImg2("images/cheemsMother.png");
	name2.innerHTML = "Cheems Mother";
	info2.innerHTML = "Age: 51<br>Can't cook scrambled eggs.";
	writeDialog('<b><span style="color:#b0378a">H-hey Cheems, I hope you slept well.<br>What do you want for breakfast?</span></b>')
	getChoices(["<i>sugar puffs®</i>","<i>scrambled eggs</i>", "<i>nothing</i>"],[sugarpuffsBreakfast,eggsBreakfast,nothingBreakfast]);
}

function sugarpuffsBreakfast(){
	writeDialog('<b>"Sugar Puffs®, the nectar of gods." </b>');
	writeDialog('<b><span style="color:#b0378a">You had better be leaving Cheems, incase you miss your bus.</span></b>');
	getChoices(["<i>leave the house</i>"],[busOntime]);
}

function eggsBreakfast(){
	writeDialog('<b>"Its really chewy... mother must have overcooked them again..."</b>');
	writeDialog('<b><span style="color:#b0378a">You had better be leav-</span></b>');
	changeImg2("images/cheemsMotherCry.png");
	writeDialog("<b>It's no wonder Dad left us, you can't even cook scrambled eggs properly!</b>");
	getChoices(["<i>leave the house</i>"],[busLate]);
}

function nothingBreakfast() {
	writeDialog("<b>you feel airy and light</b>");
	writeDialog('<b><span style="color:#b0378a">You had better be leaving Cheems, incase you miss your bus.</span></b>');
	getChoices(["<i>leave the house</i>"],[busOntime]);
}

function busLate() {
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("<b>Due to your argument with Mother, you have missed the bus.<br>You may be able to catch it before it reaches it's next stop.</b>")
	getChoices(["<i>run to the next bus stop</i>","<i>return home</i>"],[street1,kitchen2]);
}

function busOntime() {
	name2.innerHTML = "";
	changeImg2("");
	info2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("<b>the airs smells good</b>")
	getChoices(["<i>go to get the bus</i>"], [busScene]);
}

function kitchen2(){
	changeBackground("images/kitchen.jpg");
	changeImg2("images/cheemsMotherCry.png");
	name2.innerHTML = "Cheems Mother";
	info2.innerHTML = "Age: 51<br>Can't cook scrambled eggs.";
	writeDialog("<b>Your mother is still crying.</b>");
	getChoices(["<i>comfort her</i>","<i>return to bedroom</i>"], [kitchen3,bedroom2]);
}

function kitchen3(){

}

function bedroom2(){
	changeBackground("images/bedroom.jpg")
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
}

function street1(){
	changeBackground("images/street.jpg");
}

function busScene() {
	changeBackground("images/bus.jpg")
	changeImg2("images/busDriver.png")
	name2.style.color = "#132575";
	name2.innerHTML = "Bus Driver";
	info2.style.color = "#132575";
	info2.innerHTML = "Age: 63<br>Likes raw chicken.";
	writeDialog('<b><span style="color:#132575">...</span></b>')
	getChoices(["<i>sit down and ride to school</i>"],[schoolArrival]);
}


function schoolArrival() {
	changeBackground("images/schoolExterior.jpg");
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	writeDialog("<b>Aberdeen University...</b>");
	getChoices(["<i>go inside</i>"],[goInsideSchoolReal]);
}

function goInsideSchoolFake() {
	
}


function goInsideSchoolReal() {
	changeBackground("images/schoolCorridor.jpg");
	changeImg2("");
	name2.innerHTML = "";
	writeDialog("<b>first on the rota, science</b>")
	getChoices(["<i>go to science</i>"],[scienceClass]);
}

function scienceClass() {
	changeBackground("images/classroomScience.jpg");
	changeImg2("images/teacherScience.png");
	name2.style.color = "#797f99";
	name2.innerHTML = "Science Teacher";
	writeDialog('<b><span style="color:#797f99">E=mcheems</span></b>');
}
