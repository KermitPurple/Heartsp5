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

	draw(currentColor){
		fill(this.getColor(currentColor));
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

	getColor(currentColor){
		if(currentColor === 1){
			return color(255, 0, random(0,150))
		} else if (currentColor === 2){
		    return random([color(229,0,0), color(255,141,0), color(255,238,0), color(0, 128, 33), color(0,76,255), color(118,1,138)])
		} else if (currentColor === 3){
		    return random([color(206,0,103), color(156,51,156), color(0,51,153)])
		} else if (currentColor === 4){
		    return random([color(255, 33, 142), color(255,214,0), color(33,176,254)])
		} else if (currentColor === 5){
		    return random([color(90, 207, 250), color(245, 171, 186), color(255,255,255)])
		} else if (currentColor === 6){
		    //color = pygame.Color(255)
		    //color.hsva = (random.randint(1,350),100,100)
		    //return color
		}
		return color(255, 0, random(0,150))
	}
}
