class Pelota {
         constructor () {

         this.diam = random (30, 150);
         this.rad = this.diam / 2;

         this.posx = random (this.rad, width - this.rad);
         this.posy = random (this.rad, height - this.rad);

         this.velx = random (-5, 5);
         this.vely = random (-5, 5);

         this.nuevocolor = color (random (255), random (255), random (50 ,175) );

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
 
         visualizar(){
         fill (this.nuevocolor);
         circle(this.posx, this.posy, this.diam);
         stroke ("#e7a916ff");
         strokeWeight(10);
 
         fill ("#e7a916ff");
         ellipse(this.posx, this.posy, this.diam / 2, this.diam / 9);
 
         }   

 }       