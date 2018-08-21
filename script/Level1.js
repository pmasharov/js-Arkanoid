'use strict'

var cvs = document.getElementById('c1');
cvs.style.display = 'block';
var ctx = cvs.getContext('2d');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

let areaH = {
    width: cvs.width,
    height: cvs.height,
    color: 'black',
    status: 'auto',
    drow: function () {
        ctx.fillStyle = areaH.color;
        ctx.fillRect(0,0,areaH.width,areaH.height);
    }
}
let racketH = {
    width: areaH.width/10,
    height: areaH.height/50,
    posX: areaH/2,
    posY: areaH - this.height,
    drow: function () {
        ctx.fillStyle = ballH.color;
        ctx.fillRect(areaH.width/2-racketH.width/2, areaH.height-racketH.height, racketH.width, racketH.height);
    }
}
let ballH = {
    posX: areaH.width/2,
    posY: areaH.height/2,
    r: (areaH.width+areaH.height)/2/100,
    color: 'white',
    speedX: Math.random()*(2-(-2))+(-2),
    speedY: Math.random()*(2-(-2))+(-2),
    updatePosition: function () {
        let self = this;
        ballH.posX += ballH.speedX;
        ballH.posY += ballH.speedY;
        self.drow();
    },
    drow: function () {
        ctx.beginPath();
        ctx.fillStyle = ballH.color;
        ctx.shadowColor = 'white';
        ctx.arc(ballH.posX, ballH.posY, ballH.r, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    }
}

function tick () {
    areaH.drow();
    racketH.drow();
    ballH.updatePosition();
    if (ballH.posX-ballH.r < 0) {   //отскок мячика от лева
        ballH.speedX = -ballH.speedX;
        ballH.posX = ballH.r;
    }
    if (ballH.posX+ballH.r > areaH.width) { //отскок мячика от права
        ballH.speedX = -ballH.speedX;
        ballH.posX = areaH.width-ballH.r;
    }
    if (ballH.posY+ballH.r > areaH.height) {//отскок мячика от низа
        ballH.speedY = -ballH.speedY;
        ballH.posY = areaH.height-ballH.r;
    }
    if (ballH.posY-ballH.r < 0) {   //отскок мячика от верха
        ballH.speedY = -ballH.speedY;
        ballH.posY = ballH.r;
    }
    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);