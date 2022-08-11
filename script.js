class Productos {
    constructor(id, nombre, descripcion, talle, img) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.talle = talle
        this.img = img
    }
}

const producto1 = new Productos(1, "Buzo Child", "Buzo Rustico Estampado", "Talle Unico", "https://gneco.netlify.app/img/hombre/1.jpg")
const producto2 = new Productos(2, "Remera Bitch", "Remera Rosa Estampada", "Talle Unico", "https://gneco.netlify.app/img/hombre/4.jpg")
const producto3 = new Productos(3, "Buzo Pink", "Buzo Rustico Rosado", "Talle Unico", "https://gneco.netlify.app/img/hombre/5.jpg")
const producto4 = new Productos(4, "Buzo Over Gris", "Buzo Frizado Oversize", "Talle Unico", "https://gneco.netlify.app/img/hombre/10.jpg")
const producto5 = new Productos(5, "Remera Over Bowie", "Remera Over Amarilla Estampada", "Talle Unico", "https://gneco.netlify.app/img/hombre/15.jpg")

const productos = [producto1, producto2, producto3, producto4, producto5]

const cardProducto = document.getElementById('cardProducto')
console.log(cardProducto);

productos.forEach(productoArray => {
    cardProducto.innerHTML += `
    <div>
    <img src="${productoArray.img}" width='200'/>
    <p>${productoArray.nombre}</p>
    <p>${productoArray.descripcion}</p>
    <p>${productoArray.talle}</p>
    </div>
    `
})