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
    jah = loadImage('imgs/images.jpg');
    reg = loadImage('imgs/sincity.jpg');
    frameRate(11);
    // song = loadSound('./sound.mp3');
    // song.play();
    // soundFormats('mp3');
    var audio = new Audio('sound.mp3');
    audio.play();
}

function mouseClicked(){
    requestPointerLock();


}

let audio;

//            w      s      a      d      UP     DOWN   SPACE
const keys = [false, false, false, false, false, false, false];

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
    }else if(keyCode == 32){
        //DOWN
        keys[6] = true;
    } else if(keyCode ==80){
        rnd = !rnd;
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
    }else if(keyCode == 32){
        //DOWN
        keys[6] = false;
    }
}


mousePrev = {
    x:0,
    y:0
}

theta = 0;
phi = 0; 

sensitivity = 9;
tr = {
    x:0,
    y:0,
    z:0
}

let im;
let ry;
let city;
let ryan;
let jah;
let reg; 

let rnd = false;

rot = 0; 
c = 0;


function draw(){
    if(rnd){
        frameRate(random(1,60));
    } else {
        frameRate(50);
    }
    // background(random(0,255), random(0,255), random(0,255));
    // background(127);
    // background(0);
    if(tr.z < -1057){
        background(random(0,255), random(0,255), random(0,255));
    } else { 
        background(0,0,0);

    }
    for(let i = 0; i < keys.length; i++){
        if(keys[i]){
            switch (i){

                case 0:
                    //w
                    tr.x += -sin(theta)*sensitivity;
                    tr.z += -cos(theta)*sensitivity;
                    // tr.y += sin(c);
                    c+=.9;
                    break;
                case 1: 
                    tr.x += sin(theta)*sensitivity;
                    tr.z += cos(theta)*sensitivity;
                    // tr.y += sin(c);
                    c+=.9;
                    break;
                case 2: 
                    tr.x += -sin(theta-PI/2)*sensitivity;
                    tr.z += -cos(theta-PI/2)*sensitivity;
                    c+=.9;
                    break;
                case 3: 
                    tr.x += sin(theta-PI/2)*sensitivity;
                    tr.z += cos(theta-PI/2)*sensitivity;
                    c+=.9;
                    break;
                case 4:
                    tr.y += sensitivity;
                    c+=.001;
                    break;
                case 5: 
                    tr.y -= sensitivity;
                    c+=.001
                    break;
                case 6:
                    tr.y+=50;
                default:
                    c = 0; 
            }
        }
    }
    // ambientLight(30,30,30);

    // fill(0,127,0);

    // theta += (mouseX - mousePrev.x)*360/width*PI/180;
    // mousePrev.x = mouseX;
    theta += movedX*360/width*PI/180;
    phi += -movedY*180/height*PI/180;
    if(tr.y > 7){
        tr.y-=7;
    } else if(tr.y <= 7){
        tr.y = 0; 
    }
    testFunction();

    // noStroke();
    // push();
    //     pointLight(0,255,0, 500,10,2000);

    //     translate(tr.x, tr.y, tr.z);
    //     // circle(0,0,30);
    //     // image(im,30,30);
    //     planee(100000);
    //     push();
    //         translate(0,150,0);
    //         // pointLight(255,255,255,0,0,0);
    //         textureMode(IMAGE);
    //         texture(im);
    //         rotateY(c);
    //         c+=.1;
    //         box(300);
    //         translate(160,500,0);
    //         box(300,1000,300);
    //         translate(160,-500,0);
    //         box(300);
    //     pop();
    //     push();
    //         pointLight(255,0,0, 150,30,0);
    //     pop();
    //     push();
    //         translate(1000,0,0);
    //         textureMode(NORMAL);
    //         texture(ry);
    //         rotateZ(PI);
    //         beginShape();
    //             vertex(0,0,0,0,0);
    //             vertex(0,1000,0,0,1);
    //             vertex(1000,1000,0, 1,1);
    //             vertex(1000,0, 1,1,0);
    //         endShape();
    //     pop();
    //     push();
    //         translate(-300,0,0);
    //         textureMode(NORMAL);
    //         texture(city);
    //         rotateZ(PI);
    //         beginShape();
    //             vertex(0,0,0,0,0);
    //             vertex(0,1000,0,0,1);
    //             vertex(1000,1000,0, 1,1);
    //             vertex(1000,0, 1,1,0);
    //         endShape();
    //         translate(0,1000,0);
    //         texture(ryan)
    //         beginShape();
    //             vertex(0,0,0,0,0);
    //             vertex(0,1000,0,0,1);
    //             vertex(1000,1000,0, 1,1);
    //             vertex(1000,0, 1,1,0);
    //         endShape();
    //     pop();
    // pop();
    

    // camera(
    //     //eye pos
    //     0,0,0,
    //     //look at point
    //     sin(theta),sin(phi),cos(theta),
    //     0,-1,0
    // ); 
    // delay(.5);
}


