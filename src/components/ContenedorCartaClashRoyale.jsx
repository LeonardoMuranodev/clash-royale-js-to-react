import CartaClashRoyale from "./CartaClashRoyale"

const ContenedorCartaClashRoyale = ({cartas, rarezas}) => {
  return (
    <div id="cards-container">
        {/* Usamos map en vez de forEach. La prop 'key' (obligatoria en React) y la ruta correcta de iconUrls */}
        {cartas.map(carta => (
            <CartaClashRoyale 
                key={carta.name} 
                nombre={carta.name} 
                nivelMax={carta.maxLevel} 
                rareza={rarezas[carta.rarity]} 
                urlFoto={carta.iconUrls.medium} 
                urlHeroe={carta.iconUrls.heroMedium || ""} 
                urlEvo={carta.iconUrls.evolutionMedium || ""}
            />
        ))}
    </div>
  )
}

export default ContenedorCartaClashRoyale