# 👑 Enciclopedia de Clash Royale: De Vanilla JS a React

Bienvenido/a al repositorio oficial del proyecto "Enciclopedia de Clash Royale", desarrollado para el curso de **Introducción a React** de **Tecno3F - Programá tu futuro**.

Este proyecto educativo está diseñado para ilustrar la transición de un paradigma de programación **imperativo** (Vanilla JavaScript) a uno **declarativo** (React). A través del consumo de una API real de Supercell, comparamos cómo se resuelven los mismos problemas de interfaz de usuario (UI) usando ambas tecnologías.

---

## 📚 Propósito del Proyecto

Si sos alumno/a y estás explorando este código, el objetivo no es solo que veas cómo armar una galería de cartas, sino que comprendas **por qué** usamos librerías como React en la industria actual. 

El repositorio está dividido en dos carpetas principales que resuelven el mismo problema de formas muy distintas:

1. `📁 con-javascript`: La solución tradicional usando manipulación directa del DOM.
2. `📁 con-react`: La solución moderna usando Componentes, Estados y Ciclo de Vida.

---

## 🔍 Explicación del Código: Paso a Paso

### Parte 1: El enfoque en Vanilla JavaScript (`con-javascript/script.js`)
En esta versión, le damos instrucciones precisas al navegador de **cómo** hacer cada cosa.

* **Consumo de la API:** Usamos una función `async` llamada `obtener_cartas()` que realiza un `fetch` a la API para traer los datos.
* **Renderizado Imperativo:** La función `renderizar_cartas()` toma esos datos, usa un `forEach`, y por cada carta utiliza `document.createElement('div')` y `innerHTML` para inyectar texto HTML al navegador.
* **El Problema del Estado (La Memoria):** Para que las cartas puedan alternar entre su imagen normal, evolución o héroe, nos vimos obligados a "esconder" las URLs de las imágenes dentro del mismo HTML usando *Data Attributes* (ej: `data-urlevo`).
* **Delegación de Eventos Compleja:** En lugar de darle un evento a cada botón, creamos un `addEventListener` global en el contenedor principal. Cuando se hace clic, el código debe "escalar" el DOM buscando a los hermanos y padres (`target.closest(".buttons-container").previousElementSibling`) para cambiar la imagen. Esto es funcional, pero frágil y difícil de mantener.

---

### Parte 2: El enfoque en React (`con-react/index.html`)
Aquí cambiamos al paradigma **declarativo**. Le decimos a React **qué** queremos mostrar, y él se encarga de actualizar el DOM por nosotros. 
*(Nota: Para este proyecto introductorio, React se importa directamente desde un CDN sin herramientas de compilación como Vite, usando Babel para traducir el código JSX en tiempo real).*

* **Componentes Independientes:** Creamos una función `CartaClashRoyale` que representa una sola tarjeta. Ya no armamos grandes *Template Strings*, sino que escribimos **JSX** (sintaxis similar a HTML) directamente en JavaScript.
* **El Estado (`useState`):** Resolvimos el problema de la "memoria". En lugar de guardar datos en los atributos del HTML, cada carta tiene su propia variable de estado (`vistaActual`), que puede ser "normal", "evo" o "heroe". Si el estado cambia, la imagen se actualiza sola de forma reactiva, sin buscar elementos hermanos en el DOM.
* **Efectos Secundarios (`useEffect`):** El consumo de la API ya no está "suelto" en el archivo. Utilizamos el Hook `useEffect` en el componente principal `App` para asegurar que las cartas se busquen una única vez en cuanto la aplicación aparece en la pantalla.
* **Renderizado de Listas (`.map`):** En lugar de inyectar HTML manualmente en un ciclo `forEach` o usar `.appendChild()`, usamos el método `.map()` sobre el array de cartas en el estado, delegándole a React la tarea de renderizar los componentes de forma eficiente.

---

## 🚀 Cómo ejecutar el proyecto localmente

Dado que ambas versiones utilizan módulos de JavaScript o peticiones HTTP que requieren un servidor, no podés simplemente hacer doble clic en el archivo HTML. 

1. Clona este repositorio en tu computadora.
2. Abre la carpeta en **Visual Studio Code**.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre `con-javascript/index.html` o `con-react/index.html` y selecciona **"Open with Live Server"**.

---

## 👨‍🏫 Instructores
 - **Leonardo Murano**
 - **Luis Mazo**
 - **Jennifer Goldfeld**

*Desarrollado para la Municipalidad de Tres de Febrero (Tecno3F).*
