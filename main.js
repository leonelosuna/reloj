//función flecha

const getHora = () =>{
    //instrucciones
    const fecha = new Date(); //creación de objeto Date
    // console.log(fecha.getHours())
    const tiempo = {hora: fecha.getHours(), minuto: fecha.getMinutes(), segundo: fecha.getSeconds()}
    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
}

setInterval(getHora,1000)

function modificarTexto(){
    let desc = document.querySelector("#textoreloj")
    setTimeout(() => {
        desc.textContent = "RELOJ DIGITAL";
    }, 0)
    setTimeout(() => {
        desc.textContent = "PROGRAMACIÓN";
    }, 3000)
    setTimeout(() => {
        desc.textContent = "LEONEL OSUNA";
    }, 6000)
}

modificarTexto()
setInterval(modificarTexto, 9000)
