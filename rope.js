class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA :bodyA,
            bodyB :bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Rope = Constraint.create(options)
        World.add(world, this.Rope);
    }
    display(){
        line(this.Rope.bodyA.position.x, this.Rope.bodyA.position.y, this.Rope.bodyB.position.x + this.offsetX, this.Rope.bodyB.position.y + this.offsetY);
    }
}