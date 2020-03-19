var hearts

function setup(){
	createCanvas(window.innerWidth-20,window.innerHeight-20);
	hearts = [];
	for(let i = 0; i < 10; i++){
		hearts.push(new Heart());
	}
}

function draw(){
	background(255);
	frameRate(1);
	stroke(0);
	for(let i = 0; i < hearts.length; i++){
		hearts[i].random(width, height);
		hearts[i].draw();
	}
}
