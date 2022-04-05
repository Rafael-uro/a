var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers
var car1, car2
var cars = []
var pista, car1_img, car2_img
function preload() {
  car1_img = loadImage("images/car1.png")
  car2_img = loadImage("images/car4.png")
  backgroundImage = loadImage("images/ground.png")
  pista = loadImage("images/track.jpg")
}


function setup() {
  canvas = createCanvas(windowWidth - 20, windowHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {

  if (playerCount == 2) {
    game.update(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }
  if (gameState === 2){
    game.end()
  }
}
