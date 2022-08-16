w.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container')

    cards.map((card) => {

        container.innerHTML += `<div class="card">
        <figure class="card__thumb">
            <img src=${card.img} alt="Picture by Kyle Cottrell"
                class="card__image">
            <figcaption class="card__caption">
                <h2 class="card__title">${card.title}</h2>
                <p class="card__snippet">${card.description}</p>
                <a href='${card.direccion}' class="card__button" >Visitar Pagina</a>
            </figcaption>
        </figure>
        </div>`

    })

})