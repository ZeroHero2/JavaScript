// Creacion de una clase con su constructor
class Auto {
    // Definicion del constructor
    constructor(marca,modelo,año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Creacion de metodo
     tocarBocina(){
        console.log(`Bepp Beep soy ${this.marca} ${this.modelo} del año ${this.año}`);
     }

}
let auto1 = new Auto ("toyota","Corolla",2001);
const auto2 = new Auto("Honda", "Civic", 2018);
auto1.tocarBocina();
auto2.tocarBocina();