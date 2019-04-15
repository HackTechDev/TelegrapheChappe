var game = new Phaser.Game(480, 320, 
                           Phaser.AUTO, 
                           null, 
                           {
                             preload: preload, 
                             create: create, 
                             update: update,
                             render: render
                           });

var phaser;

function preload() {
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    
}

var regulateur;

function create() {

    game.time.desiredFps = 30;
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';
    
    var bounds = new Phaser.Rectangle(100, 100, 400, 400);
    
    
    regulateur = game.add.graphics(200, 200);
    regulateur.beginFill(0x000, 1);
    regulateur.lineStyle(2, 0x0000FF, 1);
    regulateur.drawRect(0, 0, 100, 10);
    regulateur.endFill();
    regulateur.pivot.x = 50;
    regulateur.pivot.y = 5;

}

function update() {
  
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        regulateur.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        regulateur.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        regulateur.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        regulateur.y += 4;
    }

    //regulateur.x += 4;
    regulateur.angle += 1;
}

function render () {


}

