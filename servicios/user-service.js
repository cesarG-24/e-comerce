const listaUsuarios = () => 
    fetch('http://localhost:3000/users').then(respuesta => respuesta.json());

const crearUsuario = (name, email, password) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    }).then(respuesta => {
            if(respuesta.ok){
                return respuesta.body
            }
            throw new Error('No fue posible crear un usuario')
        });
}


 export const userServicios = {
    listaUsuarios,
    crearUsuario,
}

