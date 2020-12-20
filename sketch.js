//Create variables here
var dog,happydog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogimage=loadImage("Dog.png")
  dogimage2=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();


 dog=createSprite(250,300)
dog.addImage(dogimage)
dog.scale=0.4

  foodStock= database.ref('Food');
 foodStock.on("value",readStock);
 textSize(20)
}


function draw() { 
  
  
  

background(46,139,87);

if(keyWentDown(UP_ARROW)){
 writestock(foodS) 
   dog.addImage(dogimage2)
}


  drawSprites();
  fill(255,255,254)
  stroke("black")
  text("Food remaining: "+foodS,170,200)
  textSize(13)
  text("Note:Press UP_ARROW key to feed Drago Milk",130,10)
  
 }

function readStock(data){
  foodS=data.val();
}

function writestock(x){

 if(x<=0){
   x=0
 } else{
   x=x-1
 }




    database.ref('/').update({
      Food:x
    })

   

    
}