
let galery = document.getElementById("galery-box")
let btn_next = document.getElementById("btn-next")
let btn_back = document.getElementById("btn-back")

let scroll_value = 100

//função de scrollar para a direita
function scroll_left(value)
{
    galery.scrollBy(value, 0)

    //verificando se o botao se voltar pode aparecer
    if (galery.scrollLeft >= 200)
    {
        btn_back.style.display = 'block'
    }

    console.log(galery.scrollLeft)
}

//funçao de scrolar para a esqueda
function scroll_right(value)
{
    galery.scrollBy(-value, 0)

    //verificando se o botao se voltar vai  desarecer
    if (galery.scrollLeft <= 0)
        {
            btn_back.style.display = 'none'
        }
    
        console.log(galery.scrollLeft)
}

// evento de clicar no botão >
btn_next.addEventListener('click', function() {
    scroll_left(scroll_value)
})

// evento de clicar no botão <
btn_back.addEventListener('click', function() {
    scroll_right(scroll_value)
})
