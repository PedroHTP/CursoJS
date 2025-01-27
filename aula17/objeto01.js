    let amigo = {
        nome: 'José', 
        sexo: 'M', 
        peso: 85.4,

        engordar(p=0) {
            console.log(`${this.nome} Engordou ${p}`)
            this.peso += p
            console.log(`Novo peso: ${this.peso} Kg`)
        }
    }

    console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
    amigo.engordar(5)