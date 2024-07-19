function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ALGO ESTÁ ERRADO] Por favor, verifique os dados!')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'contando: <br/>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
            //contagem crescente
            for(var c=i ; c<=f ; c+=p ){
                res.innerHTML += `\u{1F449} .${c}.  `
            }
            
        }else{
            //contagem regrassiva
            for(var c=i ; c>=f ; c-= p){
                res.innerHTML += `\u{1F449} .${c}. `
            }
        }
        res.innerHTML += `\u{1F449}..!\u{1F3c1}!..\u{1F448}` 
    }
}