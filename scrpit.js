// Criando a o "contar"
function contar () {
    var ini = document.getElementById('txti');
    var fim= document.getElementById('txtf');
    var passo= document.getElementById('txtp');
    var res= document.getElementById('res');
    // Vamos cirar verificações para validar os dados. 
    if(ini.value.length == 0 || fim.value.length== 0 || passo.value.length == 0 ) {
        window.alert("Dados inválidos, tente novamente! ")
    }else {
        res.innerHTML='Contando : '
        // Vamos criar variáveis e alter o tipo para  number
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        // Validndo contagem crescente e regressiva
        // Usando  o for para fazer o contador 
        if(i<f){
            for( var c =i; c<=f; c+=p) { 
            // inicia com a var c em 0, se for menor ou igual ao fim, incrementa o valor do pssso. 
            res.innerHTML += `${c} \u{1F449}` }

        } else  {
            // contagem regressiva
            for(var c=i; c>=f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
                }
        res.innerHTML+= `\u{1F3C1}`
    }
}

