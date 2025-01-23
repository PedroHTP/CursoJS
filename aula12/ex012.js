var objdata = new Date()
var hora = objdata.getHours()
var min = objdata.getMinutes()

    if (min < 10) {
    min = '0' + min 
    }
    console.log(`Agora é ${hora}:${min}`)    

    if ((hora >= 0) && (hora < 6)) {
        console.log(`Bom madrugada!`)  
    } else if (hora < 12 || (hora == 12 && min == 0)) {
        console.log(`Bom dia!`)  
    } else if (hora < 18) {
        console.log(`Bom tarde!`)  
    } else {
        console.log(`Bom noite!`)  
    }