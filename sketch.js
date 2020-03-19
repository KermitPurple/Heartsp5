var hearts

function setup(){
	createCanvas(window.innerWidth-20,window.innerHeight-20);
	hearts = [];
	for(let i = 0; i < 10; i++){
		hearts.push(new Heart().random(width, height))
	}
}

function draw(){
	background(0);
}
