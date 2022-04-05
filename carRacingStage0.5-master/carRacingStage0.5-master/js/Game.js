class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value")
      if (playerCountRef.exists()) {

        playerCount = playerCountRef.val()
        player.getCount();
      }
      form = new Form()
      form.display();

    }
    car1 = createSprite(300, 200)
    car2 = createSprite(600, 200)
    cars = [car1, car2]
    car1.addImage(car1_img)
    car2.addImage(car2_img)

  }
  play() {
    form.hide()
    textSize(30)

    Player.getPlayerInfo()
    if (allPlayers !== undefined) {
      // image(nomeimagem,posX,posY,largura,altura)
      //    var displayPosition = 130
      background(backgroundImage)
      image(pista, 0, -displayHeight * 4, displayWidth, displayHeight * 20)
      var index = 0
      var x = 175; var y;
      for (var plr in allPlayers) {
        index = index + 1
        x = x + 200
        y = windowHeight - allPlayers[plr].distance
        cars[index - 1].x = x
        cars[index - 1].y = y
        if (index === player.index) {

          camera.position.y = cars[index - 1].y
        }

        drawSprites()
        //displayPosition += 20
        //textSize(15)
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition)
      }
    }
    if (keyIsDown(UP_ARROW)) {
      player.distance += 50
      player.update()
    }
    if (player.distance > 3800) {
      gameState = 2
    }
    drawSprites()
  }

  end() {
    console.log("fim de jogo")
  }
}
