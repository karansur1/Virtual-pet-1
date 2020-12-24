var dog, happyDog
var dogIMG
var database
var foodS, foodStock

function preload()
{
      dogIMG = loadImage("images/dogImg.png")
      happyDog = loadImage("images/dogImg1.png")
}

function setup() {
      createCanvas(500,500);

      database = firebase.database();


      var dog = createSprite(300,300,50,50);
      dog.addImage("dog",dogIMG);
      dog.scale = 0.2

      foodStock = database.ref("Food")
      foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happyDog",happyDog);
  }

  drawSprites();
  
  text("Food Stock:"+foodS,300,400)

}
function writeStock(petFOOD){
  if(petFOOD<=0){
      petFOOD=0
  }
  else{
      petFOOD=petFOOD-1;
  }
  database.ref('/').update({
      food:petFOOD
  })
}
function readStock(data){
  foodS = data.val();
  
}



