import { useState } from "react";

interface CartaProps {
    nombre: string,
    nivelMax: number,
    rareza: string,
    urlFoto: string,
    urlHeroe?: string,
    urlEvo?: string
}

type Vista = "normal" | "evo" | "heroe";
type urlImagen = string | undefined

function CartaClashRoyale({ nombre, nivelMax, rareza, urlFoto, urlHeroe, urlEvo }: CartaProps) {
    const [vistaActual, setVistaActual] = useState<Vista>("normal");

    let urlImagen: urlImagen = urlFoto;
    if (vistaActual === "evo") {
        urlImagen = urlEvo;
    } else if (vistaActual === "heroe") {
        urlImagen = urlHeroe;
    }
    
    return (
        <div className="card">
            <h3>{nombre}</h3>
            <p>Nivel Máximo: {nivelMax}</p> 
            <p>Rareza: {rareza}</p>
            
            <img src={urlImagen} alt={nombre} />
            
            <div className="buttons-container">
                {/* Este boton existe solo si la url de la evo Existe*/}
                {urlEvo && (
                    <button 
                        className="evo-button"
                        onClick={() => setVistaActual(vistaActual === "evo" ? "normal" : "evo")}
                    >
                        {vistaActual === "evo" ? "Volver" : "Ver Evo"}
                    </button>
                )}

                {urlHeroe && (
                    <button 
                        className="heroe-button"
                        onClick={() => setVistaActual(vistaActual === "heroe" ? "normal" : "heroe")}
                    >
                        {vistaActual === "heroe" ? "Volver" : "Ver Héroe"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default CartaClashRoyale