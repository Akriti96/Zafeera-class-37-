class Game {
  constructor() {

  }

  getState() {
    var start = database.ref("gameState")
    start.on("value", (data) => {
      gameState = data.val()
    })


  }

  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  async startState() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

  }

  playState() {
    form.hide();
    textSize(25);
    text("Start Game ", 100, 100);
    Player.getPlayerInput();
    if (allplayers !== undefined) {
      var pos = 120;
      for (var i in allplayers) {
        if (i === "player" + player.index) {
          fill("black")
        } else {
          fill("white")
        }
        pos += 20;
        textSize(25);
        text(allplayers[i].name + ":" + allplayers[i].distance, 120, pos);
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.updatename();
    }
  }


}
