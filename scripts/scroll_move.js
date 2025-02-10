export default function scroll_move(scroll_value, btn, target)
{
    
    

    //verificando se o botao se voltar pode aparecer
    if (target.scrollLeft >= scroll_value + 100)
    {
        btn.style.display = 'block'
        
    }
    else if (target.scrollLeft <= scroll_value)
    {
        if (btn.id == 'btn_back')
        {
            btn.style.display = 'none'
        }
    }
    target.scrollBy(scroll_value, 0)

    

  

    console.log(galery.scrollLeft)
}