const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNiNDY5NWUxLWY3NjctNDFmOC1hNjdkLWE4NWIxZDRiZWM1OCIsImlhdCI6MTc3MTU5ODE4Niwic3ViIjoiZGV2ZWxvcGVyLzg5ZGIxNzRiLTk4M2MtMWQ0NS00ZDY2LTY1ZmM0OGY3YjA4NiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDAuNjMuMjMuOTciXSwidHlwZSI6ImNsaWVudCJ9XX0.CW24LD_mcNKfQqMPbSDcARTncFAA4jbU9-vMRWENtTPerZSWT59KjM6qb6_aSjoIPZ9f6BNFTPaJHNCrJV9i7w"

const API_CONFIG = {
    TOKEN: API_KEY,
    BASE_URL: 'https://api.clashroyale.com/v1/cards'
};

const HEARDERS = {
    Authorization: "Bearer " + API_CONFIG.TOKEN
}

async function obtener_cartas(params) {
    try {
        const response = await fetch(API_CONFIG.BASE_URL, {
            headers: HEARDERS
        })

        const data = await response.json()

        return data
    }
    catch(error) {
        console.log(error)
    }
    
}

let cartas = await obtener_cartas()
console.log(cartas)