import { useState } from "react";
import { useEffect } from "react";
import CustomMain from "./components/CustomMyMain";
import {rarezas} from "./data.json"
import { obtenerCartas } from "./utils/api";
import CustomFooter from "./components/CustomFooter";
import CustomHeader from "./components/CustomHeader";


function App() {

   // ESTADO: Acá guardamos las cartas. Empieza como un array vacío [].
    const [cartas, setCartas] = useState([]);

    const totalCartas = cartas?.length
    const totalEvo = cartas?.filter(c => c.iconUrls.evolutionMedium).length
    const totalHeroe = cartas?.filter(c => c.iconUrls.heroMedium).length

    // effect: Se ejecuta automáticamente cuando App aparece en pantalla
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerCartas(35);
                setCartas(data);
            } catch(e) {
                console.error("Error al cargar cartas:", e);
            }
        };

        fetchData();
        
    }, []); // El array vacío significa: "Ejecutá esto una sola vez"

    console.log(totalCartas)
    
    const handleCantCardsChange = (limite)  => {
        const fetchData = async () => {
            try {
                const data = await obtenerCartas(limite);
                setCartas(data);
            } catch(e) {
                console.error("Error al cargar cartas:", e);
            }
        };

        fetchData();
    }

  return (
    <>
        <CustomHeader totalCartas={totalCartas} totalEvo={totalEvo} totalHeroe={totalHeroe} onCantCardsChange={handleCantCardsChange}></CustomHeader>
        <CustomMain cartas={cartas} rarezas={rarezas}></CustomMain>
        <CustomFooter></CustomFooter>
    </>
  )
}

export default App
