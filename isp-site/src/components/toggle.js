const toggle = (u, n) => {
    n.forEach(e => { 
        e.removeAttribute('aria-current')
        e.classList.remove('active')
    })

    let bg = document.querySelectorAll('[class$="iconContainer"]')[0]
    let c = "#0D323F"

    if(u !== null && u.hash !== "#/") {
        u.setAttribute('aria-current','page')
        u.classList.add('active')
        switch(u.id) {
            case 'canvas':  c = "#E72429"; break
            case 'mastery': c = "#24A159"; break
            case 'elevate': c = "#0097D3"; break
            case 'impact':  c = "#F76400"; break
            default:        c = c
        }
        bg.style.backgroundColor = c 
    } else {
        bg.style.backgroundColor = c
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