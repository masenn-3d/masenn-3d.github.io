function setup(){
    createCanvas(800,500, WEBGL);
    fArial = loadFont('/fonts/arial.ttf')
    textFont(fArial);
    im = loadImage("imgs/k.png");
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
c = 0;


function draw(){
    background(90);

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
                    tr.x += -sin(theta-PI/2)*sensitivity;
                    tr.z += -cos(theta-PI/2)*sensitivity;
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

    stroke(255,255,255);
    push();
        translate(tr.x, tr.y, tr.z);
        // circle(0,0,30);
        // image(im,30,30);
        texture(im);
        // rotateY(c);
        // c+=.1;
        box(90);
    pop();

    camera(
        0,0,0,
        sin(theta),sin(phi),cos(theta),
        0,-1,0
    ); 
}