function setup(){
    createCanvas(800,500, WEBGL);
    fArial = loadFont('/fonts/arial.ttf')
    textFont(fArial);
    im = loadImage("imgs/k.png");
}


function keyPressed(){
    if(keyCode == 87){
        tr.x += -sin(theta)*sensitivity;
        tr.z += -cos(theta)*sensitivity;
        console.log('w')
    } else if (keyCode == 83){
        tr.x += sin(theta)*sensitivity;
        tr.z += cos(theta)*sensitivity;
    }
}


mousePrev = {
    x:0,
    y:0
}

theta = 0;

sensitivity = 30;
tr = {
    x:0,
    y:0,
    z:0
}

let im;
c = 0

function draw(){
    background(127);
    fill(255,0,0);
    // orbitControl();
    theta += (mouseX - mousePrev.x)/width*360;
    text(theta, 50,50)
    mousePrev.x = mouseX;
    push();
        translate(tr.x, tr.y, tr.z);
        circle(0,0,30);
        // image(im,30,30);
        // texture(im);
        rotateY(c);
        c+=.1;
        box(90);
    pop();

    camera(
        0,0,0,
        sin(theta),0,cos(theta),
        0,-1,0
    ); 
}