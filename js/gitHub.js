const w = window;

const API = user => `https://api.github.com/users/${user}`

w.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector('.card-user')

    fetch(API('eddybel')).then(response => response.json()).then(response => {
        // Crear las imagenes y nombre de usuario
        content.innerHTML += `<img src=${response.avatar_url} class='img-user' />`
        content.innerHTML += `<h1 class='name-user' >${response.login}</h1>`
        // Crear contenedor de los iconos
        const socialContainer = document.createElement('div');
        socialContainer.setAttribute('class', 'container_social_seccion')
        content.appendChild(socialContainer)
        // iconos de redes sociales
        social.map((red) => {
            socialContainer.innerHTML += `<a href=${red.direccion}><img src=${red.img} class='img_social' /></a>`
        })
    })
})