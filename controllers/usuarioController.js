import {userServicios} from "../servicios/user-service.js";

const nuevoUsuario = (name, email, password) => {
    const addUser = document.createElement("tr");
    addUser.innerHTML = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>`;
    return addUser;
};

const user = document.querySelector('[data-table]');

const render = async () => {
    try {
        const listaUsuarios = await  userServicios.listaUsuarios()
        listaUsuarios.forEach((elemento) => {
            user.appendChild(nuevoUsuario(elemento.name,elemento.email,elemento.password))
            });
    } catch (err){
        console.log(err)
    }
}

render()