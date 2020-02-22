function gel(id) {return document.getElementById(id)}
charImg1 = gel("img1");
charImg1 = gel("img2");
description = gel("description");
choices = gel("choices");




function getChoices(arr, callback) {
	for (let i of arr) {
		let choice = document.createElement("button");
		choice.innerHTML = i;
		choice.onclick = function () {
			choices.innerHTML = "";
			description.innerHTML = "";
			callback(i);
		}
		choices.appendChild(choice);
	}
}

function dialog(text,responses,callback) {
	description.innerHTML = text;
	getChoices(responses, callback);
}


dialog("are you exist?",["yes","no"],function (ans) {
	if (ans === "yes") {
		description.innerHTML = "ok";
	} else {
		description.innerHTML = "woah";
	}
});


