function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var  genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 12){
                img.setAttribute('src', 'criançah.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'vovoh.png')
            } 
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 12){
                img.setAttribute('src', 'criançam.png')
            } else if (idade < 45) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'vovom.png')
            } 
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}