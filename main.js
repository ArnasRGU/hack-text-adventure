function gel(id) {return document.getElementById(id)}
charImg1 = gel("img1");
charImg1 = gel("img2");
description = gel("description");
choices = gel("choices");


domBody = document.body

function changeBackground(path) {
	domBody.style.backgroundImage = path;
}



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


dialog("",["yes","no"],function (ans) {
});


