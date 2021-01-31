 const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0; 
var gameState="play";
var particle;
var turn=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
 

   for (var k = 0; k <=width; k = k + 80) {
     var number=Math.ceil(random(2,10))*50;
     divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight,number));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20)
  fill ("white")
 text("Score : "+ score,20,30);
 Engine.update(engine);
 if(gameState==="play"){

  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){          
    particle.display();       
      if(particle.body.position.y>600){        
        score=score+findThePoints(particle.body.position.x);      
        particle=null;
        if(turn>=5){gameState="end"}
      }
  }
   

   
  }
   if (gameState==="end"){
     textSize(50);
     fill ("white")
     text("GAMEOVER",400,400);
   }
   
}
 

function mouseReleased(){

  
   if(gameState!=="end"){
     
    turn++;       
    particle=new Particle(mouseX,10,10,10);
    
    
  } 
}


function findThePoints(posX){
  var diff=0;
  var prvDiv=null;
    for (var k = 0; k < divisions.length; k++) {
      if(k==0)
      {
       diff=posX-divisions[k].body.position.x; 
       prvDiv=divisions[k];
       }
       else
       {
        diff=posX-divisions[k].body.position.x;
         if(diff>0)
         {
          
          prvDiv=divisions[k];
         }
         else
         {
             break;
         }
       }    
    }
    return prvDiv.points;
  } 


