function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

/*
	var xPos = (windowWidth - width) / 2;
	var yPos = (windowHeight - height) / 2;
	canvas.position(xPos, yPos);
*/

	fill(255,255,255);
	angleMode(DEGREES);

}


function draw() {
	background(0,0,0);

	var sec = second();
	var min = minute();
	var hr  = hour();


	center();

	push();
	translate(-240, 0);

	if ((hr >= 0) && (hr < 10)){
		ozehnerstunde();
	} else if ((hr >= 10) && (hr < 20)){
		zehnerstunde();
	} else if ((hr >= 20) && (hr < 24)){
		zwanzigerstunde();
	};

	pop();

	if ((hr == 1) || (hr == 11) || (hr == 23)){
	einsstunde();
	} else if ((hr == 2) || (hr == 12)){
	zweistunde();
	} else if ((hr == 3) || (hr == 13)){
	dreistunde();
	} else if ((hr == 4) || (hr == 14)){
	vierstunde();
	} else if ((hr == 5) || (hr == 15)){
	fuenfstunde();
	} else if ((hr == 6) || (hr == 16)){
	sechsstunde();
	} else if ((hr == 7) || (hr == 17)){
	siebenstunde();
	} else if ((hr == 8) || (hr == 18)){
	achtstunde();
	} else if ((hr == 9) || (hr == 19)){
	neunstunde();
	} else if ((hr == 10) || (hr == 20)){
	ostunde();

	};

	push();
	translate(330, 0);

	if ((min >= 0) && (min < 9)){
	ozehner();
	} else if ((min > 9) && (min < 20)){
	einszehner();
	} else if ((min > 19) && (min < 30)){
	zweizehner();
	} else if ((min > 29) && (min < 40)){
	dreizehner();
	} else if ((min > 39) && (min < 50)){
	vierzehner();
	} else if ((min > 49) && (min < 60)){
	fuenfzehner();
	};

	pop();

	push();
	translate(590, 0);

	if ((min == 0) || (min == 10) || (min == 20)|| (min == 30) || (min == 40) || (min == 50)){
	o();
	} else if ((min == 1) || (min == 11) || (min == 21)|| (min == 31) || (min == 41) || (min == 51)){
	eins();
	} else if ((min == 2) || (min == 12) || (min == 22)|| (min == 32) || (min == 42) || (min == 52)){
	zwei();
	} else if ((min == 3) || (min == 13) || (min == 23)|| (min == 33) || (min == 43) || (min == 53)){
	drei();
	} else if ((min == 4) || (min == 14) || (min == 24)|| (min == 34) || (min == 44) || (min == 54)){
	vier();
	} else if ((min == 5) || (min == 15) || (min == 25)|| (min == 35) || (min == 45) || (min == 55)){
	fuenf();
	} else if ((min == 6) || (min == 16) || (min == 26)|| (min == 36) || (min == 46) || (min == 56)){
	sechs();
	} else if ((min == 7) || (min == 17) || (min == 27)|| (min == 37) || (min == 47) || (min == 57)){
	sieben();
	} else if ((min == 8) || (min == 18) || (min == 28)|| (min == 38) || (min == 48) || (min == 58)){
	acht();
	} else if ((min == 9) || (min == 19) || (min == 29)|| (min == 39) || (min == 49) || (min == 59)){
	neun();
	};

	pop();

	}

	/* Stunden */

	function einsstunde() {

	push();

	translate(width/2 - 360, height/2 - 285);
	strokeWeight(20);
	stroke(color(0,252,232,220));
	line(200, 470, 200, 100);
	stroke(color(0,222,252,220));
	line(100, 200, 200, 100);

	pop();

};

function zweistunde() {

push();

translate(width/2 - 680, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(500, 200, 200, 200, 180, 405);
stroke(color(0,222,252,220));
line(400, 470, 570, 272);
stroke(color(0,252,232,220));
line(400, 470, 600, 470);

pop();

};

function dreistunde() {

push();

translate(width/2 - 1080, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,222,252,220));
arc(900, 185, 180, 180, 180, 450);
stroke(color(0,252,232,220));
arc(900, 375, 200, 200, 270, 180);

pop();

};

function vierstunde() {

push();

translate(width/2 - 1430, height/2 - 285);
strokeWeight(20);
stroke(color(0,252,232,220));
line(1300, 470, 1300, 100);
stroke(color(0,222,252,220));
line(1136, 330, 1300, 100);
stroke(color(0,180,252,220));
line(1136, 330, 1360, 330);

pop();

};

