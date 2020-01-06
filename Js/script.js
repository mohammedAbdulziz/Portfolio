{
    //Hero Section
    
    
}
{
    //Menu
    let button=document.querySelector('#hero .wrapper .text .menuIconClosed svg')
    let text=document.querySelector('#hero .wrapper .text  .wrap');
    let menu=document.querySelector('#hero .wrapper .text .menu');
    let a=false;
    button.addEventListener('click',function(){
        a=!a;
        if(a){button.style.fill="lime"
        button.style.transform="rotate(45deg)"
        menu.style.display="block"
        text.style.display="none"
    }
    else {button.style.fill="white"
    button.style.transform="rotate(0)"
    menu.style.display="none"
        text.style.display="block"
}
})
}