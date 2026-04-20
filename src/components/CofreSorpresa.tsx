import { useState } from "react"


function CofreSorpresa() {

    const [premio, setPremio] = useState("")

    const listaPremios = [
            "🎁 ¡Cofre Legendario!",
            "💎 500 Gemas",
            "🪙 10.000 de Oro",
            "🃏 3 Fragmentos de Evo de Puercos Reales",
            "🗡️ 1 duende",
            "⚡ 50 Fragmentos de Heroe"
        ]

    const handleSupriseChestButton = () => {
        const indice = Math.floor((Math.random() * listaPremios.length)) 
        setPremio(listaPremios[indice])
    }

    return (
        <div className="cofre-sorpresa">
            <button
            onClick={handleSupriseChestButton}
            >
            Abrir Cofre Sorpresa
            </button>
            <div className="premio">{premio && "¡Tu premio es: !"}{premio}</div>
        </div>
    )
}

export default CofreSorpresa