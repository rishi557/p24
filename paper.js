class paper{
    constructor(x,y,r){
        var options={
            restitution:0.5,
            friction:0.3

        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        ellipseMode(RADIUS)
        translate (pos.x,pos.y) 
        rotate (angle)
        fill('pink')
        ellipse(0,0,this.r)
        pop ()
    }
}