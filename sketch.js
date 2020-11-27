var hr, min, sec;
var hrAng, minAng, secAng;

function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(300, 300);
  rotate( - 90);

  hr = hour();
  min = minute();
  sec = second();

  hrAng = map(hr % 12, 0, 12, 0, 360);
  minAng = map(min, 0, 60, 0, 360);
  secAng = map(sec, 0, 60, 0, 360);

  //hours hand
  push();
  rotate(hrAng);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  //minutes hand
  push();
  rotate(minAng);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);
  pop();

  //seconds hand
  push();
  rotate(secAng);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 110, 0);
  pop();

  //arcs
  strokeWeight(7);
  noFill();

  stroke(0,0, 255);
  arc(0, 0, 300, 300, 0, hrAng);

  stroke(0, 255, 0);
  arc(0, 0, 350, 350, 0, minAng);

  stroke(255,0, 0);
  arc(0, 0, 400, 400, 0, secAng);
}