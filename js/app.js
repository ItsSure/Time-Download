function segundosTiempo(segundos) {
    var horas = Math.floor(segundos / 3600);
    horas = (horas < 10) ? '0' + horas : horas;
    var minutos = Math.floor((segundos / 60) % 60);
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    var segundero = segundos % 60;
    segundero = (segundero < 10) ? '0' + segundero : segundero;
    return horas + ':' + minutos + ':' + segundero;
}

let bitsize = prompt("Tamaño del archivo en: 1: MB ó 2:GB ");
let tamaño = prompt("¿Cuanto ocupa el archivo?: ");
let vdescarga = prompt("Velocidad de tu internet en: 1: KB/s ó 2: MB/s");
let velocidad = prompt("¿Velocidad de tu internet?: ");

if (bitsize == 1 && vdescarga == 1) {
    resultado = tamaño / (velocidad / 1024);
} else if (bitsize == 1 && vdescarga == 2) {
    resultado = tamaño / velocidad;
} else if (bitsize == 2 && vdescarga == 1) {
    resultado = (tamaño * 1024) / (velocidad / 1024);
} else if (bitsize == 2 && vdescarga == 2) {
    resultado = (tamaño * 1024) / vdescarga;
}
else {
    alert ("No se ha encontrado la operación");
}

let resHoras = segundosTiempo(resultado);

document.write("La descarga se completará en " + (resHoras));