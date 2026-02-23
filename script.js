const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNiNDY5NWUxLWY3NjctNDFmOC1hNjdkLWE4NWIxZDRiZWM1OCIsImlhdCI6MTc3MTU5ODE4Niwic3ViIjoiZGV2ZWxvcGVyLzg5ZGIxNzRiLTk4M2MtMWQ0NS00ZDY2LTY1ZmM0OGY3YjA4NiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDAuNjMuMjMuOTciXSwidHlwZSI6ImNsaWVudCJ9XX0.CW24LD_mcNKfQqMPbSDcARTncFAA4jbU9-vMRWENtTPerZSWT59KjM6qb6_aSjoIPZ9f6BNFTPaJHNCrJV9i7w"

const API_KEY_2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA2MTkxZjg3LTA1NDktNGYxOC1iNTM2LTc5MDdlYWU5NTE2YiIsImlhdCI6MTc3MTYwMzI5Miwic3ViIjoiZGV2ZWxvcGVyLzg5ZGIxNzRiLTk4M2Mt MWQ0NS00ZDY2LTY1ZmM0OGY3YjA4NiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.Y6p-6p-ZQeEgZX3ATQBBs4Uz2myH8seCKMMrR2T2F05ihXoaLXcdC4sCJs_ChyOxwq076s_rSR01Qp6sjD5UDQ"

// Configuraciones de la API
const API_CONFIG = {
    BASE_URL: 'https://proxy.royaleapi.dev/v1/cards',
    HEADERS: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY_2
    }
};

//Funcion Basica de obtener las cartas
async function obtener_cartas() {
    try {
        const response = await fetch(API_CONFIG.BASE_URL, {
            headers: API_CONFIG.HEADERS
        })

        const data = await response.json()

        return data.items
    }
    catch(error) {
        console.log(error)
    }
}

async function renderizar_cartas(limite) {
    const container = document.getElementById("cards-container")
    const todasLasCartas = await obtener_cartas();
    const cartas = todasLasCartas.slice(0, limite);
    console.log("Cantidad de cartas a mostrar: ", cartas.length)
    cartas.forEach(carta => {
        const carta_html = document.createElement('div')
        carta_html.innerHTML = crear_carta(carta)
        carta_html.classList.add("card")
        container.appendChild(carta_html)
    });
}

function crear_carta(carta) {

    let rareza = {
        common: "Común",
        rare: "Especial",
        epic: "Epíca",
        legendary: "Legendaria",
        champion: "Campeon"
    }
    return `
            <h3> ${carta.name} </h3>
            <p>Nivel Maximo:  ${carta.maxLevel}</p>
            <p>Coste de elixir: ${carta.elixirCost}</p>
            <p>Rareza: ${rareza[carta.rarity]}</p>
            <img src="${carta.iconUrls.medium}" alt=""></img>
            ${carta.iconUrls.evolutionMedium ? `<button type="button"class="evo-button">Ver Evo</button>` : ""}
            ${carta.iconUrls.heroMedium ? `<button type="button" class="heroe-button">Ver Heroe</button>` : ""}
    `
}

const cardsContainer = document.getElementById("cards-container")
cardsContainer.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.classList.contains("evo-button")) {

    }
    if (event.target.classList.contains("heroe-button")) {

    }
})


console.log("hola")

let cartas = await obtener_cartas()
console.log(cartas)

await renderizar_cartas(35)