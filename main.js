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

function slowWrite(text,callback) {
	
}

function getChoices(arr, callback) {
	for (let i of arr) {
		let choice = document.createElement("button");
		choice.innerHTML = i;
		choice.onclick = function () {
			choices.innerHTML = "";
			description.innerHTML += i + "<br>";
			callback(i);
		}
		choices.appendChild(choice);
	}
}

function dialog(text,responses,callback) {
	description.innerHTML += text + "<br>";
	getChoices(responses, callback);
}


dialog("You wake up",["go downstairs"],function (ans) {
	changeBackground("images/kitchen.jpg");
	dialog("three ",["yes","no"],function (ans) {
	})
});


