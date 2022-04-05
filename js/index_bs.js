let speed = 30;
let scale = 0.20; 
let canvas;
let ctx;


let ufo = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};


(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    //dvd.img.src = 'dvd-logo.png';
    ufo.img.src = '../images/ufo.png'

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    //pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        ctx.fillStyle = '#00000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.img.width*scale, ufo.img.height*scale);

        //Move the logo
        ufo.x+=ufo.xspeed;
        ufo.y+=ufo.yspeed;

        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    //image 1
    if(ufo.x+ufo.img.width*scale >= canvas.width || ufo.x <= 0){
        ufo.xspeed *= -1;

    }
        
    if(ufo.y+ufo.img.height*scale >= canvas.height || ufo.y <= 0){
        ufo.yspeed *= -1;
    
    }    
}