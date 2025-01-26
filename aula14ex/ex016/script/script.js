    let button = window.document.querySelector('input#exe')
    button.addEventListener('click', calcular)

    function calcular() {

        // valores
        let start = document.querySelector('input#start').value
        let end = document.querySelector('input#end').value
        let step = document.querySelector('input#step').value

        // mensagem
        let msg = document.querySelector('div#msg')

        if (start == end || start == '' || end == '' || step == '') {
            msg.innerHTML = `Impossível contar!`
        } else {
            start = Number(start)
            end = Number(end)
            step = Number(step)

            msg.innerHTML = `Contando: <br>`

            if (step == 0) {
                window.alert('O Passo não pode ser igual a 0, iremos considerar como 1')
                step = 1
            }
            if (start < end) {
                for (start; start <= end; start += step) {
                    msg.innerHTML += start + String.fromCodePoint(0x1F449) // poderia ser "\u{1F449}"
                }

            } else {
                for (start; start >= end; start -= step) {
                    msg.innerHTML += start + String.fromCodePoint(0x1F449) // poderia ser "\u{1F449}"
                }
            }
            msg.innerHTML += String.fromCodePoint(0x1F3C1)// poderia ser "\u{1F3C1}"
        }
    }