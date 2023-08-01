const Producto = function(nombre, precio, stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock
}

let producto1 = new Producto("airpods", 115900, 25)
let producto2 = new Producto("cargador iphone 14", 29999, 15)
let producto3 = new Producto("apple watch", 250000,5)
let producto4 = new Producto("ipad", 400000, 3)
let producto5 = new Producto("iphone 14", 955000, 2)
let producto6 = new Producto("macbook", 1300000, 1)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

function buscarProducto(){
    let palabraClave = prompt("Que producto desea buscar?")
    let resultado = lista.filter( (x)=> x.nombre.includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("Ese producto no esta, busque nuevamente..." + palabraClave)
    }
}

function nuevoProducto(){
    let nombre = prompt("ingresa el nombre del producto:")
    let precio = parseInt(prompt("Coloque su precio:"))
    let stock = parseInt(prompt("por ultimo ingrese el stock:"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){
        alert("valores invalidos, intente nuevamente")
        return
    }

    let producto = new Producto(nombre, precio, stock)

    lista.push(producto)
    console.table(lista)
}

let boton = document.getElementById("buscar")
boton.addEventListener("click",buscarProducto)

let boton2 = document.getElementById("agregar")
boton2.addEventListener("click",nuevoProducto)