/*****************************  Start And Boxs  ******************************/

/******mdoa*****/
/** moda2 */
/*coment 2 */
var Single = document.querySelector('#Single');
var Multi = document.querySelector('#Multi');

var ScoreBox = document.querySelector('#scorebox');
var Box = document.querySelector('#box');

var StartBox = document.querySelector('#Start');
var EndBox = document.querySelector('#End');

/*****************************  Game  ******************************/

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var ball = document.querySelector("#ball");
var scorespan = document.querySelector("#score");
var levelspan = document.querySelector("#level");

var scorecon = document.querySelector("#scorecon");
var levelcon = document.querySelector("#levelcon");

var pause = true;

var speedinterval = 10;
// var speedmovement = 2;
var speedmovementx = 2;
var speedmovementy = 2.5;
var speedplayer = 20;

var score = 0;
var level = 1;

//
var move = false;
var movetr = false;
var movetl = false;
var movebr = false;
var movebl = false;

//Set Position of element (player1 - player2 - ball)
var p1y;
var p2y;
var x;
var y;

//player1
var upstate = false;
var downstate = false;

var upstate2 =false;
var downstate2 = false;


//Set Interval Of ball
var ballinterval;

//Set Interval Of Player1
var up;
var down;

//Set Interval Of Player2
var up2;
var down2;


//Statue Of Play (Single || Multi)
var singleplay = false;
var multiplay = false;

//the same befor
//Boolean(move)=false;

//var b =function(){};

function typemovement(){
    if( ( (y>=p1y) && (y<=(p1y+20)) ) || ( (y>=(p1y+80)) && (y<=(p1y+100)) ) ){
        speedmovementy = 2.5;                     
        }
        else if( ( (y>=(p1y+20)) && (y<=(p1y+35)) ) || ( (y>=(p1y+65)) && (y<=(p1y+80)) ) ){
            speedmovementy = 2;                     
            }
        else if( ( (y>=(p1y+35)) && (y<=(p1y+45)) ) || ( (y>=(p1y+55)) && (y<=(p1y+65)) ) ){
        speedmovementy = 1.5;                     
        }
        else if(( (y>=(p1y+45)) && (y<=(p1y+55)) )){
            
            speedmovementy = 1; 
        }
}

function restore() {
    clearInterval(ballinterval);



    /* Congratulations */
    scorecon.innerText=score;
    levelcon.innerText=level
    /**********************/


    ball.style.top = "0px";
    ball.style.left = "10px";

    player1.style.top = "0px";


    player2.style.top = "0px";

    score = parseInt("0");
    scorespan.innerText = score;


    levelspan.innerText = "1";
    levelspan.style.color = "#44b910";
    levelspan.style.backgroundColor = "#000000";
    // levelspan.style.backgroundcolor = "rgb(0, 0, 0);";

    // speedmovement = 2;
    speedmovementx = 2;
    speedmovementy = 2.5;

    level=1;

    StartBox.style.display="none";
    EndBox.style.display="block";
    ScoreBox.style.display="none";
    Box.style.display="none";
}

function scorechange() {
    score = score + parseInt("1");
    scorespan.innerText = score;


    if (score == 5) {
        level = level + parseInt("1");
        levelspan.innerText = level;
        levelspan.style.color = "#ffeb3b";

        speedmovementx = 3;
        speedmovementy = 2.5;
    } else if (score == 10) {
        level = level + parseInt("1");
        levelspan.innerText = level;
        levelspan.style.color = "#ffc107";

        speedmovementx = 4;
        speedmovementy = 2.5;
    } else if (score == 15) {
        level = level + parseInt("1");
        levelspan.innerText = level;
        levelspan.style.color = "#ff5722";

        speedmovementx = 5;
        speedmovementy = 2.5;
    } else if (score == 20) {
        level = level + parseInt("1");
        levelspan.innerText = level;
        
        levelspan.style.backgroundColor = "#ff5722";
        levelspan.style.color = "black";

        speedmovementx = 6;
        speedmovementy = 2.5;
    }
}

//function of movement
function addx() {
    //debugger;
    x = ball.offsetLeft;
    x = x + parseInt(speedmovementx);
    ball.style.left = x + "px";

}
function minx() {
    x = ball.offsetLeft;
    x = x - parseInt(speedmovementx);
    ball.style.left = x + "px";
}
function addy() {
    y = ball.offsetTop;
    y = y + parseInt(speedmovementy);
    ball.style.top = y + "px";

}
function miny() {
    y = ball.offsetTop;
    y = y - parseInt(speedmovementy);
    ball.style.top = y + "px";
}

