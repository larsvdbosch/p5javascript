let x, y; // De x- en y-positie van de cirkel
let xspeed = 5;
let yspeed = 5;
let xdirection = 1; // De richting van beweging in de x-richting (1 voor rechts, -1 voor links)
let ydirection = 1; // De richting van beweging in de y-richting (1 voor beneden, -1 voor boven)
let d = 50; // Diameter van de cirkel
let speedIncrement = 2;
let circleColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2; // Deze twee zorgen ervoor dat x en y op het midden van het canvas worden gezet
    circleColor = color(241, 0, 102);
    background(38, 198, 187);
}

function draw() {
    handleInput(); // Nieuwe functie om invoer te verwerken

    x = x + xspeed * xdirection;
    y = y + yspeed * ydirection; // Update x&y-positie op basis van snelheid en richting, dit is dus wanneer er een nieuw stipje op het canvas komt

    if (x > width - d / 2 || x < d / 2) {
        // ALS de cirkel de rand van het canvas raakt, dan:
        xdirection *= -1; // Keer de bewegingsrichting om
        xspeed += speedIncrement; // Verhoog de snelheid wanneer de rand wordt geraakt
        changeColor();
    }

    if (y > height - d / 2 || y < d / 2) {
        // ALS de cirkel de boven- of onderkant van het canvas raakt, dan:
        ydirection *= -1;
        yspeed += speedIncrement;
        changeColor();
    }

    // Hieronder wordt de cirkel getekend
    stroke(0); // Zet de lijnkleur op zwart
    fill(circleColor); // Zet de vulkleur van de cirkel
    ellipse(x, y, d, d); // Tekenen van de cirkel op de huidige positie

    // Toegevoegde boodschap voor de gebruiker
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Gebruik de pijltjestoetsen om de cirkel te bewegen", width / 2, height - 30);
}

function changeColor() {
    let randomColor;

    // Definieer hier individuele kleuren
    let colorOptions = [
        color(246, 38, 129),    // Rood
        color(248, 87, 151),    // Groen
        color(255, 148, 182),  // Geel
        color(255, 209, 227),  // Paars
        color(241, 0, 102),  // Oranje
        color(248, 87, 151),    // Blauw
        color(241, 0, 102)     // Donkerblauw
    ];

    randomColor = random(colorOptions);
    circleColor = randomColor;
}

function handleInput() {
    // Nieuwe functie om de invoer van de pijltjestoetsen te verwerken
    if (keyIsDown(LEFT_ARROW) && x - xspeed - d / 2 > 0) {
        x -= xspeed;
    }
    if (keyIsDown(RIGHT_ARROW) && x + xspeed + d / 2 < width) {
        x += xspeed;
    }
    if (keyIsDown(UP_ARROW) && y - yspeed - d / 2 > 0) {
        y -= yspeed;
    }
    if (keyIsDown(DOWN_ARROW) && y + yspeed + d / 2 < height) {
        y += yspeed;
    }
}
