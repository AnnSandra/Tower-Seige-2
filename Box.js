class Box{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.8,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity=this.visibility-5
          pop();
          //tint(225,this.visibility);
        }
      }
}