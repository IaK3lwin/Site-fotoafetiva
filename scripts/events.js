import scroll_move from './scroll_move.js'


let galery = document.getElementById("galery-box")
var btn_next = document.getElementById("btn-next")
var btn_back = document.getElementById("btn-back")

var scroll_value = 100


// evento de clicar no botão >
btn_next.addEventListener('click', function() {
    scroll_move( scroll_value, btn_next, galery)
})

// evento de clicar no botão <
btn_back.addEventListener('click', function() {
    scroll_move(scroll_value * -1, btn_back, galery)
})
