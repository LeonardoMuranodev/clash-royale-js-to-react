import CartaClashRoyale from "./CartaClashRoyale"
import type { Carta } from "../types/clash"
interface ContenedorCartaClashRoyaleProps {
  cartas: Carta[],
  rarezas: Record<string, string>
}

const ContenedorCartaClashRoyale = ({cartas, rarezas}: ContenedorCartaClashRoyaleProps) => {
  return (
    <div id="cards-container">
        {/* Usamos map en vez de forEach. La prop 'key' (obligatoria en React) y la ruta correcta de iconUrls */}
        {cartas.map(carta => (
            <CartaClashRoyale 
                key={carta.name} 
                nombre={carta.name} 
                nivelMax={carta.maxLevel}
                /*Lo que hace es extraer todas las keys posibles con keyof, y despues le digo que son del tipo rarezas*/
                rareza={rarezas[carta.rarity as keyof typeof rarezas]} 
                urlFoto={carta.iconUrls.medium} 
                urlHeroe={carta.iconUrls.heroMedium || ""} 
                urlEvo={carta.iconUrls.evolutionMedium || ""}
            />
        ))}
    </div>
  )
}

export default ContenedorCartaClashRoyale