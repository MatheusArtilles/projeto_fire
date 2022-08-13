const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const ativo = nav.classList('active')
    event.currentTarget.setAttribute('aria-expanded', 'true')

})
btnMobile.addEventListener('touchstart', toggleMenu)



function acao() {
    let modal = document.getElementById('modal')

    modal.style.display = "block"
}

function fecha() {
    document.getElementById('modal').style.display = "none"

}
var modall = document.getElementById('modal')
modall.addEventListener('click', function (e) {
    if (e.target == this) {
        fecha()
    }
})


function apagar() {
    document.getElementById('input').value = ''
    
}