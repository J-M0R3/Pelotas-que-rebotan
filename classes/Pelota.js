class Pelota {
    constructor() {

        this.diam = random(40, 120);
        this.rad = this.diam / 2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-3, 3);
        this.vely = random(-3, 3);

        this.baseColor = color(random(255), random(255), random(100, 200));

        // Tipo de diseño:
        // 0 = esfera 3D realista
        // 1 = burbuja de cristal
        this.tipo = random([0, 1]);
    }

    actualizar() {
        if (this.posx > width - this.rad || this.posx < this.rad) {
            this.velx *= -1;
        }

        if (this.posy > height - this.rad || this.posy < this.rad) {
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;
    }

    visualizar() {

        if (this.tipo === 0) {
            this.dibujarEsfera3D();
        } else {
            this.dibujarBurbujaCristal();
        }
    }

    // 🌟 1. ESFERA 3D REALISTA  
    dibujarEsfera3D() {

        // Círculo base
        noStroke();
        fill(this.baseColor);
        circle(this.posx, this.posy, this.diam);

        // Luz principal (gradiente simulado)
        fill(255, 255, 255, 90);
        circle(this.posx - this.rad * 0.3, this.posy - this.rad * 0.3, this.diam * 0.45);

        // Sombra inferior
        fill(0, 0, 0, 80);
        circle(this.posx + this.rad * 0.25, this.posy + this.rad * 0.25, this.diam * 0.7);
    }

    // ✨ 2. BURBUJA DE CRISTAL  
    dibujarBurbujaCristal() {

        // Capa principal transparente
        noStroke();
        fill(red(this.baseColor), green(this.baseColor), blue(this.baseColor), 60);
        circle(this.posx, this.posy, this.diam);

        // Halo brillante (glow suave)
        fill(255, 255, 255, 40);
        circle(this.posx, this.posy, this.diam * 1.15);

        // Reflejo fuerte
        fill(255, 255, 255, 150);
        ellipse(this.posx - this.rad * 0.3, this.posy - this.rad * 0.35, this.diam * 0.35, this.diam * 0.22);

        // Reflejo pequeño
        fill(255, 255, 255, 220);
        ellipse(this.posx + this.rad * 0.25, this.posy + this.rad * 0.15, this.diam * 0.12, this.diam * 0.08);
    }
}
