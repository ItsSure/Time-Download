if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
  }

const GG = document.getElementById("resultado");

function datos() {
    sizetamaño = document.getElementById("cantidadtamaño").value;
    sizevelocidad = document.getElementById("cantidadvelocidad").value;

    sizegeneral = "";
    let sizemb = document.getElementById("tamañomb");
    let sizegb = document.getElementById("tamañogb");

    if (sizemb.checked) {
        sizegeneral = sizemb.value;
    } else if (sizegb.checked) {
        sizegeneral = sizegb.value;
    }

    vdgeneral = "";
    let vdownloadkb = document.getElementById("velocidadkb");
    let vdownloadmb = document.getElementById("velocidadmb");

    if (vdownloadkb.checked) {
        vdgeneral = vdownloadkb.value;
    } else if (vdownloadmb.checked) {
        vdgeneral = vdownloadmb.value;
    }
}

function calc() {
    if (sizegeneral == "mb" && vdgeneral == "kbs") {
        resultado = sizetamaño / (sizevelocidad / 1024);
    } else if (sizegeneral == "mb" && vdgeneral == "mbs") {
        resultado = sizetamaño / sizevelocidad;
    } else if (sizegeneral == "gb" && vdgeneral == "kbs") {
        resultado = (sizetamaño * 1024) / (sizevelocidad / 1024);
    } else if (sizegeneral == "gb" && vdgeneral == "mbs") {
        resultado = (sizetamaño * 1024) / sizevelocidad;
    } else {
        alert("No se ha encontrado la operación");
    }
}

function segundosTiempo(segundos) {
    var horas = Math.floor(segundos / 3600);
    horas = (horas < 10) ? '0' + horas : horas;
    var minutos = Math.floor((segundos / 60) % 60);
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    var segundero = segundos % 60;
    segundero = (segundero < 10) ? '0' + segundero : segundero;
    redondearsegundos = Math.round(segundero);
    return horas + ':' + minutos + ':' + redondearsegundos;
}


function cambiar() {
    datos();
    calc();
    resHoras = segundosTiempo(resultado);
    GG.innerHTML = resHoras;
}