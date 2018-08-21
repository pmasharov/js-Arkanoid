'use strict';
(function() {
    var cvs = document.getElementById('c1');
    cvs.style.display = 'block';
    var ctx = cvs.getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    
    function resizeCanvas() {
        cvs.addEventListener('mousemove', setBallPos, false);
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        
        var areaH = {
            width: cvs.width,
            height: cvs.height,
            color: 'black',
            status: 'auto',
            drow: function () {
                ctx.fillStyle = areaH.color;
                ctx.fillRect(0,0,areaH.width,areaH.height);
            }
        }
        var ballH = {
            posX: areaH.width/2,
            posY: areaH.height/2,
            r: (areaH.width+areaH.height)/2/100,
            color: 'white',
            speedX: Math.random()*(2-(-2))+(-2),
            speedY: Math.random()*(2-(-2))+(-2),
            updatePosition: function () {
                ballH.posX += ballH.speedX;
                ballH.posY += ballH.speedY;
                this.drow();
            },
            drow: function () {
                ctx.beginPath();
                ctx.fillStyle = ballH.color;
                ctx.arc(ballH.posX, ballH.posY, ballH.r, 0, Math.PI*2, false);
                ctx.closePath();
                ctx.fill();
            },
            drowLines: function () {
                ctx.beginPath();
                ctx.strokeStyle = ballH.color;
                ctx.moveTo(0,0);
                ctx.lineTo(ballH.posX, ballH.posY);
                ctx.lineTo(areaH.width, 0);
                ctx.moveTo(areaH.width, areaH.height);
                ctx.lineTo(ballH.posX, ballH.posY);
                ctx.lineTo(0, areaH.height);
                ctx.closePath();
                ctx.stroke()
            }
        }
        var clientRectH = {
            posX: 0,
            posY: 0,
            width: ballH.r*20,
            height: ballH.r*10,
            drow: function () {
                ctx.strokeRect(clientRectH.posX-clientRectH.width/2, clientRectH.posY-clientRectH.height/2, clientRectH.width, clientRectH.height)
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(clientRectH.posX-clientRectH.width/2, clientRectH.posY-clientRectH.height/2);
                ctx.moveTo(clientRectH.posX+clientRectH.width/2,clientRectH.posY-clientRectH.height/2);
                ctx.lineTo(areaH.width, 0);
                ctx.moveTo(clientRectH.posX-clientRectH.width/2, clientRectH.posY+clientRectH.height/2);
                ctx.lineTo(0, areaH.height);
                ctx.moveTo(clientRectH.posX+clientRectH.width/2, clientRectH.posY+clientRectH.height/2);
                ctx.lineTo(areaH.width, areaH.height);
                ctx.closePath();
                ctx.stroke();
            }
        }
        var playTextH = {
            drowAuto: function () {
                ctx.fillStyle = 'white';
                ctx.shadowColor = 'green';  //настраиваем тень для play
                ctx.shadowOffsetX = -(ballH.posX-areaH.width/3)/10;
                ctx.shadowOffsetY = -(ballH.posY-areaH.height/3)/10;
                ctx.shadowBlur = 5;
                ctx.font = 'normal ' + clientRectH.height/1.5 + 'px' + ' Arial';    //текст для play
                ctx.fillText('PLAY', areaH.width/3, areaH.height/3);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            },
            drowManual: function () {
                ctx.fillStyle = 'green';
                ctx.shadowColor = 'green';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 25;
                ctx.font = 'normal ' + clientRectH.height/1.5 + 'px' + ' Arial';
                ctx.fillText('PLAY', areaH.width/3, areaH.height/3);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
        }
        var scoresTextH = {
            drowAuto: function () {
                ctx.shadowColor = 'blue';   //настраиваем тень для scores
                ctx.shadowOffsetX = -(ballH.posX-areaH.width/1.7)/10;
                ctx.shadowOffsetY = -(ballH.posY-areaH.height/2)/10;
                ctx.shadowBlur = 5;
                ctx.font = 'normal ' + clientRectH.height/3 + 'px' + ' Arial';  //текст для scores
                ctx.fillText('SCORES', areaH.width/1.7, areaH.height/2);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            },
            drowManual: function () {
                ctx.fillStyle = 'blue';
                ctx.shadowColor = 'blue';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 50;
                ctx.font = 'normal ' + clientRectH.height/3 + 'px' + ' Arial';
                ctx.fillText('SCORES', areaH.width/1.7, areaH.height/2);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
        }
        var helpTextH = {
            drowAuto: function () {
                ctx.shadowColor = 'red';    //настраиваем тень для help
                ctx.shadowOffsetX = -(ballH.posX-areaH.width/5)/10;
                ctx.shadowOffsetY = -(ballH.posY-areaH.height/1.2)/10;
                ctx.shadowBlur = 5;
                ctx.font = 'normal ' + clientRectH.height/2 + 'px' + ' Arial';  //текст для help
                ctx.fillText('HELP', areaH.width/5, areaH.height/1.2);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            },
            drowManual: function () {
                ctx.fillStyle = 'red';
                ctx.shadowColor = 'red';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 50;
                ctx.font = 'normal ' + clientRectH.height/2 + 'px' + ' Arial';
                ctx.fillText('HELP', areaH.width/5, areaH.height/1.2);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
        }
        function setBallPos (eo)  {
            eo=eo||window.event;
            clientRectH.posX = eo.clientX;
            clientRectH.posY = eo.clientY;
            //ограничиваем движение прямоугольника в арене
            if (clientRectH.posX-clientRectH.width/2 < 0) {
                clientRectH.posX = clientRectH.width/2;
            }
            if (clientRectH.posX+clientRectH.width/2 > areaH.width) {
                clientRectH.posX = areaH.width-clientRectH.width/2;
            }
            if (clientRectH.posY-clientRectH.height/2 < 0) {
                clientRectH.posY = clientRectH.height/2;
            }
            if (clientRectH.posY+clientRectH.height/2 > areaH.height) {
                clientRectH.posY = areaH.height-clientRectH.height/2;
            }
            areaH.status = 'manual';
            cvs.addEventListener('mouseleave', ()=>areaH.status = 'auto');
        }
        function tick() {
            //поле
            areaH.drow();
            //мяч
            ballH.drow();

            if (areaH.status === 'auto') {  //если управление авто
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
                //текст кнопок
                drowAutoText();
                //линии к мячу
                ballH.drowLines();
            } else {    //если управляет юзер
                ballH.updatePosition();
                //отскок мячика от лева прямоуг
                if (ballH.posX-ballH.r < clientRectH.posX-clientRectH.width/2) {
                    ballH.speedX = -ballH.speedX;
                    ballH.posX = clientRectH.posX-clientRectH.width/2 + ballH.r;
                }
                //отскок мячика от права прямоуг
                if (ballH.posX+ballH.r > clientRectH.posX+clientRectH.width/2) {
                    ballH.speedX = -ballH.speedX;
                    ballH.posX = clientRectH.posX+clientRectH.width/2-ballH.r;
                }
                //отскок мячика от низа прямоуг
                if (ballH.posY+ballH.r > clientRectH.posY+clientRectH.height/2) {
                    ballH.speedY = -ballH.speedY;
                    ballH.posY = clientRectH.posY+clientRectH.height/2-ballH.r;
                }
                //отскок мячика от верха прямоуг
                if (ballH.posY-ballH.r < clientRectH.posY-clientRectH.height/2) {
                    ballH.speedY = -ballH.speedY;
                    ballH.posY = clientRectH.posY-clientRectH.height/2+ballH.r;
                }
                //текст
                //если курсор на play
                if (clientRectH.posX-clientRectH.width/2 < areaH.width/3 &&
                    clientRectH.posX-clientRectH.width/2 > areaH.width/3-clientRectH.width/6 &&
                    clientRectH.posY+clientRectH.height/2 > areaH.height/3 &&
                    clientRectH.posY+clientRectH.height/2 < areaH.height/3+clientRectH.height/2) {
                    playTextH.drowManual();
                }
                //если курсор на scores
                 else if (clientRectH.posX-clientRectH.width/2 <= areaH.width/1.7 &&
                    clientRectH.posX-clientRectH.width/2 > areaH.width/1.7-clientRectH.width/3.3 &&
                    clientRectH.posY+clientRectH.height/2 > areaH.height/2 &&
                    clientRectH.posY+clientRectH.height/2 < areaH.height/2+clientRectH.height/1.3) {
                    scoresTextH.drowManual();
                }
                //если курсор на help
                else if (clientRectH.posX-clientRectH.width/2 < areaH.width/5 &&
                    clientRectH.posX-clientRectH.width/2 > areaH.width/5-clientRectH.width/2.8 &&
                    clientRectH.posY+clientRectH.height/2 > areaH.height/1.2 &&
                    clientRectH.posY+clientRectH.height/2 < areaH.height/1.2+clientRectH.height/1.6) {
                    helpTextH.drowManual();
                } else {
                    drowAutoText();
                }
                //прямоугольник и линии к нему
                clientRectH.drow();
            }
            function drowAutoText () {
                playTextH.drowAuto();
                scoresTextH.drowAuto();
                helpTextH.drowAuto();
            }
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }
    resizeCanvas();
})();



// (function() {
//     var cvs = document.getElementById('c1');
//     cvs.style.display = 'block';
//     var ctx = cvs.getContext('2d');
//     window.addEventListener('resize', resizeCanvas, false);
    
//     function resizeCanvas() {
//         cvs.addEventListener('mousemove', setBallPos, false);
//         cvs.width = window.innerWidth;
//         cvs.height = window.innerHeight;
//         var areaH = {
//             width: cvs.width,
//             height: cvs.height,
//             color: 'black',
//             status: 'auto'
//         }
//         var ballH = {
//             posX: areaH.width/2,
//             posY: areaH.height/2,
//             r: (areaH.width+areaH.height)/2/100,
//             color: 'white',
//             speedX: Math.random()*(2-(-2))+(-2),
//             speedY: Math.random()*(2-(-2))+(-2),
//             kick: 1.1,
//         }
//         var clientRectH = {
//             posX: 0,
//             posY: 0,
//             width: ballH.r*20,
//             height: ballH.r*10
//         }

//         function setBallPos (eo)  {
//             eo=eo||window.event;
//             clientRectH.posX = eo.clientX;
//             clientRectH.posY = eo.clientY;
//             //ограничиваем движение прямоугольника в арене
//             if (clientRectH.posX-clientRectH.width/2 < 0) {
//                 clientRectH.posX = clientRectH.width/2;
//             }
//             if (clientRectH.posX+clientRectH.width/2 > areaH.width) {
//                 clientRectH.posX = areaH.width-clientRectH.width/2;
//             }
//             if (clientRectH.posY-clientRectH.height/2 < 0) {
//                 clientRectH.posY = clientRectH.height/2;
//             }
//             if (clientRectH.posY+clientRectH.height/2 > areaH.height) {
//                 clientRectH.posY = areaH.height-clientRectH.height/2;
//             }
//             areaH.status = 'manual';
//             cvs.addEventListener('mouseleave', ()=>areaH.status = 'auto');
//         }
//         function tick() {
//             //ускоряем мяч если медленно
//             if (ballH.speedX<2 && ballH.speedX>=0) {
//                 ballH.speedX = 2;
//             }
//             if (ballH.speedX<0 && ballH.speedX>-2) {
//                 ballH.speedX = -2;
//             }
//             if (ballH.speedY<2 && ballH.speedY>=0) {
//                 ballH.speedY = 2;
//             }
//             if (ballH.speedY<0 && ballH.speedY>-2) {
//                 ballH.speedY = -2;
//             }
//             //поле
//             ctx.fillStyle = areaH.color;
//             ctx.fillRect(0,0,cvs.width,cvs.height);
//             //мяч
//             ctx.beginPath();
//             ctx.fillStyle = ballH.color;
//             ctx.shadowColor = 'white';
//             ctx.arc(ballH.posX, ballH.posY, ballH.r, 0, Math.PI*2, false);
//             ctx.closePath();
//             ctx.fill();

//             if (areaH.status === 'auto') {  //если управление авто
//                 ballH.posX += ballH.speedX;
//                 ballH.posY += ballH.speedY;
//                 //отскок мячика от лева
//                 if (ballH.posX-ballH.r < 0) {
//                     (ballH.kickCount > 0 && ballH.kickCount < 15) ? ballH.speedX = -ballH.speedX*ballH.kick : ballH.speedX = -ballH.speedX/ballH.kick;
//                     ballH.posX = ballH.r;
//                     (ballH.kickCount < 15) ? ballH.kickCount++ : ballH.kickCount = -ballH.kickCount;
//                 }
//                 //отскок мячика от права
//                 if (ballH.posX+ballH.r > areaH.width) {
//                     (ballH.kickCount > 0 && ballH.kickCount < 15) ? ballH.speedX = -ballH.speedX*ballH.kick : ballH.speedX = -ballH.speedX/ballH.kick;
//                     ballH.posX = areaH.width-ballH.r;
//                     (ballH.kickCount < 15) ? ballH.kickCount++ : ballH.kickCount = -ballH.kickCount;
//                 }
//                 //отскок мячика от низа
//                 if (ballH.posY+ballH.r > areaH.height) {
//                     (ballH.kickCount > 0 && ballH.kickCount < 15) ? ballH.speedY = -ballH.speedY*ballH.kick : ballH.speedY = -ballH.speedY/ballH.kick;
//                     ballH.posY = areaH.height-ballH.r;
//                 (ballH.kickCount < 15) ? ballH.kickCount++ : ballH.kickCount = -ballH.kickCount;
//                 }
//                 //отскок мячика от верха
//                 if (ballH.posY-ballH.r < 0) {
//                     (ballH.kickCount > 0 && ballH.kickCount < 15) ? ballH.speedY = -ballH.speedY*ballH.kick : ballH.speedY = -ballH.speedY/ballH.kick;
//                     ballH.posY = ballH.r;
//                     (ballH.kickCount < 15) ? ballH.kickCount++ : ballH.kickCount = -ballH.kickCount;
//                 }
//                 //текст кнопок
//                 drowText();
//                 //линии к шарику
//                 ctx.beginPath();
//                 ctx.strokeStyle = ballH.color;
//                 ctx.moveTo(0,0);
//                 ctx.lineTo(ballH.posX, ballH.posY);
//                 ctx.lineTo(areaH.width, 0);
//                 ctx.moveTo(areaH.width, areaH.height);
//                 ctx.lineTo(ballH.posX, ballH.posY);
//                 ctx.lineTo(0, areaH.height);
//                 ctx.closePath();
//                 ctx.stroke()
//             } else {    //если управляет юзер
//                 ballH.posX += ballH.speedX;
//                 ballH.posY += ballH.speedY;
//                 //отскок мячика от лева прямоуга
//                 if (ballH.posX-ballH.r < clientRectH.posX-clientRectH.width/2) {
//                     ballH.speedX = -ballH.speedX;
//                     ballH.posX = clientRectH.posX-clientRectH.width/2 + ballH.r;
//                 }
//                 //отскок мячика от права прямоуга
//                 if (ballH.posX+ballH.r > clientRectH.posX+clientRectH.width/2) {
//                     ballH.speedX = -ballH.speedX;
//                     ballH.posX = clientRectH.posX+clientRectH.width/2-ballH.r;
//                 }
//                 //отскок мячика от низа прямоуга
//                 if (ballH.posY+ballH.r > clientRectH.posY+clientRectH.height/2) {
//                     ballH.speedY = -ballH.speedY;
//                     ballH.posY = clientRectH.posY+clientRectH.height/2-ballH.r;
//                 }
//                 //отскок мячика от верха прямоуга
//                 if (ballH.posY-ballH.r < clientRectH.posY-clientRectH.height/2) {
//                     ballH.speedY = -ballH.speedY;
//                     ballH.posY = clientRectH.posY-clientRectH.height/2+ballH.r;
//                 }
//                 //текст
//                 //если курсор на play
//                 if (clientRectH.posX-clientRectH.width/2 < areaH.width/3 &&
//                     clientRectH.posX-clientRectH.width/2 > areaH.width/3-clientRectH.width/6 &&
//                     clientRectH.posY+clientRectH.height/2 > areaH.height/3 &&
//                     clientRectH.posY+clientRectH.height/2 < areaH.height/3+clientRectH.height/2) {
//                     ctx.fillStyle = 'green';
//                     ctx.shadowColor = 'green';
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 25;
//                     ctx.font = 'normal ' + clientRectH.height/1.5 + 'px' + ' Arial';
//                     ctx.fillText('PLAY', areaH.width/3, areaH.height/3);
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 0;
//                     window.addEventListener('click', playGame);
//                     window.removeEventListener('click', showScores);
//                     window.removeEventListener('click', showHelp);
//                 }
//                 //если курсор на scores
//                  else if (clientRectH.posX-clientRectH.width/2 <= areaH.width/1.7 &&
//                     clientRectH.posX-clientRectH.width/2 > areaH.width/1.7-clientRectH.width/3.3 &&
//                     clientRectH.posY+clientRectH.height/2 > areaH.height/2 &&
//                     clientRectH.posY+clientRectH.height/2 < areaH.height/2+clientRectH.height/1.3) {
//                     ctx.fillStyle = 'blue';
//                     ctx.shadowColor = 'blue';
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 50;
//                     ctx.font = 'normal ' + clientRectH.height/3 + 'px' + ' Arial';
//                     ctx.fillText('SCORES', areaH.width/1.7, areaH.height/2);
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 0;
//                     window.addEventListener('click', showScores);
//                     window.removeEventListener('click', playGame);
//                     window.removeEventListener('click', showHelp);
//                 }
//                 //если курсор на help
//                 else if (clientRectH.posX-clientRectH.width/2 < areaH.width/5 &&
//                     clientRectH.posX-clientRectH.width/2 > areaH.width/5-clientRectH.width/2.8 &&
//                     clientRectH.posY+clientRectH.height/2 > areaH.height/1.2 &&
//                     clientRectH.posY+clientRectH.height/2 < areaH.height/1.2+clientRectH.height/1.6) {
//                     ctx.fillStyle = 'red';
//                     ctx.shadowColor = 'red';
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 50;
//                     ctx.font = 'normal ' + clientRectH.height/2 + 'px' + ' Arial';
//                     ctx.fillText('HELP', areaH.width/5, areaH.height/1.2);
//                     ctx.shadowOffsetX = 0;
//                     ctx.shadowOffsetY = 0;
//                     ctx.shadowBlur = 0;
//                     window.addEventListener('click', showHelp);
//                     window.removeEventListener('click', showScores);
//                     window.removeEventListener('click', playGame);
//                 } else {
//                     drowText();
//                 }
//                 //прямоугольник и линии к нему
//                 ctx.strokeRect(clientRectH.posX-clientRectH.width/2, clientRectH.posY-clientRectH.height/2, clientRectH.width, clientRectH.height)
//                 ctx.beginPath();
//                 ctx.moveTo(0,0);
//                 ctx.lineTo(clientRectH.posX-clientRectH.width/2, clientRectH.posY-clientRectH.height/2);
//                 ctx.moveTo(clientRectH.posX+clientRectH.width/2,clientRectH.posY-clientRectH.height/2);
//                 ctx.lineTo(areaH.width, 0);
//                 ctx.moveTo(clientRectH.posX-clientRectH.width/2, clientRectH.posY+clientRectH.height/2);
//                 ctx.lineTo(0, areaH.height);
//                 ctx.moveTo(clientRectH.posX+clientRectH.width/2, clientRectH.posY+clientRectH.height/2);
//                 ctx.lineTo(areaH.width, areaH.height);
//                 ctx.closePath();
//                 ctx.stroke()
//             }
//             function drowText () {
//                 ctx.fillStyle = 'white';
//                 ctx.shadowColor = 'green';  //настраиваем тень для play
//                 ctx.shadowOffsetX = -(ballH.posX-areaH.width/3)/10;
//                 ctx.shadowOffsetY = -(ballH.posY-areaH.height/3)/10;
//                 ctx.shadowBlur = 5;
//                 ctx.font = 'normal ' + clientRectH.height/1.5 + 'px' + ' Arial';    //текст для play
//                 ctx.fillText('PLAY', areaH.width/3, areaH.height/3);

//                 ctx.shadowColor = 'blue';   //настраиваем тень для scores
//                 ctx.shadowOffsetX = -(ballH.posX-areaH.width/1.7)/10;
//                 ctx.shadowOffsetY = -(ballH.posY-areaH.height/2)/10;
//                 ctx.font = 'normal ' + clientRectH.height/3 + 'px' + ' Arial';  //текст для scores
//                 ctx.fillText('SCORES', areaH.width/1.7, areaH.height/2);

//                 ctx.shadowColor = 'red';    //настраиваем тень для help
//                 ctx.shadowOffsetX = -(ballH.posX-areaH.width/5)/10;
//                 ctx.shadowOffsetY = -(ballH.posY-areaH.height/1.2)/10;
//                 ctx.font = 'normal ' + clientRectH.height/2 + 'px' + ' Arial';  //текст для help
//                 ctx.fillText('HELP', areaH.width/5, areaH.height/1.2);

//                 ctx.shadowOffsetX = 0;
//                 ctx.shadowOffsetY = 0;
//                 ctx.shadowBlur = 0;
//             }
//             requestAnimationFrame(tick);
//         }
//         requestAnimationFrame(tick);
//         function playGame() {
//             // clickSoundPlay();
//             console.log('+++')
//         }
//         function showScores() {
//             // clickSoundPlay();
//         }
//         function showHelp() {
//             // clickSoundPlay();
//         }
//     }
//     resizeCanvas();
// })();


//if (navigator.vibrate) - если вибрация поддерживается в браузере (на андроид!) H70b Vibration API.
//сериализация - перевод данных в формат json, десериализация - наоборот.
//MVC - I.65b(пассивный), I.65c(активный)
//Object.defineProperty I.67 a,b,c перехват изменений свойств хеша(напричер, чтобы мочь СРАЗУ обновить представление)