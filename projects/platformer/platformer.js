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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

   // for (let i = 100; i < canvas.width; i += 100) {
     //createPlatform(i, canvas.height, -1, -canvas.height);
     //}
     //for (let i = 100; i < canvas.height; i += 100) {
     // createPlatform(canvas.width, i, -canvas.width, -1);
    //}

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(0,300,200,600);
    createPlatform(0,300,200,10);
    createPlatform(450,300,10,10);
    createPlatform(750,400,10,10);
    createPlatform(1050,500,10,10);
    createPlatform(0,0,1440,100);
     createPlatform(1300,600, 100,100)
     createPlatform(0,700,1440,100);


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)


    createCollectable("database", 1200, 125, 0.05, 1);

    createCollectable("diamond",600,300,0.05,1.05);
    createCollectable("grace",300,175,0.05,1.01);
    createCollectable("max",900,200,0.05,1.01);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left",650, 66, 100, 75);
    createCannon("top",300, 2587,20, 200);
    createCannon("top",600, 2255,20, 200);
    createCannon("top",900, 2659,20, 200);
    createCannon("top",1200, 2721,20, 200);
    createCannon("right",765, 66, 100, 72);
    createCannon("bottom", 0, 100000000000);
    createCannon("bottom", 100, 100000000000,0,0);
    createCannon("bottom", 200, 100000000000,0,0);
    createCannon("bottom", 300, 100000000000,0,0);
    createCannon("bottom", 400, 100000000000,0,0);
    createCannon("bottom", 500, 100000000000,0,0);
    createCannon("bottom", 600, 100000000000,0,0);
    createCannon("bottom", 700, 100000000000,0,0);
    createCannon("bottom", 800, 100000000000,0,0);
    createCannon("bottom", 900, 100000000000,0,0);
    createCannon("bottom", 1100, 100000000000,0,0);
    createCannon("bottom", 1200, 100000000000,0,0);
    createCannon("bottom", 1300, 100000000000,0,0);

    createCannon("bottom", 1000, 100000000000,0,0);




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});


