let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display = "none"
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)


    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonAguaFuego = document.getElementById("boton-agua-fuego")
    botonAguaFuego.addEventListener("click", ataqueAguaFuego)
    let botonAguaTierra = document.getElementById("boton-agua-tierra")
    botonAguaTierra.addEventListener("click", ataqueAguaTierra)
    let botonTierraFuego = document.getElementById("boton-tierra-fuego")
    botonTierraFuego.addEventListener("click", ataqueTierraFuego)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {

let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
sectionSeleccionarMascota.style.display = "none"

let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML= "Hipodoge"
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML= "Capipepo"
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML= "Ratigueya"
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML= "Langostelvis"
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML= "Tucapalma"
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML= "Pydos"
    } else {
        alert("No hay mascota seleccionada, vuelve a intentarlo.")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML= "Hipodoge"
        } else if (mascotaAleatorio == 2){
            spanMascotaEnemigo.innerHTML= "Capipepo"
        } else if (mascotaAleatorio == 3){
            spanMascotaEnemigo.innerHTML= "Ratigueya"  
        } else if (mascotaAleatorio == 4){
            spanMascotaEnemigo.innerHTML= "Langostelvis" 
        } else if (mascotaAleatorio == 5){
            spanMascotaEnemigo.innerHTML= "Tucapalma" 
        } else if (mascotaAleatorio == 6){
            spanMascotaEnemigo.innerHTML= "Pydos" 
        }
 }

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAguaFuego() {
    ataqueJugador = "AGUAFUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAguaTierra() {
    ataqueJugador = "AGUATIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueTierraFuego() {
    ataqueJugador = "TIERRAFUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    
        if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = "AGUA"
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = "TIERRA"  
        } else if (ataqueAleatorio == 4){
            ataqueEnemigo = "AGUAFUEGO" 
        } else if (ataqueAleatorio == 5){
            ataqueEnemigo = "AGUATIERRA" 
        } else if (ataqueAleatorio == 6){
            ataqueEnemigo = "TIERRAFUEGO" 
        }

        combate()
}

function combate() {

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje(" EMPATE ")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
     
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "AGUAFUEGO" && ataqueEnemigo == "TIERRAFUEGO") {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "AGUAFUEGO" && ataqueEnemigo == "AGUATIERRA") {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje(" PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }
    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0 ) {
        crearMensajeFinal(" FELICITACIONES! Ganaste 👌")
        alert
     } else if(vidasJugador == 0) {
        crearMensajeFinal(" Lo siento, perdiste 😢")
      }  
    }



function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataque-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataque-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let botonAguaFuego = document.getElementById("boton-agua-fuego")
    botonAguaFuego.disabled = true
    let botonAguaTierra = document.getElementById("boton-agua-tierra")
    botonAguaTierra.disabled = true
    let botonTierraFuego = document.getElementById("boton-tierra-fuego")
    botonTierraFuego.disabled = true

    let sectionReiniciar = document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()

}
    function aleatorio(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
window.addEventListener("load", iniciarJuego)