function fuenfstunde() {

push();

translate(width/2 - 1786, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(1602, 364, 224, 224, 222, 154);
stroke(color(0,180,252,220));
line(1519, 290, 1519, 100);
stroke(color(0,252,232,220));
line(1519, 100, 1690, 100);

pop();

};

function sechsstunde() {

push();

translate(width/2 - 2180, height/2 - 285);
stroke(color(0,222,252,220));
strokeWeight(20);
noFill();

arc(2000, 376, 200, 200, 0, 360);

stroke(color(0,252,232,220));
strokeWeight(20);
noFill();

arc(2000, 200, 200, 200, 180, 360);

strokeWeight(20);
stroke(color(0,180,252,220));
noFill();

line(1900, 200, 1900, 376);

pop();

};

function siebenstunde() {

push();

translate(width/2 - 2480, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,180,252,220));
line(2300, 470, 2400, 100);
stroke(color(0,252,232,220));
line(2210, 100, 2400, 100);
stroke(color(0,180,252,220));
line(2210, 170, 2210, 100);

pop();

};

function achtstunde() {

push();

translate(width/2 - 2830, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,222,252,220));
arc(2650, 186, 180, 180, 0, 360);
stroke(color(0,252,232,220));
arc(2650, 376, 200, 200, 0, 360);

pop();

};

function neunstunde() {

push();

translate(width/2 - 3180, height/2 - 285);
stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3000, 200, 200, 200, 0, 360);
stroke(color(0,252,232,220));
arc(3000, 370, 200, 200, 0, 155);
stroke(color(0,180,252,220));
line(3100, 200, 3100, 370);

pop();

};

function ostunde() {

push();

translate(width/2 - 3580, height/2 - 285);
stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3400, 200, 200, 200, 180, 360);
stroke(color(0,252,232,220));
arc(3400, 370, 200, 200, 0, 180);
stroke(color(0,180,252,220));
line(3300, 200, 3300, 370);
stroke(color(0,180,252,220));
line(3500, 200, 3500, 370);

pop();

};

/* Zehner */

function einszehner() {

push();

translate(width/2 - 360, height/2 - 285);
strokeWeight(20);
stroke(color(0,252,232,220));
line(200, 470, 200, 100);
stroke(color(0,222,252,220));
line(100, 200, 200, 100);

pop();

};

function zweizehner() {

push();

translate(width/2 - 680, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(500, 200, 200, 200, 180, 405);
stroke(color(0,222,252,220));
line(400, 470, 570, 272);
stroke(color(0,252,232,220));
line(400, 470, 600, 470);

pop();

};

function dreizehner() {

push();

translate(width/2 - 1080, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,222,252,220));
arc(900, 185, 180, 180, 180, 450);
stroke(color(0,252,232,220));
arc(900, 375, 200, 200, 270, 180);

pop();

};

function vierzehner() {

push();

translate(width/2 - 1430, height/2 - 285);
strokeWeight(20);
stroke(color(0,252,232,220));
line(1300, 470, 1300, 100);
stroke(color(0,222,252,220));
line(1136, 330, 1300, 100);
stroke(color(0,180,252,220));
line(1136, 330, 1360, 330);

pop();

};

function fuenfzehner() {

push();

translate(width/2 - 1786, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(1602, 364, 224, 224, 222, 154);
stroke(color(0,180,252,220));
line(1519, 290, 1519, 100);
stroke(color(0,252,232,220));
line(1519, 100, 1690, 100);

pop();

};

function ozehner() {

push();

translate(width/2 - 3580, height/2 - 285);
stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3400, 200, 200, 200, 180, 360);
stroke(color(0,252,232,220));
arc(3400, 370, 200, 200, 0, 180);
stroke(color(0,180,252,220));
line(3300, 200, 3300, 370);
stroke(color(0,180,252,220));
line(3500, 200, 3500, 370);

pop();

};


/* Minuten_Einer */

function eins() {

push();

translate(width/2 - 360, height/2 - 285);

/* Var_Eins */
var sec = second();
var lineeins = map(sec,0,59,100,470);

strokeWeight(20);
stroke(color(0,252,232,220));
line(200, lineeins, 200, 100);
stroke(color(0,222,252,220));
line(100, 200, 200, 100);

pop();

};


function zwei() {

push();

translate(width/2 - 680, height/2 - 285);

var sec = second();
var arczwei = map(sec, 0,59,181,405);

strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(500, 200, 200, 200, 180, arczwei);
stroke(color(0,222,252,220));
line(400, 470, 570, 272);
stroke(color(0,252,232,220));
line(400, 470, 600, 470);

pop();

};

function drei() {

push();

translate(width/2 - 1080, height/2 - 285);

var sec = second();
var arcdrei = map(sec, 0,59,181,450);

strokeWeight(20);
noFill();
stroke(color(0,222,252,220));
arc(900, 185, 180, 180, 180, arcdrei);
stroke(color(0,252,232,220));
arc(900, 375, 200, 200, 270, 180);

pop();

};

