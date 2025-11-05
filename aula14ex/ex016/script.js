function contar(){
    
    let a = document.getElementById('ini')
    let b = document.getElementById('fim')
    let c = document.getElementById('pas')
    let res = document.getElementById('res')

    // verificar se os campos estão vazios usando .value antes de converter para Number
    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: '
        let inicio = Number(a.value)
        let fim = Number(b.value)
        let passo = Number(c.value)
        if(passo <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            passo = 1
        }
        if(inicio < fim){
            // Contagem crescente 
            for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
        } else {
            // Contagem regressiva
            for (let i = inicio; i >= fim; i -= passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`  
    }
}

