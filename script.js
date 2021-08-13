function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#c2d8e3'
        document.body.header.style.color = 'white'
    } else if (hora > 12 && hora <= 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#e7a180'
    } else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#032f46'
    }
}
