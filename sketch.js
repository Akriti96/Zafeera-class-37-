var  database;
var gameState=0;
var playerCount=0;
var form,player,game;
var allplayers;
var distance=0


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.startState();
  



}

function draw(){
  background("white");
  if(playerCount === 4){
     game.updateState(1)
  }
 
  if(gameState === 1){
   clear()
      game.playState()
    }
}
