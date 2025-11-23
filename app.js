let nombre = prompt('Ingrese su nombre: ')

if (nombre == 'Matias' || nombre == 'Mati' || nombre == 'Nahuel') {
    alert('Bienvenido Profe')
} else {
    alert('Bienvenido '+ nombre)
}

let total = 0;
let subtotal = 0;
let seleccion = 0;


do {
    seleccion = prompt(
         nombre + ', eleji el producto que quieras. Ingresa el cuadro de búsqueda el numero de identificación del producto que quieras.\n1: Snowboard Nitro Team: US$650\n2: Snowboard Burton Custom US$900\n3: Snoboard Custom X US$950\n4: Snowboard Jones Frontier 2.0 US$775\n5: Snowboard Salomon Huck Knife US$700\n6: Guardar la compra'
    );

    switch (seleccion) {
        case '1':
            total = total + 650;
            alert('Genial! Agregaste un producto al carrito, el total de tu compra es: $' + total);
            break;
        case '2':
            total = total + 900;
            alert('Genial! Agregaste un producto al carrito, el total de tu compra es: $' + total);
            break;
        case '3':
            total = total + 950;
            alert('Genial! Agregaste un producto al carrito, el total de tu compra es: $' + total);
            break;
        case '4':
            total = total + 775;
            alert('Genial! Agregaste un producto al carrito, el total de tu compra es: $' + total);
            break;
        case '5':
            total = total + 700;
            alert('Genial! Agregaste un producto al carrito, el total de tu compra es: $' + total);
            break;
    }
} while (seleccion != 6)

alert('El total de su compra es de US$'+ total)