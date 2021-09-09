class Plinkos{
	constructor(x,y){
		var options={
			isStatic: true
		}
	this.body = Body.cirlce(x,y,10,options);
	this.x= x
	this.y=y
	World.add(world,this.body);
	}
	display(){
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		noStroke;
		fill("white");
		ellipseMode(RADIUS);
		ellipse(pos.x,pos.y,);
		pop();
	}
};