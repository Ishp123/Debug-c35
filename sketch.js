var  database;
var canvas,backgroudimg,form,player,game
var gameState = 0;
var playerCount = 0; 


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game= new Game();
  game.getState()
  game.start()


}

function draw(){
  
    
  
}
