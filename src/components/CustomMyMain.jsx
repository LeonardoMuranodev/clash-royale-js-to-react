import CofreSorpresa from "./CofreSorpresa"
import ContenedorCartaClashRoyale from "./ContenedorCartaClashRoyale"

const CustomMain = ({cartas, rarezas}) => {
  return (
    <main>
        <h1> Enciclopedia de Clash Royale (React)</h1>
        <CofreSorpresa></CofreSorpresa>
        <ContenedorCartaClashRoyale cartas={cartas} rarezas={rarezas}></ContenedorCartaClashRoyale>
    </main>
  )
}

export default CustomMain