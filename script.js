function validar(){

    var idad = document.querySelector('input#idade').value
    var valida = document.querySelector('div#res')
    var agora = new Date()    
    var hora = agora.getHours()
    var diaSem = agora.getDate()

    switch (diaSem){ //valida o dia da semana para exibir na tela
        case 0: 
            valida.innerHTML = '<div id="diaS">Sábado</div>'
        break

        case 1: 
            valida.innerHTML = '<div id="diaS">Domingo</div>'
        break

        case 2:
            valida.innerHTML = '<div id="diaS">Segunda-feira<div>'
        break

        case 3:
            valida.innerHTML = '<div id="diaS">Terça-feira</div>'
        break

        case 4:
            valida.innerHTML = '<div id="diaS">Quarta-feira</div>'
        break

        case 5:
            valida.innerHTML = '<div id="diaS">Quinta-feira</div>'
        break

        case 6:
            valida.innerHTML = '<div id="diaS">Sexta-feira</div>'
        
    }

    if (hora < 12){ // valida o horário e exibe fraseologia de acordo com o horário atual
        valida.innerHTML += 'Bom dia!</br>'
    } else if (hora < 18){
        valida.innerHTML += 'Boa tarde!</br>'
    } else {
        valida.innerHTML += 'Boa noite!</br>'
    }
    
        valida.innerHTML += `Você tem ${idad} anos!</br>`

    if (idad < 16){
        valida.innerHTML += 'Hummm ainda é muito cedo para votar'
    } else if (idad < 18 || idad > 64 && idad < 80){
        valida.innerHTML += 'Seu voto não é obrigatório mas você pode ajudar sua cidade, país ou municipio a ficar melhor, vamos votar? </br> Vale lembrar que seu voto vale como prova de vida'
    } else if (idad < 64){
        valida.innerHTML += 'Seu voto é obrigatório, compareça ao endereço da sua cabine no dia da votação. </br> Até logo'
    }
    
    else if (idad > 80 && idad < 100){
    valida.innerHTML += 'Que legal, sua preocupação em exercer seu papel como cidadão é demais! Mas lembre-se, seu voto não é obrigatório'
    } else 
    valida.innerHTML += 'Não é necessário mais votar, fique em paz'

}