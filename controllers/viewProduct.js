import { productosServicios } from "/servicios/productos-servicios.js";

const imgProduct = document.querySelector('[data-img]');
const nameProduct = document.querySelector('[data-name]');
const priceProduct = document.querySelector('[data-price]');
const descProduct = document.querySelector('[data-descripcion]');
const verProducto = document.querySelector('[data-verProducto]');

// imgProduct.setAttribute(src, "")
const url = new URL(window.location);
const id = url.searchParams.get('id');

const getInfo = async () => {
    try {
        const product = await productosServicios.detalleProducto(id);
        console.log(product.imageUrl, product.name, product.price, product.categoria, product.description, id)

    } catch (error) {
        alert("Hubo un Error")
    }
};
getInfo();

if(id){
    verProducto.addEventListener('click', ()=>{


    })


}

// imgProduct = product.imageUrl;
// nameProduct = product.name;
// priceProduct = product.price;
// descProduct = product.description;