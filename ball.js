class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'density':1.2,
            'restitution':0.3,
            'friction':0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
    };