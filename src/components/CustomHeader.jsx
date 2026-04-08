import SelectorCantidad from "./SelectorCantidad"

function CustomHeader({totalCartas, totalEvo, totalHeroe, onCantCardsChange}) {
  
    return (
    <header>
        Estadisticas en vivo
        <ul>
            <li>Total de cartas {totalCartas}</li>
            <li>Total de cartas con evolucion {totalEvo}</li>
            <li>Total de cartas con heroe {totalHeroe}</li>
        </ul>
        <SelectorCantidad onCantCardsChange={onCantCardsChange}></SelectorCantidad>
    </header>
  )
}

export default CustomHeader