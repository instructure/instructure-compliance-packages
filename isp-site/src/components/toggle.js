const toggle = (u, n) => {
    n.forEach(e => { 
        e.removeAttribute('aria-current')
        e.classList.remove('active')
    })
    
    if(u !== null && u.hash !== "#/") {
        u.setAttribute('aria-current','page')
        u.classList.add('active')
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let u = document.location.href.split('#')[1]
    let n = document.querySelectorAll('nav a')
    
    if (u !== undefined && u !== "/" && u !== null) {
        u = document.getElementById(u.split("/")[1])
        toggle(u, n)
    }

    n.forEach(el => { el.onclick = function() { toggle(el, n) } })
})