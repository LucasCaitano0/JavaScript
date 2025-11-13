function adicionar(){
    var numero = document.getElementById('numero')
    var res = document.getElementById('addarea')
    

    if(num < 1 || num > 100){
        window.alert('Número inválido! Por favor, insira um número entre 1 e 100.')
    }else{
        var num = Number(numero.value)
        var c = 1
        addarea.innerhtmk = ''
        while( c <= 10){
            var item = document.createElement('option')
            item.text = `${num}`
            res.appendChild(item)
            c++
         }
    }
}