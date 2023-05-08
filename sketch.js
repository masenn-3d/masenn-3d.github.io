console.log('help')
import('./p5.js').then(setup)


function setup(){
    console.log('setup')
    createCanvas(1300,500, WEBGL);
    fArial = loadFont('/fonts/arial.ttf')
    textFont(fArial);
    im = loadImage("imgs/k.png");
    ry = loadImage('imgs/haram.png')
    city = loadImage('imgs/index.jpg');
    ryan = loadImage('imgs/ryan.png');
    frameRate(50);
}

//            w      s      a      d      UP     DOWN
const keys = [false, false, false, false, false, false];

function keyPressed(){
    if(keyCode == 87){
        //w
        keys[0] = true;
    } else if (keyCode == 83){
        //s
        keys[1] = true;
    }else if (keyCode == 65){
        //a
        keys[2] = true;
    }else if (keyCode == 68){
        //d
        keys[3] = true;
    } else if(keyCode == 38){
        //UP
        keys[4] = true;
    } else if(keyCode == 40){
        //DOWN
        keys[5] = true;
    }
}

function keyReleased(){
    if(keyCode == 87){
        //w
        keys[0] = false;
    } else if (keyCode == 83){
        //s
        keys[1] = false;
    }else if (keyCode == 65){
        //a
        keys[2] = false;
    }else if (keyCode == 68){
        //d
        console.log('d');
        keys[3] = false;
    } else if(keyCode == 38){
        //UP
        keys[4] = false;
    } else if(keyCode == 40){
        //DOWN
        keys[5] = false;
    }
}


mousePrev = {
    x:0,
    y:0
}

theta = 0;
phi = 0; 

sensitivity = 15;
tr = {
    x:0,
    y:0,
    z:0
}

let im;
let ry;
let city;
let ryan;
c = 0;


function draw(){
    background(random(0,255), random(0,255), random(0,255));

    for(let i = 0; i < keys.length; i++){
        if(keys[i]){
            switch (i){

                case 0:
                    //w
                    tr.x += -sin(theta)*sensitivity;
                    tr.z += -cos(theta)*sensitivity;
                    break;
                case 1: 
                    tr.x += sin(theta)*sensitivity;
                    tr.z += cos(theta)*sensitivity;
                    break;
                case 2: 
                    tr.x += -sin(theta-PI/2)*sensitivity;
                    tr.z += -cos(theta-PI/2)*sensitivity;
                    break;
                case 3: 
                    tr.x += sin(theta-PI/2)*sensitivity;
                    tr.z += cos(theta-PI/2)*sensitivity;
                    break;
                case 4:
                    tr.y -= sensitivity;
                    break;
                case 5: 
                    tr.y += sensitivity;
                    break;
            }
        }
    }

    fill(255,0,0);

    theta += (mouseX - mousePrev.x)*360/width*PI/180;
    mousePrev.x = mouseX;

    phi += (mouseY - mousePrev.y)*180/height*PI/180;
    mousePrev.y = mouseY;

    noStroke();
    push();
        translate(tr.x, tr.y, tr.z);
        // circle(0,0,30);
        // image(im,30,30);
        push();
            textureMode(IMAGE);
            texture(im);
            rotateY(c);
            c+=.1;
            box(300);
            translate(160,500,0);
            box(300,1000,300);
            translate(160,-500,0);
            box(300);
        pop();
        push();
            translate(1000,0,0);
            textureMode(NORMAL);
            texture(ry);
            rotateZ(PI);
            beginShape();
                vertex(0,0,0,0,0);
                vertex(0,1000,0,0,1);
                vertex(1000,1000,0, 1,1);
                vertex(1000,0, 1,1,0);
            endShape();
        pop();
        push();
            translate(-300,0,0);
            textureMode(NORMAL);
            texture(city);
            rotateZ(PI);
            beginShape();
                vertex(0,0,0,0,0);
                vertex(0,1000,0,0,1);
                vertex(1000,1000,0, 1,1);
                vertex(1000,0, 1,1,0);
            endShape();
            translate(0,1000,0);
            texture(ryan)
            beginShape();
                vertex(0,0,0,0,0);
                vertex(0,1000,0,0,1);
                vertex(1000,1000,0, 1,1);
                vertex(1000,0, 1,1,0);
            endShape();
        pop();
    pop();
    

    camera(
        0,0,0,
        sin(theta),sin(phi),cos(theta),
        0,-1,0
    ); 
    // delay(.5);
}

