var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade (x, y, damage){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
       var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
       sawBladeHitZone.x = x;
       sawBladeHitZone.y = y;

        sawBladeHitZone.rotationVelocity = 30;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        sawBladeHitZone.addChild(obstacleImage);
    }
  function createEnemy(x, y, speed){
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = speed;
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(50)
    };
    enemy.onProjectileCollision = function (){
      game.increaseScore(100);
      enemy.flyTo(0,0);
    };
  }
function createReward(x, y, speed){
    var reward = game.createGameItem("reward", 25);
    var blueSquare = draw.rect(50, 50, "blue");
    blueSquare.x = -25;
    blueSquare.y = -25;
    reward.addChild(blueSquare);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = speed;
    reward.onPlayerCollision = function () {
      game.changeIntegrity(10)
    };
    reward.onProjectileCollision = function (){
      game.increaseScore(100);
      reward.flyTo(0,0);
    };

  }

  function createMarker(x, y, speed){
    var marker = game.createGameItem("marker", 25);
    var yellowSquare = draw.rect(50, 50, "yellow");
    yellowSquare.x = -25;
    yellowSquare.y = -25;
    marker.addChild(yellowSquare);
    marker.x = x;
    marker.y = y;
    game.addGameItem(marker);
    marker.velocityX = speed;
    marker.onPlayerCollision = function () {
      game.changeIntegrity(10)
    };
    marker.onProjectileCollision = function (){
      game.increaseScore(100);
      marker.flyTo(0,0);
      startLevel();
    };
  }
    //function calls
    createSawBlade(440, groundY - 125, 10);
    createSawBlade(640, groundY - 125, 15);
    createSawBlade(840, groundY - 120, 20);
    createEnemy(400, groundY - 50, -3);
    createEnemy(900, groundY - 50, -2);
    createReward(100, groundY - 75, -2);
    createMarker(1500, groundY - 75, -3);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
