w.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.context')
    const app = document.querySelector('.app')

    let theme = true

    content.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            if (theme) {
                app.classList.add('dark')
                theme = !theme
            } else {
                app.classList.remove('dark')
                theme = !theme
            }
        }
    })

})