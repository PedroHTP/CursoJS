var sexo

function masculino() {
    sexo = "Masculino"
}
function feminino() {
    sexo = "Feminino"
}

  function calcular(sexo) {
        var data = new Date()
        var anoatual = data.getFullYear()
        var mesatual = data.getUTCMonth() + 1
        var diaatual = data.getDate()

        var msg = document.querySelector('p#msg')

        var nascimentostring = document.getElementById('nascimento').value
        var arraynascimento = nascimentostring.split('-')
        var anonascimneto = arraynascimento[0]
        var mesnascimneto = arraynascimento[1]
        var dianascimneto = arraynascimento[2]

        var idade = anoatual - anonascimneto

        if ((mesatual < mesnascimneto) || ( mesatual == mesnascimneto  && diaatual < dianascimneto)) {
            idade--
        }

        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    }

    