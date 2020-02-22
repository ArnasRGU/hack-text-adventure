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
	changeSpeakingCharacter("images/cheemsMother.png");
	name2.innerHTML += "Cheems Mother";
	dialog("what do you eat",["cereal","beef jerky","nothing, food is for the weak"], function (ans) {
		switch (ans) {
			case "cereal":
				dialog("a wholesome meal, fills you up, you feel ready for the day ahead<br>you need to catch the bus",["go outside"],console.log)
			break;
			case "beef jerky":
				dialog("its really chewy, like really really chewy<br>you need to catch the bus",["go outside"],console.log)
			break;

			case "nothing, food is for the weak":
				dialog("you are big and strong, wow<br>you need to catch the bus",["go outside"],console.log)
			break;
		}
		})
	
	})


