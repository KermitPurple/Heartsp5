class Heart{
	constructor(x = 0, y = 0, sz = 10){
		this.x = x;
		this.y = y;
		this.sz = sz;
	}

	random(width, height){
		this.x = random(width)
		this.y = random(height)
		this.sz = random(5,15);
		return this
	}

	draw(){
		fill(color(255, 0, random(0,150)));
		beginShape();
		for(let theta = 0; theta < TWO_PI; theta += 0.01){
			let x = 16 * pow(sin(theta), 3);
			x = this.sz * x + this.x;
			let y = 13 * cos(theta) - 5 * cos(2 * theta) - 2 * cos(3 * theta) - cos(4 * theta);
			y = -(this.sz * y - this.y);
			vertex(x,y);
		}
		endShape();
	}
}
