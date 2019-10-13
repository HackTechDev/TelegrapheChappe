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
    game.load.spritesheet('buttona', 'asset/buttona.png', 35, 35);
    game.load.spritesheet('buttonz', 'asset/buttonz.png', 35, 35);
    game.load.spritesheet('buttonq', 'asset/buttonq.png', 35, 35);
    game.load.spritesheet('buttons', 'asset/buttons.png', 35, 35);
    game.load.spritesheet('buttonw', 'asset/buttonw.png', 35, 35);
    game.load.spritesheet('buttonx', 'asset/buttonx.png', 35, 35);

}

var regulator;
var regulatorAngle = 0;
var regulatorDirection = 0;
var regulatorPosition = 0;



var indicatorLeft;
var indicatorLeftAngle = 0;
var indicatorLeftDirection = 0;
var indicatorLeftPosition = 0;


var indicatorRight;
var indicatorRightAngle = 0;
var indicatorRightDirection = 0;
var indicatorRightPosition = 0;

var regulatorAButton;
var regulatorZButton;

var indicatorLeftQButton;
var indicatorLeftSButton;

var indicatorRightWButton;
var indicatorRightXButton;

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


    regulator = game.add.graphics(512, 384);
    regulator.beginFill(0x000, 1);
    regulator.lineStyle(2, 0x0000FF, 1);
    regulator.drawRect(0, 0, 230, 18); 
    regulator.endFill();
    regulator.pivot.x = 115;
    regulator.pivot.y = 9;
    regulator.angle = 0;


    indicatorLeft = game.add.graphics(0, 8);
    indicatorLeft.beginFill(0x000, 1);
    indicatorLeft.lineStyle(2, 0xFF0000, 1);
    indicatorLeft.drawRect(0, 0, 100, 16); 
    indicatorLeft.endFill();
    indicatorLeft.pivot.x = 0;
    indicatorLeft.pivot.y = 8;
    indicatorLeft.angle = 0;


    indicatorRight = game.add.graphics(230, 8);
    indicatorRight.beginFill(0x000, 1);
    indicatorRight.lineStyle(2, 0xFFFF00, 1);
    indicatorRight.drawRect(0, 0, 100, 16); 
    indicatorRight.endFill();
    indicatorRight.pivot.x = 100;
    indicatorRight.pivot.y = 8;
    indicatorRight.angle = 0;


    regulator.addChild(indicatorLeft);

    regulator.addChild(indicatorRight);


    regulatorPositionText = this.add.text(16, 16, 'regulatorPosition: 0', { fontSize: '16px', fill: '#000' });
    regulatorAngleText = this.add.text(16, 32, 'regulatorAngle: 0', { fontSize: '16px', fill: '#000' });

    indicatorLeftPositionText = this.add.text(16, 48, 'indicatorLeftPosition: 0', { fontSize: '16px', fill: '#000' });
    indicatorLeftAngleText = this.add.text(16, 64, 'indicatorLeftAngle: 0', { fontSize: '16px', fill: '#000' });

    indicatorRightPositionText = this.add.text(16, 80, 'indicatorRightPosition: 0', { fontSize: '16px', fill: '#000' });
    indicatorRightAngleText = this.add.text(16, 96, 'indicatorRightAngle: 0', { fontSize: '16px', fill: '#000' });


    regulatorAButton = this.add.button(16, 220, 'buttona', regulatorAOnClick, this, 2, 1, 0);
    regulatorZButton = this.add.button(60, 220, 'buttonz', regulatorZOnClick, this, 2, 1, 0);

    indicatorLeftQButton = this.add.button(16, 270, 'buttonq', indicatorLeftQOnClick, this, 2, 1, 0);
    indicatorLeftSButton = this.add.button(60, 270, 'buttons', indicatorLeftSOnClick, this, 2, 1, 0);

    indicatorRightWButton = this.add.button(16, 320, 'buttonw', indicatorRightWOnClick, this, 2, 1, 0);
    indicatorRightXButton = this.add.button(60, 320, 'buttonx', indicatorRightXOnClick, this, 2, 1, 0);


}

function regulatorAOnClick() {
    console.log('regulatorA click');
    if(regulatorPosition < 90) {
        regulatorPosition += 45;
        regulatorDirection = 1;
    }
}

function regulatorZOnClick() {
    console.log('regulatorZ click');
    if(regulatorPosition > -90) {
        regulatorPosition -= 45;
        regulatorDirection = -1;
    }
}


function indicatorLeftQOnClick() {
    console.log('indicator left Q click');
    indicatorLeftPosition += 45;
    indicatorLeftDirection = 1;
}

function indicatorLeftSOnClick() {
    console.log('indicator left S click');
    indicatorLeftPosition -= 45;
    indicatorLeftDirection = -1;
}


function indicatorRightWOnClick() {
    console.log('indicator right W click');
    indicatorRightPosition += 45;
    indicatorRightDirection = 1;
}

function indicatorRightXOnClick() {
    console.log('indicator right X click');
    indicatorRightPosition -= 45;
    indicatorRightDirection = -1;
}


function update() {
    regulatorPositionText.setText('regulatorPosition: ' + regulatorPosition);
    regulatorAngleText.setText('regulatorAngle: ' + regulator.angle);


    indicatorLeftPositionText.setText('indicatorLeftPosition: ' + indicatorLeftPosition);
    indicatorLeftAngleText.setText('indicatorLeftAngle: ' + indicatorLeftAngle);


    indicatorRightPositionText.setText('indicatorRightPosition: ' + indicatorRightPosition);
    indicatorRightAngleText.setText('indicatorRightAngle: ' + indicatorRightAngle);


    /* Regulator */
    if (regulatorPosition <= 90 && regulatorPosition >= -90) {
        if (regulator.angle != regulatorPosition) {
            regulator.angle += regulatorDirection;
        }
    }

    /* Indicator left */
    if (indicatorLeftAngle != indicatorLeftPosition) {
    
        indicatorLeftAngle += indicatorLeftDirection;

        indicatorLeft.angle += indicatorLeftDirection;
    }

    /* Indicator droit */
    if (indicatorRightAngle != indicatorRightPosition) {

        indicatorRightAngle += indicatorRightDirection;

        indicatorRight.angle += indicatorRightDirection;
    }

}

function render () {


}

