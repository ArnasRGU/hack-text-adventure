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

function writeFast(str) {
	description.innerHTML += str;
}

function slowlyPrintText(stringArray,textNodes,stringIndex=0, i=0) {
	if (stringIndex <= stringArray.length-1) {
		if (i === stringArray[stringIndex].length-1) {
			textNodes[stringIndex].data += stringArray[stringIndex][i];
			slowlyPrintText(stringArray,textNodes,stringIndex+1,0);
		} else {
			textNodes[stringIndex].data += stringArray[stringIndex][i];
			setTimeout(function () {
				dialogBox.scrollBy(0,1000);
				slowlyPrintText(stringArray,textNodes,stringIndex,i+1);
			},20);
		}
	}
}

function getTextNodes(element,out=[]) {
	for (i of element.childNodes) {
		if (i.nodeName === "#text") {
			out.push(i);
		} else if (i.childNodes.length > 0) {
			getTextNodes(i,out);
		}
	}
	return out;
}

function writeDialog(str) {
	dummyElement = document.createElement("p")
	dummyElement.innerHTML = str;
	for (i of dummyElement.childNodes) {
		textNodes = getTextNodes(dummyElement)
		tempText = []
		for (let i = 0; i < textNodes.length; i++) {
			tempText.push(textNodes[i].data)
			textNodes[i].data = "";	
		}
	}
	for (i of dummyElement.children) {description.append(i)}
	slowlyPrintText(tempText,textNodes)
}

function getChoices(choicesArr, callbacksArr) {
	for (let i = 0; i < choicesArr.length; i++) {
		let choice = document.createElement("button");
		choice.innerHTML = choicesArr[i];
		choice.onclick = function () {
			choices.innerHTML = "";
			description.innerHTML += "<br>" +choicesArr[i] + "<br>";
			callbacksArr[i]();
		}
		choices.appendChild(choice);
	}
}

name1.innerHTML += "Cheems";
info1.innerHTML += "Age: 34<br>Still lives with his mother.";
changeBackground("images/bedroom.jpg")

writeDialog("<b>07:00am. The morning sun filters in through the blinds, basking your bedroom in a golden glow.<br>Your feet crunch on a decades worth of discarded cans as you shuffle off of your bed.</b>");
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
	writeDialog('<b>"Sugar Puffs®, the nectar of gods."<br><span style="color:#b0378a">You had better be leaving Cheems, incase you miss your bus.</span></b>');
	getChoices(["<i>leave the house</i>"],[busOntime]);
}

function eggsBreakfast(){
	changeImg2("images/cheemsMotherCry.png");
	writeDialog('<b>"Its really chewy... mother must have overcooked them again..."<br><span style="color:#b0378a">You had better be leav-</span><br>Its no wonder Dad left us, you cant even cook scrambled eggs properly!</b>');
	getChoices(["<i>leave the house</i>"],[busLate]);
}

function nothingBreakfast() {
	writeDialog('<b><span style="color:#b0378a">You had better be leaving Cheems, incase you miss your bus.</span></b>');
	getChoices(["<i>leave the house</i>"],[busOntime]);
}

function busLate(){
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	changeBackground("images/houseExterior.jpg");
	writeDialog("<b>Due to your argument with Mother, you have missed the bus.<br>You may be able to catch it before it reaches it's next stop.</b>")
	getChoices(["<i>run to the next bus stop</i>","<i>return home</i>"],[street1,kitchen2]);
}

function busOntime(){
	changeBackground("images/houseExterior.jpg");
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	writeDialog("<b>What a beautiful day!<br>The bus arrives.</b>")
	getChoices(["<i>get on the bus</i>"], [bus1]);
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
	writeDialog("<b>I'm sorry Mother. I'll make it up to you tomorrow.<br>~END~</b>");
}

function bedroom2(){
	changeBackground("images/bedroom.jpg")
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	writeDialog('<b>07:36am. Uni successfully dodged, once again.<br>"Why would I want to live any other way? I get to spend all day doing whatever I want, with no responsibilities, all while being waited on by my adoring mother."<br>Cheems unearthes his laptop from the floor and brings it up to his bed.<br>"Now, where was I - www.por-"<br>~GOOD ENDING?~</B>');
}

function street1(){
	changeBackground("images/street.jpg");
	writeDialog("<b>This bus stop was in a part of town that Cheems rarely visited. Someone was standing at the bus stop. It was Joe.<br></b>");
	name2.style.color = "#ff0000";
	name2.innerHTML = "Joe";
	info2.style.color = "#ff0000";
	info2.innerHTML = "Age: 18<br>Has no father figure.";
	changeImg2("images/bully.png");
	writeDialog('<b><span style="color:#ff0000">"Hey, look who it is. Little baby Cheems! Still living at home? Hahaha!"</span><br>Cheems hates Joe with a burning passion.</b>');
	getChoices(["<i>insult him</i>","<i>punch him</i>"], [street2,street3]);
}

function street2(){
	writeDialog("<b>At least I know my father!<br>This struck a nerve with Joe, causing him to run away crying.<br>The bus arrives.</b>");
	getChoices(["<i>get on bus</i>"], [bus1]);
}

function street3(){
	writeDialog("<b>Joe punches back. Hard.<br>You are knocked out and left lying on the pavement.<br>~BAD ENDING~<b/>");
}

function bus1(){
	changeBackground("images/bus.jpg")
	changeImg2("images/busDriver.png")
	name2.style.color = "#132575";
	name2.innerHTML = "Bus Driver";
	info2.style.color = "#132575";
	info2.innerHTML = "Age: 63<br>Likes raw chicken.";
	writeDialog('<b><span style="color:#132575">..........</span></b>');
	getChoices(["<i>sit down</i>"],[schoolArrival]);
}

function schoolArrival(){
	changeBackground("images/schoolExterior.jpg");
	changeImg2("");
	name2.innerHTML = "";
	info2.innerHTML = "";
	writeDialog("<b>Aberdeen University...</b>");
	getChoices(["<i>go inside</i>"],[goInsideSchoolReal]);
}

function goInsideSchoolReal(){
	changeBackground("images/schoolCorridor.jpg");
	changeImg2("");
	name2.innerHTML = "";
	writeDialog("<b>first on the rota, science</b>")
	getChoices(["<i>go to science</i>"],[scienceClass]);
}

function scienceClass(){
	changeBackground("images/classroomScience.jpg");
	changeImg2("images/teacherScience.png");
	name2.style.color = "#797f99";
	name2.innerHTML = "Science Teacher";
	writeDialog('<b><span style="color:#797f99">E=mcheems</span></b>');
}
