var game = new Phaser.Game(1024, 768, 
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
    game.stage.backgroundColor = '#eee';
    
}

var regulateur;
var regulateur_angle = 0;
var regulateur_direction = 0;

function create() {

    game.time.desiredFps = 30;
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';
    
    var bounds = new Phaser.Rectangle(0, 0, 1024, 768);
    

    mat = game.add.graphics(512, 384);
    mat.beginFill(0x000, 1);
    mat.lineStyle(2, 0x00FF00, 1);
    mat.drawRect(0, 0, 20, 380); 
    mat.endFill();
    mat.pivot.x = 10;
    mat.pivot.y = 0;
    mat.angle = 0;

    
    regulateur = game.add.graphics(512, 384);
    regulateur.beginFill(0x000, 1);
    regulateur.lineStyle(2, 0x0000FF, 1);
    regulateur.drawRect(0, 0, 230, 18); 
    regulateur.endFill();
    regulateur.pivot.x = 115;
    regulateur.pivot.y = 9;
    regulateur.angle = 0;


    indicateur_gauche = game.add.graphics(0, 0);
    indicateur_gauche.beginFill(0x000, 1);
    indicateur_gauche.lineStyle(2, 0xFF0000, 1);
    indicateur_gauche.drawRect(0, 0, 100, 16); 
    indicateur_gauche.endFill();
    indicateur_gauche.pivot.x = 0;
    indicateur_gauche.pivot.y = 0;
    indicateur_gauche.angle = 10;


    indicateur_droit = game.add.graphics(220, 0);
    indicateur_droit.beginFill(0x000, 1);
    indicateur_droit.lineStyle(2, 0xFFFF00, 1);
    indicateur_droit.drawRect(0, 0, 100, 16); 
    indicateur_droit.endFill();
    indicateur_droit.pivot.x = 0;
    indicateur_droit.pivot.y = 0;
    indicateur_droit.angle = 30;


    regulateur.addChild(indicateur_gauche);

    regulateur.addChild(indicateur_droit);
}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        regulateur_angle = -90;
        regulateur_direction = -1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
        regulateur_angle = -45;
        regulateur_direction = -1;

    }
 
    if (game.input.keyboard.isDown(Phaser.Keyboard.E)) {
        regulateur_angle = 0;
        regulateur_direction = -1;

    }
 

    if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
        regulateur_angle = 45;
        regulateur_direction = 1;

    }
 
    if (game.input.keyboard.isDown(Phaser.Keyboard.T)) {
        regulateur_angle = 90;
        regulateur_direction = 1;

    }
 
    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
        indicateur_gauche.angle += 45;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        indicateur_gauche.angle -= 45;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        indicateur_droit.angle += 45;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
        indicateur_droit.angle -= 45;
    }


    if (regulateur.angle != regulateur_angle)
        regulateur.angle += regulateur_direction;

}

function render () {


}

