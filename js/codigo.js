const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("boton-reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonAguaFuego = document.getElementById("boton-agua-fuego")
const botonAguaTierra = document.getElementById("boton-agua-tierra")
const botonTierraFuego = document.getElementById("boton-tierra-fuego")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("Hipodoge")
const inputCapipepo = document.getElementById("Capipepo")
const inputRatigueya = document.getElementById("Ratigueya")
const inputLangostelvis = document.getElementById("Langostelvis")
const inputTucapalma = document.getElementById("Tucapalma")
const inputPydos = document.getElementById("Pydos")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataque-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataque-del-enemigo")


let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none" 
    sectionReiniciar.style.display = "none"
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonAguaFuego.addEventListener("click", ataqueAguaFuego)
    botonAguaTierra.addEventListener("click", ataqueAguaTierra)
    botonTierraFuego.addEventListener("click", ataqueTierraFuego)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

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
    const mascotaAleatorio = aleatorio(1,6)
    
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
    const ataqueAleatorio = aleatorio(1,6)
    
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
    
    const nuevoAtaqueDelJugador = document.createElement("p")
    const nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonAguaFuego.disabled = true
    botonAguaTierra.disabled = true
    botonTierraFuego.disabled = true

    
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()

}
    function aleatorio(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
window.addEventListener("load", iniciarJuego)

