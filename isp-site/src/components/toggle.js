const toggle = (u, n) => {
    n.forEach(e => { e.removeAttribute('aria-current') })
    u.setAttribute('aria-current','page')
    let bg = document.querySelectorAll('[class$="iconContainer"]')[0]
    let c
    switch(u.id) {
        case 'Canvas':  c = "#E72429"; break
        case 'Mastery': c = "#24A159"; break
        case 'Elevate': c = "#0097D3"; break
        case 'Impact':  c = "#F76400"; break
        default:        c = "#0D323F"
    }
    bg.style.backgroundColor = c
}

document.addEventListener("DOMContentLoaded", function(event) {
    let u = document.location.href.split('#')[1]
    if (u !== undefined && u !== "" && u !== null) u = document.getElementById(u.slice(1))
    let n = document.querySelectorAll('nav a')
    if (u !== null) toggle(u, n)
    n.forEach(e => { e.onclick = function() { toggle(e, n) } })
})