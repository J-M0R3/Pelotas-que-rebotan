const NP = 400;
let pelotas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for (let i = 0; i < NP; i++) {
        pelotas[i] = new Pelota();
    }
}

function draw() {
    background(20); // fondo más elegante

    for (let i = 0; i < NP; i++) {
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }
}

 

       

 

    


        