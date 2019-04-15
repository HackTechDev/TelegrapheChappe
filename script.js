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

var sprite;

function create() {

    game.time.desiredFps = 30;
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';
    
    var bounds = new Phaser.Rectangle(100, 100, 400, 400);
    
    
    sprite = game.add.graphics(200, 200);
    sprite.beginFill(0x000, 1);
    sprite.lineStyle(2, 0x0000FF, 1);
    sprite.drawRect(0, 0, 100, 10);
    sprite.endFill();
    sprite.pivot.x = 50;
    sprite.pivot.y = 5;

}

function update() {
  
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        sprite.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        sprite.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        sprite.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        sprite.y += 4;
    }

    //sprite.x += 4;
    sprite.angle += 1;
}

function render () {


}

