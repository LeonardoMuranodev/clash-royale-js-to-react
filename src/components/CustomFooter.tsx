function CustomFooter() {
  
    const anio = new Date().getFullYear()
    //const fechaCompleta = new Date().toString()
    //console.log(anio)
    
    return (
    <footer>Copy right {anio}- Todos los derechos reservados</footer>
  )
}

export default CustomFooter