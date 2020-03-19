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
}
