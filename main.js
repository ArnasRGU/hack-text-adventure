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
			callback(i);
			choices.innerHTML = "";
			description.innerHTML = "";
		}
		choices.appendChild(choice);
	}
}

function dialog(text,responses,callback) {
	description.innerHTML = text;
	getChoices(responses, callback);
}


dialog("are you exist?",["yes","no"],function (ans) {
	dialog("ok thats cool bro",["ok"],console.log);
});


