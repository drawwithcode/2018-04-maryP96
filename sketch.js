function preload(){
  // put preload code here
}

var balls = [];

var colorList1 = ['#FF007F',
                 '#DE2182'];
var colorList2 = ['#892981',
                  '#431C53'];
function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  var ballNumber = 100;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(random(0,width),random(0,height),10);
    myBall.speed1 = random(-3,3);
    myBall.speed2 = random(-3, 3);

    balls.push(myBall);
  }
}
function mousePressed() {
  for (var j = 0; j < balls.length; j++) {

    balls[j].click();
  }
}

function draw() {

  background('#FFDFD3');
  fill('#CC66FF');
  textSize(32);
 text('click to delete',windowWidth/2-50, height/8*7);
 textSize(90);


  for (var j = 0; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();
    balls[j].over(mouseX, mouseY);
  }
}

function Ball(_x, _y, _diameter) {

  this.size = random(20,60);
  this.x = _x;
  this.y = _y;
  this.color = 'red';
  this.speed1 = 1;
  this.speed2 = -2;


  var yDir = 1;
  var xDir = 1;

  this.move = function() {
    //velocità
    this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
    //cambio direzione quando tocca i bordi
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }
  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  //cambia colore
  this.over = function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.size/2) {
    this.color = color(random(colorList2))
  } else{
    this.color= color(random(colorList1))
  }
}

//eliminare le bolle
this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.size/2) {
        this.size = 0;
      }
    }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}
