class Divisions {
    constructor(x, y, width, height,points) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.points=points
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        text (this.points,pos.x+10,pos.y-height/6);
        rect(pos.x, pos.y, this.width, this.height);
    }
};