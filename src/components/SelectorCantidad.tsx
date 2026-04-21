import { useState } from 'react'

interface SelectorProps {
    onCantCardsChange: (limite: number) => void;
}

function SelectorCantidad({onCantCardsChange}: SelectorProps) {
  const [cantidad, setCantidad] = useState(35) // Valor inicial

  console.log(cantidad)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(Number(e.target.value))
  }

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCantCardsChange(cantidad)
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <label htmlFor="range-cartas">Mostrar cartas: </label>
      
      <form onSubmit={handleFormSubmit}>
        <input 
          id="range-cartas"
          type="range" 
          min="1" 
          max="121" 
          value={cantidad} 
          onChange={handleChange} 
        />
        <button type="submit" className="btn-actualizar">Cambiar Cantidad de Cartas</button>
      </form>

      {/* Aquí es donde mostramos el número en tiempo real */}
      <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
        {cantidad}
      </span>
    </div>
  )
}

export default SelectorCantidad