function contar(){
    
    let a = document.getElementById('ini')
    let i = Number(a.value) 

    let b = document.getElementById('fim')
    let f = Number(b.value)

    let c = document.getElementById('pas')
    let p = Number(c.value)

    if(i.length == 0 || f.length == 0 || p.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '

        for(i; i<=f ; i += p) {
            res.innerHTML += `${i} ` 
        }

    }


    
}