//function of start
function start() {
    
    ballinterval = setInterval(function () {
        
        //condition of movement
        if (movebr == true) {
            //bottom && right
            addx();

            addy();



            /////////////// of player 2
            //// game over 
            if ((x >= 570) && ((y < p2y) || (y > (p2y + 100)))) {


                movebr = false;
                move = false;

                restore();

            }
            //Score Plus 
             else if ((x >= 570) && ((y >= p2y) || (y <= (p2y + 100)))) {


                //for Method Of Movment
                typemovement();
                

                scorechange();



                movebr = false;
                movebl = true;


            } else if (y >= 380) {
                movebr = false;
                movetr = true;
            } else if (x >= 570) {
                movebr = false;
                movebl = true;
            }
        } else if (movetr == true) {
            //top && right

            addx();

            miny();


            ///////////////// of player 2
            p1y = player1.offsetTop;
            p2y = player2.offsetTop;

            // Game Over /////////////////////////////
            if ((x >= 570) && ((y < p2y) || (y > (p2y + 100)))) {


                movetr = false;
                move = false;

                restore()
                




            }//Score Plus 
            else if ((x >= 570) && ((y >= p2y) || (y <= (p2y + 100)))) {

                //debugger;
                
                
                //for Method Of Movment
                typemovement();


                // speedmovementy = 1.5;
                scorechange();

                movetr = false;
                movetl = true;

            } else if (x >= 570) {
                //debugger;
                movetr = false;
                movetl = true;
            } else if (y <= 0) {
                movetr = false;
                movebr = true;
            }
        } else if (movetl == true) {
            //top && left
            //moda1
            minx();

            miny();

            p1y = player1.offsetTop;
            p2y = player2.offsetTop;

            // Game Over /////////////////////////////
            if ((x <= 10) && ((y < p1y) || (y > (p1y + 100)))) {


                movetl = false;
                move = false;

                restore()
                




            }//Score Plus 
            else if ((x <= 10) && ((y >= p1y) || (y <= (p1y + 100)))) {

                //debugger;
                
                
                //for Method Of Movment
                typemovement();


                // speedmovementy = 1.5;
                scorechange();

                movetl = false;
                movetr = true;

            } else if (y <= 0) {
                movetl = false;
                movebl = true;
            }
            else if (x <= 10) {
                movetl = false;
                movetr = true;
            }


        } else if (movebl == true) {
            //bottom && left
            minx();

            addy();

            if ((x <= 10) && ((y < p1y) || (y > (p1y + 100)))) {


                movebl = false;
                move = false;

                restore();

            }
            //Score Plus 
             else if ((x <= 10) && ((y >= p1y) || (y <= (p1y + 100)))) {


                //for Method Of Movment
                typemovement();
                

                scorechange();



                movebl = false;
                movebr = true;


            } else if (x <= 10) {
                movebl = false;
                movebr = true;
            } else if (y >= 380) {
                movebl = false;
                movetl = true;
            }

        }
        if ((move == true) && (multiplay == false)) {
            player2.style.top = (y - 50) + "px";
        }

    }, speedinterval);
}
addEventListener("keyup", function (e) {

    //up
           // player 2            // player 1
    if ((e.keyCode == 104) || (e.keyCode == 87)) {
        //debugger;
        
        //single play
        if(singleplay == true){
            //default player 1
            upstate = false;
            this.clearInterval(up);
        } // multui play
        else if(singleplay == false){
            //player 1
            if(e.keyCode == 87){
                upstate = false;
                this.clearInterval(up);
            }//player 2
            else if(e.keyCode == 104){
                upstate2 = false;
                this.clearInterval(up2);
            }

        }
    }
        //down
        //}             // player 2       //player 1    
     else if ((e.keyCode == 101) || (e.keyCode == 83)) {

        
         //single play
         if(singleplay == true){
            //default player 1
            downstate = false;
            this.clearInterval(down);

        } // multui play
        else if(singleplay == false){
            //player 1
            if(e.keyCode == 83){
                downstate = false;
                this.clearInterval(down);
            }//player 2
            else if(e.keyCode == 101){
                downstate2 = false;
                this.clearInterval(down2); 
            }
        }
    }

})
addEventListener("keypress", function (e) {


    /*Space*/
    if (e.keyCode == 32) {
        //debugger;
        if (move == false) {
            move = true;
            movebr = true;

            pause = false;
            start();
        }
    }/*Pause*/
    else if(e.keyCode == 112){
        
        if(pause == false){
            // move = false;
            pause = true;
            clearInterval(ballinterval);
        }
    }/*Resume*/
    else if(e.keyCode == 114){

        
        if((pause == true) && (move == true)){
            // move = true;
            pause = false;
            start();
        }
    }
    ////// up
    else if ((e.keyCode == 56) || (e.keyCode == 119)) {
        //else if (e.keyCode == 104) {
        //up
        


        //// case in single play
        if(singleplay ==true){
            if (upstate == false) {
                downstate = false;
                this.clearInterval(down);
    
    
    
    
                upstate = true;
                up = setInterval(function () {
                    p1y = player1.offsetTop;
                    //if()
                    if (!(p1y < (1)))
                        p1y = p1y - 6;
                    player1.style.top = p1y + "px";
                }, speedplayer)
            }
        } // case in multi play
         else if(singleplay == false){
            
            //player 1 
            if(e.keyCode == 119){
                if (upstate == false) {
                    downstate = false;
                    this.clearInterval(down);
        
        
        
        
                    upstate = true;
                    up = setInterval(function () {
                        p1y = player1.offsetTop;
                        //if()
                        if (!(p1y < (1)))
                            p1y = p1y - 6;
                        player1.style.top = p1y + "px";
                    }, speedplayer)
                }
            }// player 2
            else if(e.keyCode == 56){
                if (upstate2 == false) {
                    downstate2 = false;
                    this.clearInterval(down2);
        
        
        
        
                    upstate2 = true;
                    up2 = setInterval(function () {
                        p2y = player2.offsetTop;
                        //if()
                        if (!(p2y < (1)))
                            p2y = p2y - 6;
                        player2.style.top = p2y + "px";
                    }, speedplayer)
                }  
            }
        }
        


    }////// down
     else if ((e.keyCode == 53) || (e.keyCode == 115)) {
         
        //} else if (e.keyCode == 101) {
        //down
        

        //in single play 
        if(singleplay == true){
            if (downstate == false) {

                upstate = false;
                this.clearInterval(up);
    
                downstate = true;
                down = setInterval(function () {
                    p1y = player1.offsetTop;
                    //if()
                    if (!(p1y > (400 - 101)))
                        p1y = p1y + 6;
                    player1.style.top = p1y + "px";
                }, speedplayer)
            }
        }//* multi play
        else if(singleplay == false){
            // player 1
            if(e.keyCode == 115){
                if (downstate == false) {

                    upstate = false;
                    this.clearInterval(up);
        
                    downstate = true;
                    down = setInterval(function () {
                        p1y = player1.offsetTop;
                        //if()
                        if (!(p1y > (400 - 101)))
                            p1y = p1y + 6;
                        player1.style.top = p1y + "px";
                    }, speedplayer)
                }
            }//player 2
            else if(e.keyCode == 53){
                
                if (downstate2 == false) {

                    upstate2 = false;
                    this.clearInterval(up2);
        
                    downstate2 = true;
                    down2 = setInterval(function () {
                        p2y = player2.offsetTop;
                        //if()
                        if (!(p2y > (400 - 101)))
                            p2y = p2y + 6;
                        player2.style.top = p2y + "px";
                    }, speedplayer)
                }
            }

        }

    }
})


var imgs = document.querySelector("#imgs");
imgs.addEventListener("click",function(e){
    ////debugger;

    if(e.target.id == "ball1"){
        ball.style.backgroundImage="url('../pics/2.png')";
    }else if(e.target.id == "ball2"){
        ball.style.backgroundImage="url('../pics/1.png')";
    }
})


/*****************************  Start  ******************************/
Single.addEventListener('click',function(){
    StartBox.style.display="none";
    ScoreBox.style.display="block";
    Box.style.display="block";
    singleplay=true;
    multiplay=false;


})

Multi.addEventListener('click',function(){
    StartBox.style.display="none";
    ScoreBox.style.display="block";
    Box.style.display="block";
    singleplay=false;
    multiplay=true;


})