var Dname;
var Dmood;
var Dinterest;

$(function(){
/*
	var colors = [
		'26e000','2fe300','37e700','45ea00','51ef00',
		'61f800','6bfb00','77ff02','80ff05','8cff09',
		'93ff0b','9eff09','a9ff07','c2ff03','d7ff07',
		'f2ff0a','fff30a','ffdc09','ffce0a','ffc30a',
		'ffb509','ffa808','ff9908','ff8607','ff7005',
		'ff5f04','ff4f03','f83a00','ee2b00','e52000'
	];
*/
	var colors = [
		'26e000',
		'61f800',
		'93ff0b',
		'f2ff0a',
		'ffb509',
		'ff5f04',
		'e52000'
	];

	var rad2deg = 180/Math.PI;
	var deg = 0;
	var bars = $('#bars');

	for(var i=1;i<colors.length+1;i++){

		deg = i*52.85; // 12;

		// Create the colorbars

		$('<div class="colorBar">').css({
			backgroundColor: '#'+colors[i],
			transform:'rotate('+deg+'deg)',
			top: -Math.sin(deg/rad2deg)*150+180,
			left: Math.cos((180 - deg)/rad2deg)*150+180,
		}).appendTo(bars);
	//	console.log(i);
	}

	var colorBars = bars.find('.colorBar');
	var numBars = 1, lastNum = 0;//-1;

	$('#control').knobKnob({
		snap : 0,//60,
		value: 0,//154,
		turn : function(ratio){
			numBars = Math.round(colorBars.length*ratio);
			//console.log(ratio);
			console.log(numBars);
			// Update the dom only when the number of active bars
			// changes, instead of on every move

			if(numBars == lastNum){
				return false;
			}
			lastNum = numBars;
			numMood = numBars;
			colorBars.removeClass('active').slice(0, numBars).addClass('active');
		}
	});

});


function processUser()
{
	var parameters = location.search.substring(1).split("&");

	var temp = parameters[0].split("=");
	l = unescape(temp[1]);
	temp = parameters[1].split("=");
	p = unescape(temp[1]);
	document.getElementById("Dname").innerHTML = l;
	document.getElementById("Dmood").innerHTML = p;
	console.log("Hello" + Dname + "!, Your mood " + Dmood + " and interested in "+ Dinterest);
}

function buttonFunction() {
    //document.getElementById("demo").innerHTML="Hello World";

		var audio;

		if (numMood == null)
		{
			window.alert("please choose your mood.");
		}

		if (numMood == 1)
		{
			audio = new Audio('assets/data/Boring.wav');
		  audio.play();
		//var msg1 = new SpeechSynthesisUtterance("Your passenger seems to be bored. May I suggest that you either put on some upbeat music, or strike a conversation about your funniest taxi story. ");
		//window.speechSynthesis.speak(msg1);
		}
		else if (numMood == 2)
		{
			//var msg1 = new SpeechSynthesisUtterance("Hey! Your passenger seems to be in a good mood. May I suggest that you ask how their day is going, or put on some upbeat tunes at a low volume. ");
			//window.speechSynthesis.speak(msg1);

			audio = new Audio('assets/data/Happy.wav');
			audio.play();
		}
		else if (numMood == 3)
		{
			//var msg1 = new SpeechSynthesisUtterance("Hey! Your guest seems tired mood. May I suggest that you keep conversation to a minimum and ask if she or he would like you to put on some relaxing music? ");
			//window.speechSynthesis.speak(msg1);

			audio = new Audio('assets/data/Rest.wav');
			audio.play();
		}
		else if (numMood == 4)
		{
			//var msg1 = new SpeechSynthesisUtterance("Hey! Your passenger seems to be sad. May I suggest that you ask how they are? If they don’t respond, keep silent and give them space; if they reply, please listen attentively and give questions, not advice. ");
			//window.speechSynthesis.speak(msg1);

			audio = new Audio('assets/data/Sad.wav');
			audio.play();
		}
		else if (numMood == 5)
		{
			//var msg1 = new SpeechSynthesisUtterance("Hey! Your passenger seems to be disgusted. May I suggest that you ask them what’s on their mind? If they respond, address their concerns if you can; if not, listen to more that might have to say. ");
			//window.speechSynthesis.speak(msg1);

			audio = new Audio('assets/data/Disgust.wav');
			audio.play();
		}
		else if (numMood == 6)
		{
			//var msg1 = new SpeechSynthesisUtterance("Hey! Your passenger seems to be angry. May I suggest that you stay quiet or listen if they wish to express themselves?");
			//window.speechSynthesis.speak(msg1);

			audio = new Audio('assets/data/Angry.wav');
			audio.play();
		}
		else {
			window.alert("Please choose your mood");
		}

		changePage();
}

function changePage()
{
	if (numMood == 1 )
	{
  	window.open("Talkative.html", "Here is interesting topic!");
	}
	else if (numMood == 2)
	{
		window.open("SingASong.html", "Music Chart!");
	}
	else if (numMood == 3)
	{
		window.open("Silience.html", "Have a good rest!");
	}
	else if (numMood == 4)
	{
		window.open("CryingMode.html", "Have a your space!");
	}
	else if (numMood == 5)
	{
		window.open("HateU.html", "Have a your space!");
	}
	else if (numMood == 6)
	{
		window.open("Angry.html", "Have a your space!");
	}
}
