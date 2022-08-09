import {productosServicios} from "../servicios/productos-servicios.js";
import {nuevoProducto} from "./productsController.js";

const imgProduct = document.querySelector('[data-img]');
const nameProduct = document.querySelector('[data-name]');
const priceProduct = document.querySelector('[data-price]');
const descProduct = document.querySelector('[data-descripcion]');
// const verProducto = document.querySelector('[data-verProducto]');

const url = new URL(window.location);
const id = url.searchParams.get('id');

const getInfo = async (id) => {
    try {
        const getProduct = await productosServicios.detalleProducto(id);
        product(getProduct);
        console.log(product.imageUrl, product.name, product.price, product.categoria, product.description, id);
    } catch (error) {
        console.error("Hubo un Error", error);
    }
};

const product = ({imageUrl, name,  price, description})=>{
    imgProduct.src = imageUrl;
    nameProduct.textContent = name;
    priceProduct.textContent = `precio: ${price}`;
    descProduct.textContent = `Descripción del producto: ${description}`;
}

if(id){
    getInfo(id);
}

const products = await productosServicios.listaProductos();
const otherProducts = document.querySelector('[data-otherProducts]');


otherProducts.innerHTML = '';
products.forEach(elemento => { otherProducts.appendChild((nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id)));
})

