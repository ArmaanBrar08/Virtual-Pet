//Create variables here
var dog, happyDog;
var Food, foodStock;
var dataBase;
function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDogImage = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(200, 200, 10, 10);
  dog.addImage(dogImage);
  database = firebase.database()
  foodStock = database.ref("Food")
   foodStock.on("value", readStock);
  
}


function draw() {  
background((46, 139, 87);
  drawSprites();
  //add styles here

}

function UP_ARROW(){
   if (keyWentDown(UP_ARROW)){
     writeStock(Food)
     dog.addImage(happyDogImage);
   }
}



