var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
{ type: "sawblade", x: 400, y: groundY - 125, damage : 10},
           { type: "sawblade", x: 200, y: groundY - 125, damage : 10},
          { type: "sawblade", x: 400, y: groundY - 15, damage : 10},
          { type: "sawblade", x: 650, y: groundY - 125, damage : 10},
          {type: "sawblade", x: 820, y: groundY - 125, damage : 10},
          { type: "reward", x: 700, y: groundY - 145, speed : -3},
          { type: "reward", x: 1000, y: groundY - 135, speed : -2},
          { type: "reward", x: 1500, y: groundY - 135, speed : -2},
          {type: "sawblade", x: 2220, y: groundY - 15, damage : 10},
          {type: "sawblade", x: 2820, y: groundY - 125, damage : 10},
          {type: "sawblade", x: 3220, y: groundY - 15, damage : 10},
          {type: "sawblade", x: 3920, y: groundY - 125, damage : 10},
          { type: "enemy", x: 2000, y: groundY - 35, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 2500, y: groundY - 25, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3000, y: groundY - 25, speed: -4, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3200, y: groundY - 25, speed: -3, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3300, y: groundY - 25, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 4000, y: groundY - 25, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 4000, y: groundY - 25, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "marker", x: 4000, y: groundY - 30, speed: -3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
           { type: "sawblade", x: 200, y: groundY - 125, damage : 30},
          { type: "sawblade", x: 600, y: groundY - 125, damage : 30},
          { type: "sawblade", x: 1000, y: groundY - 125, damage : 30},
          {type: "sawblade", x: 2000, y: groundY - 10, damage : 30},
          {type: "sawblade", x: 2300, y: groundY - 15, damage : 30},
          {type: "sawblade", x: 3720, y: groundY - 15, damage : 30},
          {type: "sawblade", x: 820, y: groundY - 125, damage : 30},
          { type: "reward", x: 700, y: groundY - 155, speed : -3},
          { type: "reward", x: 1000, y: groundY - 140, speed : -2},
          { type: "reward", x: 1500, y: groundY - 145, speed : -2},
          { type: "enemy", x: 2000, y: groundY - 5, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 2500, y: groundY - 12, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3000, y: groundY - 125, speed: -4, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3200, y: groundY - 125, speed: -3, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 3300, y: groundY - 5, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 4000, y: groundY - 125, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 4000, y: groundY - 5, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "marker", x: 4000, y: groundY - 30, speed: -1},
        ],
      },
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
        { type: "sawblade", x: 500, y: groundY - 125, damage : 15},
        { type: "sawblade", x: 800, y: groundY - 15, damage : 15},
        { type: "sawblade", x: 900, y: groundY - 125, damage : 20},
        { type: "sawblade", x: 1200, y: groundY - 125, damage : 20},
        { type: "sawblade", x: 1500, y: groundY - 15, damage : 15},
        { type: "sawblade", x: 1900, y: groundY - 25, damage : 25},
        { type: "sawblade", x: 2100, y: groundY - 25, damage : 15},
        { type: "sawblade", x: 2500, y: groundY - 125, damage : 25},
        { type: "reward", x: 700, y: groundY - 155, speed : -3},
        { type: "reward", x: 1000, y: groundY - 140, speed : -2},
        { type: "reward", x: 1500, y: groundY - 145, speed : -2},
        { type: "enemy", x: 3000, y: groundY - 125, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 10, speed: -4, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 125, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 15, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 125, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 15, speed: -3, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 15, speed: -5, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 15, speed: -12, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 3000, y: groundY - 125, speed: -5, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "marker", x: 3500, y: groundY - 30, speed: -1},
        ],
      },

      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
        { type: "sawblade", x: 500, y: groundY - 15, damage : 10},
        { type: "sawblade", x: 1000, y: groundY - 15, damage : 5},
        { type: "sawblade", x: 1500, y: groundY - 15, damage : 5},
        { type: "sawblade", x: 2000, y: groundY - 125, damage : 15},
        { type: "sawblade", x: 2500, y: groundY - 15, damage : 5},
        { type: "sawblade", x: 3000, y: groundY - 125, damage : 15},
        { type: "sawblade", x: 3500, y: groundY - 125, damage : 5},
        { type: "reward", x: 100, y: groundY - 165, speed : -2},
        { type: "reward", x: 200, y: groundY - 165, speed : -2},
        { type: "reward", x: 700, y: groundY - 165, speed : -5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -5, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 10, speed: -3, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -6, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -4, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 10, speed: -2, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -7, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 10, speed: -1, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 115, speed: -10, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -3, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 115, speed: -7, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 10, speed: -6, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "enemy", x: 5000, y: groundY - 5, speed: -8, image: "img/SadSal.png", offsetX: -35, offsetY: -25, scale: 0.5},
        { type: "marker", x: 5000, y: groundY - 30, speed: -1},

        ]
      },
    
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
