let bulbon;
let bulboff;

let brightness = 0; //0=off, 1=on

//on start
function setup() {
  createCanvas(400, 400);
  
  bulbon = loadImage("images/bulb_on.png");
  bulboff = loadImage("images/bulb_off.png");
}


function draw() {
  background(220);
  
  imageMode(CENTER);
  if(brightness == 1){
  //show bulb on
  image(bulbon,width/2,height/2,300,300);
  }else{
  image(bulboff,width/2,height/2,300,300);
  }
  
}


function mousePressed(){
   brightness = 1;
   print("the bulb is on!");
}

function mouseReleased(){
  brightness = 0;
  print("the bulb is off!");
}
