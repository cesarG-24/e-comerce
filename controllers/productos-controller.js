import { productosServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, verProducto) => {

    const card = document.createElement('div');
    const contenido = `
            <div class="imgContainer">
                <img class="product__card--img" src = "${imageUrl}" alt = "imagen_del_producto">
            </div>
            <div class="product__card--info">
                <p class="product__card--title">${name}</p>
                <p class="product__card--price">${price}</p>
                <a href =${verProducto}><button class="product__card-boton">Ver producto</button></a>
            </div>
    `;

    card.setAttribute('data-product', name)
    card.innerHTML = contenido;
    card.classList.add('product__card');
    return card;
};

const productos = document.querySelector('[data-productos]');

const render = async () => {
    try {
        const listaProductos = await  productosServicios.listaProductos()
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl,elemento.verProducto));
        });
    }
    catch (err){
        console.log(err)
    }
}

render()