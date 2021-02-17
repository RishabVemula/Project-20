var tom, jerry, backgroudImg, tomImg, jerryImg, tomImg2;


function preload() {
    //load the images here

    backgroundImg = loadImage("images/garden.png")

    tomImg = loadImage("images/cat1.png")
    jerryImg = loadImage("images/mouse1.png")

    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png")


}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870,600,50,50)
    tom.addImage("tom", tomImg)
    tom.scale = 0.1

    jerry = createSprite(200,600,50,50)
    jerry.addImage("jerry", jerryImg)
    jerry.scale = 0.1


}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){

    tom.velocityX = -5
    tom.addAnimation("tomRunning", tomImg2)
    tom.changeAnimation("tomRunning")


  }


}
