var myGamePiece;
var myObstacles = [];
var myBackground;
var myScore;


function startGame() {

    myGamePiece = new component(30, 30, "yellow_wasp.png", 10, 120, "image");
    myBackground = new component(656, 270, "beehives0.png", 0, 0, "image");
    myObstacle = new component(10, 200, "blue", 300, 120);
    myUpBtn = new component(30, 30, "arrowUp.png", 50, 10, "image");
    myDownBtn = new component(30, 30, "arrowDown.png", 50, 70, "image");
    myLeftBtn = new component(30, 30, "arrowLeft.png", 20, 40, "image");
    myRightBtn = new component(30, 30, "arrowRight.png", 80, 40, "image");
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();


}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}


function component(width, height, color, x, y, type) {
    this.type = type;
    if (this.type == "image" || this.type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image,
                this.x, this.y, this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image,
                    this.x + this.width, this.y, this.width, this.height);
            }
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.clicked = function () {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y)
            || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false;
        }
        return crash;


    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
}



function updateGameArea() {
    var x, y;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myBackground.speedX = -1;


    myBackground.update();
    myBackground.newPos();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 100;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, "blue", x, 0));
        myObstacles.push(new component(10, x - height - gap, "blue", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    // myObstacle.x -= 1;
    // myObstacle.update();
    // myGamePiece.speedX = 0;
    // myGamePiece.speedY = 0;
    // if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1;}
    // if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    // 	if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    // 	if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    // myGamePiece.newPos();
    if (myGameArea.x && myGameArea.y) {
        if (myUpBtn.clicked()) {
            myGamePiece.y -= 1;
        }
        if (myDownBtn.clicked()) {
            myGamePiece.y += 1;
            console.log("I moved down");
        }
        if (myLeftBtn.clicked()) {
            myGamePiece.x += -1;
        }
        if (myRightBtn.clicked()) {
            myGamePiece.x += 1;
        }
    }

    myUpBtn.update();
    myDownBtn.update();
    myLeftBtn.update();
    myRightBtn.update();
    myGamePiece.update();


}


function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
