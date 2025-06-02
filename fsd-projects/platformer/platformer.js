$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(650,630, 35, 20);
    createPlatform(730,550, 35, 20);
    createPlatform(800,500, 35, 20);
    createPlatform(650,450, 35, 20);
    createPlatform(550,380, 65, 20);
    createPlatform(730,320, 15, 20);
    createPlatform(400,360, 65, 20);
    createPlatform(200,280, 65, 20);
    createPlatform(350,150, 65, 20);

    // TODO 3 - Create Collectables
    createCollectable("ring", 650, 500, 5);
    createCollectable("ring", 800, 300, 10);
    createCollectable("ring", 730, 100, 10);
    createCollectable("ring", 400, 250, 10);
    createCollectable("ring",360, 10);

    
    // TODO 4 - Create Cannons
    createCannon("left", 100, 2000);
    createCannon("right", 400, 2000);
    createCannon("left", 500, 2000);
    createCannon("right", 100, 2000);
    createCannon("right", 700, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
