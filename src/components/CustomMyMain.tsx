import CofreSorpresa from "./CofreSorpresa"
import ContenedorCartaClashRoyale from "./ContenedorCartaClashRoyale"
import type { Carta } from "../types/clash"

interface CustomMainProps {
  cartas: Carta[],
  rarezas: Record<string, string>
}


const CustomMain = ({cartas, rarezas}: CustomMainProps) => {
  return (
    <main>
        <h1> Enciclopedia de Clash Royale (React)</h1>
        <CofreSorpresa></CofreSorpresa>
        <ContenedorCartaClashRoyale cartas={cartas} rarezas={rarezas}></ContenedorCartaClashRoyale>
    </main>
  )
}

export default CustomMain