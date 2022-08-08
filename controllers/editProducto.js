import {productosServicios} from "../servicios/productos-servicios.js"

const form = document.querySelector('[data-form]');
const imgUrl = document.querySelector('[data-url]');
const nombre = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const descripcion = document.querySelector('[data-descripcion]');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const getInfo = async () => {
    try {
        const {imageUrl,name, price, description} = await productosServicios.detalleProducto(id);

            imgUrl.value = imageUrl;
            nombre.value = name;
            precio.value = price;
            descripcion.value = description;

    } catch (error) {
        alert("Hubo un Error")
    }
};

if(id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productosServicios.updateItem(nombre.value, imgUrl.value, precio.value, descripcion.value, id).then(() => {
            alert('Producto editado con exito')
            window.location.href = '../screens/adminProducts.html'
        })
    })
} else {
    alert("ERROR, no se encontro el id")
}


