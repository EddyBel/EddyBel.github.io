window.addEventListener('DOMContentLoaded', () => {

    const API = (name) => (`https://api.github.com/users/${name}`)

    //Elementos html
    const header = document.querySelector('.navbar-header')

    // Peticion a github
    fetch(API('EddyBel')).then(response => response.json()).then(response => {
        header.innerHTML += `<img src="${response.avatar_url}" alt="" class="user-img" />
        <a class="site-title" href="${response.html_url}" ><span>Eddy</span>Bel</a>`
        return response
    })

})