function vier() {

push();

translate(width/2 - 1430, height/2 - 285);

var sec = second();
var linevier = map(sec,0,59,100,470);

strokeWeight(20);
stroke(color(0,252,232,220));
line(1300, linevier, 1300, 100);
stroke(color(0,222,252,220));
line(1136, 330, 1300, 100);
stroke(color(0,180,252,220));
line(1136, 330, 1360, 330);

pop();

};

function fuenf() {

push();

translate(width/2 - 1786, height/2 - 285);

var sec = second();
var linefuenf = map(sec, 0,59,100,290);

strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(1602, 364, 224, 224, 222, 154);
stroke(color(0,180,252,220));
line(1519, linefuenf, 1519, 100);
stroke(color(0,252,232,220));
line(1519, 100, 1690, 100);

pop();

};

function sechs() {

push();

translate(width/2 - 2180, height/2 - 285);

var sec = second();
var angleSec = map(sec, 0,59,1,360);
var halfangleSec = map(sec, 0,59,181,360);
var lineleft = map(sec,0,59,200,376);

stroke(color(0,222,252,220));
strokeWeight(20);
noFill();

arc(2000, 376, 200, 200, 0, angleSec);

stroke(color(0,252,232,220));
strokeWeight(20);
noFill();

arc(2000, 200, 200, 200, 180, halfangleSec);

strokeWeight(20);
stroke(color(0,180,252,220));
noFill();

line(1900, 200, 1900, lineleft);

pop();

};

function sieben() {

push();

translate(width/2 - 2480, height/2 - 285);

var sec = second();
var linesieben = map(sec, 0,59,2210,2400);

strokeWeight(20);
noFill();
stroke(color(0,180,252,220));
line(2300, 470, 2400, 100);
stroke(color(0,252,232,220));
line(2210, 100, linesieben, 100);
stroke(color(0,180,252,220));
line(2210, 170, 2210, 100);

pop();

};

function acht() {

push();

translate(width/2 - 2830, height/2 - 285);

var sec = second();
var arcacht = map(sec, 0,59,1,360);

strokeWeight(20);
noFill();
stroke(color(0,222,252,220));
arc(2650, 186, 180, 180, 0, 360);
stroke(color(0,252,232,220));
arc(2650, 376, 200, 200, 0, arcacht);

pop();

};

function neun() {

push();

translate(width/2 - 3180, height/2 - 285);

var sec = second();
var arcneun = map(sec, 0,59,1,360);

stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3000, 200, 200, 200, 0, arcneun);
stroke(color(0,252,232,220));
arc(3000, 370, 200, 200, 0, 155);
stroke(color(0,180,252,220));
line(3100, 200, 3100, 370);

pop();

};

function o() {

push();

translate(width/2 - 3580, height/2 - 285);

var sec = second();
var arco = map(sec, 0,59,181,360);

stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3400, 200, 200, 200, 180, arco);
stroke(color(0,252,232,220));
arc(3400, 370, 200, 200, 0, 180);
stroke(color(0,180,252,220));
line(3300, 200, 3300, 370);
stroke(color(0,180,252,220));
line(3500, 200, 3500, 370);

pop();

};








function zehnerstunde() {

push();

translate(width/2 - 360, height/2 - 285);
strokeWeight(20);
stroke(color(0,252,232,220));
line(200, 470, 200, 100);
stroke(color(0,222,252,220));
line(100, 200, 200, 100);

pop();

};

function ozehnerstunde() {

push();

translate(width/2 - 3580, height/2 - 285);
stroke(color(0,222,252,220));
strokeWeight(20);
noFill();
arc(3400, 200, 200, 200, 180, 360);
stroke(color(0,252,232,220));
arc(3400, 370, 200, 200, 0, 180);
stroke(color(0,180,252,220));
line(3300, 200, 3300, 370);
stroke(color(0,180,252,220));
line(3500, 200, 3500, 370);

pop();

};

function zwanzigerstunde() {

push();

translate(width/2 - 680, height/2 - 285);
strokeWeight(20);
noFill();
stroke(color(0,252,232,220));
arc(500, 200, 200, 200, 180, 405);
stroke(color(0,222,252,220));
line(400, 470, 570, 272);
stroke(color(0,252,232,220));
line(400, 470, 600, 470);

pop();

};

function center() {

push();

translate(width/2, height/2 - 285);
strokeWeight(20);
stroke(color(0,252,232,220));
line(0, 220, 0, 240);
stroke(color(0,222,252,220));
line(0, 360, 0, 380);

pop();

};




function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
