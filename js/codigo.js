const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("boton-reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataque-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotajugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botonAguaFuego
let botonAguaTierra
let botonTierraFuego
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasEnemigo = 3
let vidasJugador = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge", "assets/hipodoge.jpg", 5)

let Capipepo = new Mokepon("Capipepo","assets/capipepo.jpg", 5 )

let Ratigueya = new Mokepon("Ratigueya","assets/ratigueya.jpg", 5)

let Langostelvis = new Mokepon("Langostelvis", "assets/langostelvis.jpg", 5)

let Tucapalma = new Mokepon("Tucapalma", "assets/tucapalma.jpg", 5)

let Pydos = new Mokepon("Pydos", "assets/pydos.jpg", 5)

Hipodoge.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-fuego"},
)

Capipepo.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-agua"},
    {nombre: "🌱", id: "boton-agua"},
)

Ratigueya.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-tierra"},
)

Langostelvis.ataques.push(
    {nombre: "💧🔥", id: "boton-agua-fuego"},
    {nombre: "💧🔥", id: "boton-agua-fuego"},
    {nombre: "🔥", id: "boton-agua-fuego"},
    {nombre: "🔥", id: "boton-agua-fuego"},
    {nombre: "💧", id: "boton-agua-fuego"},
)

Tucapalma.ataques.push(
    {nombre: "💧🌱", id: "boton-agua-tierra"},
    {nombre: "💧🌱", id: "boton-agua-tierra"},
    {nombre: "💧", id: "boton-agua-tierra"},
    {nombre: "🌱", id: "boton-agua-tierra"},
    {nombre: "💧", id: "boton-agua-tierra"},
)

Pydos.ataques.push(
    {nombre:"🌱🔥", id: "boton-tierra-fuego"},
    {nombre:"🌱🔥", id: "boton-tierra-fuego"},
    {nombre:"🌱", id: "boton-tierra-fuego"},
    {nombre:"🔥", id: "boton-tierra-fuego"},
    {nombre:"🌱", id: "boton-tierra-fuego"},
)
mokepones.push(Hipodoge, Capipepo, Ratigueya, Langostelvis, Tucapalma, Pydos)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none" 
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>        
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    
    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    inputLangostelvis = document.getElementById("Langostelvis")
    inputTucapalma = document.getElementById("Tucapalma")
    inputPydos = document.getElementById("Pydos")
    })
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
    
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML= inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML= inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML= inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML= inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML= inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML= inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("No hay mascota seleccionada, vuelve a intentarlo.")
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
        ataques = mokepones[i].ataques
    }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botonAguaFuego = document.getElementById("boton-agua-fuego")
    botonAguaTierra = document.getElementById("boton-agua-tierra")
    botonTierraFuego = document.getElementById("boton-tierra-fuego")
    botones = document.querySelectorAll(".BAtaque")
}
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🌱") {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "💧🔥") {
                ataqueJugador.push("AGUAFUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "💧🌱") {
                ataqueJugador.push("AGUATIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🌱🔥") {
                ataqueJugador.push("TIERRAFUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones [mascotaAleatorio].ataques
    secuenciaAtaque()
}
function ataqueAleatorioEnemigo(){
    const ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    
        if(ataqueAleatorio == 0){
        ataqueEnemigo.push("FUEGO")
        } else if (ataqueAleatorio == 1){
            ataqueEnemigo.push("AGUA")
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo.push("TIERRA")
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo.push("AGUAFUEGO") 
        } else if (ataqueAleatorio == 4){
            ataqueEnemigo.push("AGUATIERRA")
        } else {
            ataqueEnemigo.push("TIERRAFUEGO")
        }
        console.log(ataqueEnemigo)
        iniciarPelea()
}
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() {

        for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje(" EMPATE ") 

        } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
        indexAmbosOponentes(index, index)
        crearMensaje(" GANASTE")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
        
        } else if(ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "TIERRAFUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    

        } else if(ataqueJugador[index] === "AGUAFUEGO" && ataqueEnemigo[index] === "TIERRAFUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueJugador[index] === "AGUAFUEGO" && ataqueEnemigo[index] === "AGUATIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueJugador[index] === "AGUATIERRA" && ataqueEnemigo[index] === "TIERRAFUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    

        } else if(ataqueJugador[index] === "TIERRAFUEGO" && ataqueEnemigo[index] === "TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje(" GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador     
            
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje(" PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
            
        }
    }  
    revisarVidas()
}
function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("HAN EMPATADO")
    } else if(victoriasJugador > victoriasEnemigo ) {
        crearMensajeFinal(" FELICITACIONES! Ganaste 👌")
    } else {
        crearMensajeFinal(" Lo siento, perdiste 😢")
      }  
}
function crearMensaje(resultado) {
    
    const nuevoAtaqueDelJugador = document.createElement("p")
    const nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal    
    sectionReiniciar.style.display = "block"
}
function reiniciarJuego() {
    location.reload()

}
function aleatorio(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
window.addEventListener("load", iniciarJuego)

