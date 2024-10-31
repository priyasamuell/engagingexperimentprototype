let x; // Current X position
let y; // Current Y position
let step = 1; // Step size for movement
let isUpPressed = false; // To track if the up arrow is pressed
let isDownPressed = false; // To track if the down arrow is pressed
let isLeftPressed = false; // To track if the left arrow is pressed
let isRightPressed = false; // To track if the right arrow is pressed

function setup() {
    createCanvas(windowWidth, windowHeight); // Create a canvas that fills the window
    background(255); // Set background to white
    x = width / 2; // Start X position at the center of the canvas
    y = height / 2; // Start Y position at the center of the canvas
}

function draw() {
    // Check if any arrow keys are pressed
    if (isUpPressed) {
        y -= step; // Move up
    }
    if (isDownPressed) {
        y += step; // Move down
    }
    if (isLeftPressed) {
        x -= step; // Move left
    }
    if (isRightPressed) {
        x += step; // Move right
    }

    // Ensure the drawing stays within the canvas bounds
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);

    // Draw the line
    stroke(0); // Set stroke color to black
    strokeWeight(2); // Set the stroke weight
    point(x, y); // Draw the point
}

function keyPressed() {
    // Update the pressed state for the arrow keys
    if (keyCode === UP_ARROW) {
        isUpPressed = true;
    } else if (keyCode === DOWN_ARROW) {
        isDownPressed = true;
    } else if (keyCode === LEFT_ARROW) {
        isLeftPressed = true;
    } else if (keyCode === RIGHT_ARROW) {
        isRightPressed = true;
    }
}

function keyReleased() {
    // Reset the pressed state for the arrow keys
    if (keyCode === UP_ARROW) {
        isUpPressed = false;
    } else if (keyCode === DOWN_ARROW) {
        isDownPressed = false;
    } else if (keyCode === LEFT_ARROW) {
        isLeftPressed = false;
    } else if (keyCode === RIGHT_ARROW) {
        isRightPressed = false;
    }
}

// Resize the canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Resize the canvas to fit the new window size
    background(255); // Reset the background to white
}