function planee(planeSize){
    push();
        translate(-planeSize/2, 0, -planeSize/2);
        beginShape();
            vertex(0,0,0);
            vertex(0,0,planeSize);
            vertex(planeSize, 0, planeSize);
            vertex(planeSize, 0, 0);
        endShape();
    pop();
}

function wall(width, height){
    push();
        beginShape();
            vertex(0,0,0);
            vertex(0,0,width);
            vertex(0,height, width);
            vertex(0,height, 0);
        endShape();
    pop();
}

function wallZ(width, height){
    push();
        beginShape();
            vertex(0,0,0);
            vertex(width,0,0);
            vertex(width,height, 0);
            vertex(0,height, 0);
        endShape();
    pop();
}

function ceiling(width, length){
    beginShape();
        vertex(0,0,0);
        vertex(width,0,0);
        vertex(width,0, length);
        vertex(0,0, length);
    endShape();
}

function imageC(planeSize, img){
    push();
        textureMode(NORMAL);
        texture(img);
        beginShape();
            translate(0, planeSize, 0);
            rotateZ(PI);
            vertex(0,0,0,0,0);
            vertex(0,planeSize,0,0,1);
            vertex(planeSize, planeSize, 0,1,1);
            vertex(planeSize, 0, 0,1,0);
        endShape();
    pop();
}

function imageZ(planeSize, img){
    push();
        textureMode(NORMAL);
        texture(img);
        beginShape();
            translate(0, planeSize, 0);
            rotateZ(PI);
            vertex(0,0,0,0,0);
            vertex(0,planeSize,0,0,1);
            vertex(0, planeSize, planeSize,1,1);
            vertex(0, 0, planeSize,1,0);
        endShape();
    pop();
}



function testFunction(){
    // ambientLight(127,127,127);
    // directionalLight(255, 90, 0, -1, 1, 0);
    // directionalLight(30, 90, 19, 1, 1, 0);

    // specularMaterial(255);
    // pointLight(90,90,90,0,0,0);
    translate(0,-50,-1000);

    push();
        // pointLight(255,0,0,0,0,-1000);
        //CARPET
        // ambientMaterial(0,255,0);
        translate(0,1,0);
        rotateX(PI/2);
        fill(255,0,0);
        rect(0,0,70,1000);

    pop();
    push();
        fill(0,0,0);
        translate(-90,0,1001);
        wallZ(230, 215);
    pop();
    push();
        
        // ambientMaterial(30,30,30);
        // specularMaterial(255,255,255);
        translate(-90,200,0);
        fill(30,30,30);
        ceiling(180+45,1000);
        // directionalLight(255,0,0,0,-1,0);
        translate(0,-200,0);
        fill(30,30,30);
        wall(1000,200);
        translate(180+45, 0, 0);
        wall(1000,200);
    pop();

    // ambientMaterial(0);

    push();
        // fill(120,120,0);
        // ambientMaterial(0);
        fill(120,120,120);
        planee(2000);
        translate(-80,30,0);
        // pointLight(170,170,170,0,0,1000);
        imageZ(100,ry);
        translate(0,0,200);
        imageZ(100,city);
        translate(0,0,200);
        imageZ(100,ryan);
        imageZ(100,ry);
        translate(0,0,200);
        imageZ(100,city);
        translate(0,0,200);
        imageZ(100,ryan);
        // sphere(90);
    pop();

    push();
        translate(90,30,0);
        // pointLight(170,170,170,0,0,1000);
        imageZ(100,ry);
        translate(0,0,200);
        imageZ(100,city);
        translate(0,0,200);
        imageZ(100,ryan);
        imageZ(100,ry);
        translate(0,0,200);
        imageZ(100,city);
        translate(0,0,200);
        imageZ(100,ryan);
    pop();

    push();
        translate(-300,45,-300);
        rotateY(rot);
        texture(im);
        box(90);
        rot += .1;
    pop();
    push();
        translate(300,45,-300);
        rotateY(rot);
        texture(im);
        box(90);
        rot += .1;
    pop();
    push();
        translate(1500,45,-1500);
        imageC(3000, jah);
        rotateY(PI/2);
        translate(1300,300,1000);

        imageC(2000,reg);
    pop();
    camera(
        tr.x, tr.y, tr.z,
        tr.x-sin(theta),tr.y+sin(phi)*2+(sin(c)*.019),tr.z-cos(theta),
        0,-1,0
    )
}