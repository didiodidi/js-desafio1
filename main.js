class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.status = status;
    }

    sinIva(){
        this.precio -= this.precio*0.21;
    }

    actualizarStock(x){
        this.stock -= this.stock - x;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("textil 1",1500,2));
arrayProductos.push(new Producto ("textil 2",1600,2));
arrayProductos.push(new Producto ("pintura 1",4000,2));
arrayProductos.push(new Producto ("pintura 2",5000,2));
arrayProductos.push(new Producto ("escultura 1",6000,2));
arrayProductos.push(new Producto ("escultura 2",3500,2));
console.log (arrayProductos);

//---Funciones para el proceso de compra---

let total = 0;

function agregarAlCarrito(){
    let otroMas;
    //Suma de productos al carrito
    do{
        let producto = prompt("¿Que productos desea comprar?");
        let cantidad = parseInt(prompt("¿Cuantos productos desea comprar?"));
        let precio;

            switch(producto) {
                case arrayProductos[0].nombre:
                    arrayProductos[0].actualizarStock(cantidad);
                    if (arrayProductos[0].stock < 0 ||isNaN(cantidad)){
                        alert("Stock no disponible")
                        arrayProductos[0].stock=arrayProductos[0].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio =arrayProductos[0].precio;
                    }
                    break;
                case arrayProductos[1].nombre:
                    arrayProductos[1].actualizarStock(cantidad);
                    if (arrayProductos[1].stock < 0 || isNaN(cantidad)){
                        alert("Stock no disponible")
                        arrayProductos[1].stock = arrayProductos[1].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio = arrayProductos[1].precio;
                    }
                    break;
                case arrayProductos[2].nombre:
                    arrayProductos[2].actualizarStock(cantidad);
                    if(arrayproductos[2].stock < 0 || isNaN(cantidad)){
                        alert("Stock no displonible")
                        arrayProductos[1].stock = arrayProductos[1].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio = arrayProductos[2].precio;
                    }
                    break;
                default:
                    alert("Algunos de los datos ingresados es incorrecto")
                    precio = 0;
                    cantidad = 0;
            }
        total += precio*cantidad;
        otroMas = confirm("Queres agregar otro articulo mas al carrito");
    }while(otroMas);
}

