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
var regulateur_position = 0;



var indicateur_gauche;
var indicateur_gauche_angle = 0;
var indicateur_gauche_direction = 0;
var indicateur_gauche_position = 0;


var indicateur_droit;
var indicateur_droit_angle = 0;
var indicateur_droit_direction = 0;
var indicateur_droit_position = 0;

var regulateuraButton;
var regulateurzButton;

var indicateurGaucheqButton;
var indicateurGauchesButton;

var indicateurDroitwButton;
var indicateurDroitxButtin;

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


    indicateur_gauche = game.add.graphics(0, 8);
    indicateur_gauche.beginFill(0x000, 1);
    indicateur_gauche.lineStyle(2, 0xFF0000, 1);
    indicateur_gauche.drawRect(0, 0, 100, 16); 
    indicateur_gauche.endFill();
    indicateur_gauche.pivot.x = 0;
    indicateur_gauche.pivot.y = 8;
    indicateur_gauche.angle = 0;


    indicateur_droit = game.add.graphics(230, 8);
    indicateur_droit.beginFill(0x000, 1);
    indicateur_droit.lineStyle(2, 0xFFFF00, 1);
    indicateur_droit.drawRect(0, 0, 100, 16); 
    indicateur_droit.endFill();
    indicateur_droit.pivot.x = 0;
    indicateur_droit.pivot.y = 8;
    indicateur_droit.angle = 0;


    regulateur.addChild(indicateur_gauche);

    regulateur.addChild(indicateur_droit);


    regulateurPositionText = this.add.text(16, 16, 'regulateurPosition: 0', { fontSize: '16px', fill: '#000' });
    regulateurAngleText = this.add.text(16, 32, 'regulateurAngle: 0', { fontSize: '16px', fill: '#000' });

    indicateurGauchePositionText = this.add.text(16, 48, 'indicateurGauchePosition: 0', { fontSize: '16px', fill: '#000' });
    indicateurGaucheAngleText = this.add.text(16, 64, 'indicateurGaucheAngle: 0', { fontSize: '16px', fill: '#000' });

    indicateurDroitPositionText = this.add.text(16, 80, 'indicateurDroitPosition: 0', { fontSize: '16px', fill: '#000' });
    indicateurDroitAngleText = this.add.text(16, 96, 'indicateurDroitAngle: 0', { fontSize: '16px', fill: '#000' });

    regulateuraButton = this.add.button(16, 120, 'buttona', regulateuraOnClick, this, 2, 1, 0);
    regulateurzButton = this.add.button(60, 120, 'buttonz', regulateurzOnClick, this, 2, 1, 0);

    indicateurGaucheqButton = this.add.button(16, 170, 'buttonq', indicateurGaucheqOnClick, this, 2, 1, 0);
    indicateurGauchesButton = this.add.button(60, 170, 'buttons', indicateurGauchesOnClick, this, 2, 1, 0);

    indicateurDroitwButton = this.add.button(16, 220, 'buttonw', indicateurDroitwOnClick, this, 2, 1, 0);
    indicateurDroitxButton = this.add.button(60, 220, 'buttonx', indicateurDroitxOnClick, this, 2, 1, 0);


}

function regulateuraOnClick() {
     console.log('regulateurA click');
     regulateur_position += 45;
     regulateur_direction = 1;
}

function regulateurzOnClick() {
     console.log('regulateurZ click');
     regulateur_position -= 45;
     regulateur_direction = -1;
}


function indicateurGaucheqOnClick() {
     console.log('indicateur gauche Q click');
        indicateur_gauche_position += 45;
        indicateur_gauche_direction = 1;
}

function indicateurGauchesOnClick() {
     console.log('indicateur gauche S click');
        indicateur_gauche_position -= 45;
        indicateur_gauche_direction = -1;
}


function indicateurDroitwOnClick() {
     console.log('indicateur droit W click');
        indicateur_droit_position += 45;
        indicateur_droit_direction = 1;
}

function indicateurDroitxOnClick() {
     console.log('indicateur droit X click');
        indicateur_droit_position -= 45;
        indicateur_droit_direction = -1;
}


function update() {
    regulateurPositionText.setText('regulateurPosition: ' + regulateur_position);
    regulateurAngleText.setText('regulateurAngle: ' + regulateur.angle);


    indicateurGauchePositionText.setText('indicateurGauchePosition: ' + indicateur_gauche_position);
    indicateurGaucheAngleText.setText('indicateurGaucheAngle: ' + indicateur_gauche.angle);


    indicateurDroitPositionText.setText('indicateurDroitPosition: ' + indicateur_droit_position);
    indicateurDroitAngleText.setText('indicateurDroitAngle: ' + indicateur_droit.angle);



    if (game.input.keyboard.isDown(Phaser.Keyboard.O)) {
        regulateur_position = 0;
    }


    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        regulateur_position += 45;
        regulateur_direction = 1;
    }

 
    if (game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
        regulateur_position -= 45;
        regulateur_direction = -1;
    }


    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
        indicateur_gauche_position += 45;
        indicateur_gauche_direction = 1;

    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        indicateur_gauche_position -= 45;
        indicateur_gauche_direction = -1;

    }


    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        indicateur_droit_position += 45;
        indicateur_droit_direction = 1;

    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
        indicateur_droit_position -= 45;
        indicateur_droit_direction = -1;

    }




    if (regulateur.angle != regulateur_position) {
            regulateur.angle += regulateur_direction;
    }



    if (indicateur_gauche.angle != indicateur_gauche_position) {
            indicateur_gauche.angle += indicateur_gauche_direction;
    }


    if (indicateur_droit.angle != indicateur_droit_position) {
            indicateur_droit.angle += indicateur_droit_direction;
    }




}

function render () {


}

