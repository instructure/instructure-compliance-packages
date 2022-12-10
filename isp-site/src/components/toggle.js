const toggle = (u, n) => {
    n.forEach(e => { e.removeAttribute('aria-current') })
    let bgc
    u.setAttribute('aria-current','page')
    let bg = document.querySelectorAll('[class$="iconContainer"]')[0]

    switch(u.id) {
        case 'Canvas':
            bgc = "#E72429"
            break
        case 'Mastery':
            bgc = "#24A159"
            break
        case 'Elevate':
            bgc = "#0097D3"
            break
        case 'Impact':
            bgc = "#F76400"
            break
        default:
            bgc = "#0D323F"
    }
    bg.style.backgroundColor = bgc
}

document.addEventListener("DOMContentLoaded", function(event) {
    let u = document.location.href.split('#')[1]
    if (u !== undefined && u !== "" && u !== null) u = document.getElementById(u.slice(1))
    let n = document.querySelectorAll('nav a')
    if (u !== null) toggle(u, n)
    n.forEach(e => { e.onclick = function() { toggle(e, n) } })
})