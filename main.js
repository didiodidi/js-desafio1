class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.status = status;
    }

    sinIva(){
        this.precio = this.precio - this.precio*0.21;
    }

    actualizarStock(x){
        this.stock = this.stock - x;
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

debugger;
//function (arrayProductos = false)



// let precio = 0;
// let total = 0;
// let otroProducto = false;
// function agregarAlcarrito () {

//     do{
//         let producto = prompt('¿Queres agregar alguno de los siguientes productos:\ntextil(1 ó 2), \npintura(1 ó 2), \nescultura(1 ó 2) \ntextil(1 ó 2)');
//         let cantidad = parseInt(prompt('¿Cuantos productos desea agregar al carrito: ',0));

//         switch (producto) {
//             case "textil 1":
//                 precio = 1500;
//                 break;
//             case "textil 2":
//                 precio = 1600;
//                 break;
//             case "pintura 1":
//                 precio = 4000;
//                 break;
//             case "pintura 2":
//                 precio = 5000;
//             case "escultura 1":
//                 precio = 6000;
//             case "escultura 2":
//                 precio = 3500;
//                 break;
//             default:
//                 alert('Algunos de los datos ingresados son incorrectos');
//                 precio = 0;
//                 cantidad = 0;
//         }
//         total += precio * cantidad;
//         otroProducto = confirm("¿queres agregar otro producto?")
//     } while(otroProducto);
//     alert("El total de tu compra es de: " + total);
//     console.log(total)
// }

// function calcularEnvio(total) {
//     let confirmacion = confirm("¿Quieres enviar el producto a tu domicilio?: ");
//     if(confirmacion && total >=2500) {
//         alert("Tenes el envio gratis. El total de tu compra es de $" +total);
//     }else if (confirmacion && total < 2500 && total != 0){
//         total=total + 700;
//         alert("El envio cuesta $700. El total es de $"+ total);
//     }else {
//         alert("El total de tu compra es $"+total);
//     }
//     return total;
// }

// agregarAlcarrito();
// calcularEnvio(total);