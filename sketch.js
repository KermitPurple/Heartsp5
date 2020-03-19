var hearts
var currentColor = 1;

function setup(){
	createCanvas(window.innerWidth-20,window.innerHeight-20);
	hearts = [];
	for(let i = 0; i < 25; i++){
		hearts.push(new Heart());
	}
}

function draw(){
	background(255);
	frameRate(1);
	stroke(0);
	strokeWeight(3);
	for(let i = 0; i < hearts.length; i++){
		hearts[i].random(width, height);
		hearts[i].draw(currentColor);
	}
}

function keyPressed(){
	if(keyCode >= 48 && keyCode <= 57){//48 is '0' and 57 is '9'
		currentColor = keyCode - 48;
	};
}
