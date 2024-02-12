function setup() {
    createCanvas(800, 800);
}

let variableX = Math.floor(Math.random() * (300 - 0 + 1)) + 0;
let variationTraingleRouge = Math.floor(Math.random() * (400 - variableX + 1));
let variationTraingleBlue = 400 - variableX - variationTraingleRouge;

const positionXText = (600 - variationTraingleBlue - variationTraingleRouge + 200) / 2;

console.log(
    `Le coté bas à un coté rouge de ${variationTraingleRouge} et un coté vert de ${variationTraingleBlue} et un coté vide de ${variableX} pour un totale de 400 soit ${
        variableX + variationTraingleRouge + variationTraingleBlue
    }`
);

function draw() {
    background(171, 155, 152);
    fill(255, 255, 255);
    rect(200, 200, 400, 400);

    let variationTriangle1 = 374; // 200 min 600 max
    fill(153, 60, 37);
    triangle(200, 200, 200, 600, variationTraingleRouge + 200, 600);
    fill(66, 135, 245);
    triangle(600, 200, 600, 600, 600 - variationTraingleBlue, 600);
    fill(0, 0, 0);
    circle(variationTraingleRouge + 200, 600, 10);
    circle(600 - variationTraingleBlue, 600, 10);
    line(variationTraingleRouge + 200, 600, 600 - variationTraingleBlue, 600, 10);
    line(variationTraingleRouge + 200, 601, 600 - variationTraingleBlue, 601, 10);
    line(variationTraingleRouge + 200, 599, 600 - variationTraingleBlue, 599, 10);
    textSize(20);
    text(`Variable X = ${Math.floor((variableX * 10) / 400)}`, positionXText, 650);

    let dred = dist(mouseX, mouseY, variationTraingleRouge + 200, 600);
    if (dred < 10) {
        // Si la souris est sur le cercle
        fill(255, 0, 0); // Changez la couleur de remplissage du cercle
        circle(variationTraingleRouge + 200, 600, 10);
    } else {
        fill(0, 0, 0); // Réinitialisez la couleur de remplissage du cercle
        circle(variationTraingleRouge + 200, 600, 10);
    }

    let dGreen = dist(mouseX, mouseY, 600 - variationTraingleBlue, 600);
    if (dGreen < 10) {
        // Si la souris est sur le cercle
        fill(255, 0, 0); // Changez la couleur de remplissage du cercle
        circle(600 - variationTraingleBlue, 600, 10);
    } else {
        fill(0, 0, 0); // Réinitialisez la couleur de remplissage du cercle
        circle(600 - variationTraingleBlue, 600, 10);
    }

    fill(255, 255, 255);
}

function mousePressed() {
    console.log(mouseX);
    let dred = dist(mouseX, mouseY, variationTraingleRouge + 200, 600);
    if (dred < 10) {
        // Si la souris est sur le cercle
        if (200 < mouseX < 600 - variationTraingleBlue) {
            variationTraingleRouge = mouseX - 200;
        } else {
            fill(0, 0, 0); // Réinitialisez la couleur de remplissage du cercle
            circle(variationTraingleRouge + 200, 600, 10);
        }

        let dGreen = dist(mouseX, mouseY, 600 - variationTraingleBlue, 600);
        if (dGreen < 10) {
            // Si la souris est sur le cercle
            fill(255, 0, 0); // Changez la couleur de remplissage du cercle
            circle(600 - variationTraingleBlue, 600, 10);
        } else {
            fill(0, 0, 0); // Réinitialisez la couleur de remplissage du cercle
            circle(600 - variationTraingleBlue, 600, 10);
        }
    }
}
