function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '200px'
        img.style.height = '200px'

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                img.setAttribute('src', 'idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeF.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoF.jpg')
            } else {
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}