var objData = new Date()
var day = objData.getDay()

    switch (day) {
        case 0:
            day = "Domingo";
            break;

        case 1:
            day = "Segunda-feira";
            break;
        
        case 2:
            day = "Terça-feira";
            break;

        case 3:
            day = "Quarta-feira";
            break;

        case 4:
            day = "Quinta-feira";
            break;

        case 5:
            day = "Sexta-feira";
            break;

        case 6:
            day = "Sábado";
            break;

        default:
            day = "Dia inválido!";
            break;
    }

    console.log(day)