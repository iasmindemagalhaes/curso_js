function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <= 3 ){
                //Bebê
                img.setAttribute('src','bebe.png')
               
            } else if (idade > 3 && idade <= 12){
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            }
            else if (idade > 12 && idade <= 21){
                //Jovem
                img.setAttribute('src','jovem-m.png')
            }
            else if (idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }else{
            genero = 'Feminino'
            if (idade >= 0 && idade <= 3 ){
                //Bebê
                img.setAttribute('src','bebe.png')
            } else if (idade > 3 && idade <= 12){
                //Criança
                img.setAttribute('src', 'crianca-f.png')
            }
            else if (idade > 12 && idade <= 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }
            else if (idade > 21 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'adulta-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}