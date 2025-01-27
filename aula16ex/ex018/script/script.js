var numero = []
    // results section
    var sec = document.querySelector('section#secalc') 

    // create result's div
    var msg = document.createElement('div')
    msg.id = 'msg'

    // div in section
    sec.appendChild(msg)
    
    function Adicionar() {
        // get value and input
        var inputnum = document.querySelector('input#num')
        var newValue = inputnum.value

        // input with value?
        if (newValue != "" && (newValue > 0 && newValue <= 100)) {
            // Select
            let select = document.querySelector('select#tab')  
            
            // value in array?
            if ((numero.indexOf(newValue)) == -1) {
                // input new value in array     
                numero.push(newValue)

                // Show select
                select.style.display = 'block'

                // Add array in select
                let option = document.createElement('option')
                    for (let index = 0; index < numero.length; index++) {
                        option.innerText = `Valor ${numero[index]} adicionado.`
                        select.appendChild(option)
                    }

                // Clear result
                msg.innerHTML = ''

            } else {
                alert('Número já inserido!')
                inputnum.focus()
            }
        } else if (newValue == "") {
            alert('Preencha o campo!')
            inputnum.focus()
        } else {
            alert('Valor não está no intervalo determinado!')
            inputnum.focus()
        }
        inputnum.value = ''
        inputnum.focus()
    }

    function Finalizar() {
        if (numero.length > 0) {
            // length array
            let length = document.createElement('p')
            length.innerHTML = `Ao todo, temos ${numero.length} números cadastrados.`
            
            // max value in array
            numero.sort((a, b) => a - b)
            let txtmax = document.createElement('p')
            let max = numero[numero.length-1]
            txtmax.innerHTML = `O maior valor informado é ${max}`
            

            // min value in array
            let txtmin = document.createElement('p')
            let min = numero[0]
            txtmin.innerHTML = `O menor valor informado é ${min}`
            
            // sum all
            let txtsoma = document.createElement('p')
            let soma = 0
                for (const num of numero) {
                    soma += Number(num);
                }
            txtsoma.innerHTML = `Somando todos os valores, temos ${soma}` 

            // mean all
            let txtmedia = document.createElement('p')
            let media = soma / numero.length
            txtmedia.innerHTML = `A média dos valores digitados é ${media}`
            
            if (msg.innerHTML == '') {
                // Show results's div
                msg.appendChild(length)
                msg.appendChild(txtmax)
                msg.appendChild(txtmin)
                msg.appendChild(txtsoma)
                msg.appendChild(txtmedia)
            }
        } else {
            alert('Insira os números no campo acima!')
            inputnum.focus()
        }

    }
