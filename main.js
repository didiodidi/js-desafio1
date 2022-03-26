class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
    }

    sinIva(){
        this.precio -= this.precio*0.21;
    }
    actualizarStock(x) {
        this.stock = this.stock - x;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("textil",1500,true));
arrayProductos.push(new Producto ("pintura",1600,true));
arrayProductos.push(new Producto ("escultura",4000,true));
console.log (arrayProductos);

function crearCarrito (){
    let otroMas;
    //ciclo
    do{
        let producto = prompt("¿Queres comprar textil ,pintura o escultura");
        let cantidad = parseInt(prompt("¿Ingrese la cantidad?"));
        let precio;
            switch (producto){
                case arrayProductos[0].nombre:
                     arrayProductos[0].cantidad;
                    
            }





    }while(otroMas)
}
