// BIENVENIDA 
alert("Bienvenida a Coder Shoes Women's 👟");

//DATOS DE USUARIO: MONICA BARRETO
let usuario = [
    {
        nombre: "Monica",
        apellido: "Barreto",
    },
];

// !!!!SOLO SON 3 INTENTOS!!!
function validarClave() {
    let intentos = 3;

// !!!!!IMPORTANTE: LA CLAVE ES "1234"!!!!!

    do {
        let claveIngresada = prompt("Ingresa tu clave:");
        if (claveIngresada === "1234") {
            alert("Clave correcta. Bienvenida, Mónica Barreto.");
            return true;
        } else {
            intentos--;
            alert(`Clave incorrecta. Te quedan ${intentos} intentos.`);
        }
    } while (intentos > 0);

    alert("Demasiados intentos incorrectos. Operación cancelada.");
    return false;
}

if (validarClave()) {
    
}

// !!!!! ACCESO AL SISTEMA!!!!!

const Producto = function(nombre, talla, precio, stock){
    this.nombre = nombre
    this.talla = talla
    this.precio = precio
    this.stock =  stock
}

let producto1 = new Producto("puma carina 2.0 blancos", 38, 50, 4)
let producto2 = new Producto("puma carina 2.0 blancos", 37, 50, 2)
let producto3 = new Producto("puma carina 2.0 negros", 39, 45, 5)
let producto4 = new Producto("nike air force blancos y rosa", 38, 90, 3)
let producto5 = new Producto("nike air force blancos", 38, 90, 1)
let producto6 = new Producto("nike court rosados", 38, 90, 4)
let producto7 = new Producto("nike court rosados", 37, 90, 2)
let producto8 = new Producto("nike court rosados", 39, 90, 3)
let producto9 = new Producto("adidas court alpha negros", 38, 75, 2)
let producto10 = new Producto("adidas court alpha rosados", 38, 60, 3)
let producto11 = new Producto("adidas court alpha blancos", 39, 60, 5)
let producto12 = new Producto("adidas nora negros", 37, 80, 4)
let producto13 = new Producto("adidas nora negros", 39, 80, 5)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13]

function filtrarProductos(){

    let palabraClave = prompt("ingrese que marca de zapatos desea buscar").trim().toLowerCase()
    let resultado = lista.filter((x)=> x.nombre.toLowerCase().includes(palabraClave) )

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("lo sentimos, no pudimos encontrar lo que buscas: " + palabraClave)
        let respuesta= confirm("deseas agregarlo?")
        
        if(respuesta == true){
            agregarProducto()
        }
    }
}

console.table(lista)


function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto")
    let talla = parseInt(prompt("ingresa la talla del producto"))
    let precio = parseFloat(prompt("ingresa el precio del producto"))
    let stock = parseInt(prompt("ingresa el stock del producto"))


    if(isNaN(talla) || isNaN(precio) ||isNaN(stock) || nombre==="" || nombre == null){
        alert("ingresa valores validos")
        return
    }

    let producto = new Producto(nombre,talla,precio,stock)

    lista.push(producto)
    console.table(lista)
}
