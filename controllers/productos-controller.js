import {productosServicios} from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, id) => {
    const contenido = `
         <div class="product__card-edit hidden ">
            <button class="btnDelete" type="button"><img src="../assets/img/icons/delete.svg" alt="edition_icon" class="iconEdit" data-delete></button>
            <a href="../screens/edit-product.html?id=${id}"><img src="../assets/img/icons/edit.svg" alt="edition_icon" class="iconEdit" data-edit></a>
        </div>
        <div class="imgContainer">
            <img class="product__card--img" src = "${imageUrl}" alt = "imagen_del_producto">
        </div>
        <div class="product__card--info">
            <p class="product__card--title">${name}</p>
            <p class="product__card--price">${price}</p>
            <a href="../screens/view-product.html?id=${id}"  class="product__card-boton">Ver producto</a>
        </div>
    `;

    const card = document.createElement('div');
    card.setAttribute('data-product', name)
    card.innerHTML = contenido;
    card.classList.add('product__card');

    const dbtn = card.querySelector('.btnDelete');
    dbtn.addEventListener('click', () => {
        productosServicios.deleteItem(id)
            .then(() => {
                render();
            })
            .catch((err) => console.error("hubo un error", err))
    });

    return card;
};

const productos = document.querySelector('[data-productos]');

const render = async () => {
    try {
        const listaProductos = await productosServicios.listaProductos()
        productos.innerHTML = '';
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
        });
    } catch (err) {
        console.error("Ocurrió un error", err)
    }
}

render()





