//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
Car_width = 75;
Car_height = 150;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
Car_x = 5;
Car_y = 225;

function add() {
    //upload car, and background images on the canvas.
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
    //Define function ‘uploadBackground’
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
    //Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgTag, Car_x, Car_y, Car_width, Car_height);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }


}

function up() {
    //Define function to move the car upward
    if (Car_y >= 0) {
        Car_y = Car_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    //Define function to move the car downward
    if (Car_y <= 500) {
        Car_y = Car_y + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    //Define function to move the car left side
    if (Car_x >= 0) {
        Car_x = Car_x - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    //Define function to move the car right side
    if (Car_x <= 700) {
        Car_x = Car_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}