async function dolar_hoy(){

    const cotización_dolar = await fetch("https://dolarapi.com/v1/dolares")


    // convertir los datos recibidos en una expresión nativa de javascript
    const cotización_dolar_definitiva = await cotización_dolar.json()

    cotización_dolar_definitiva.forEach(element =>{
        console.log(element)
    })
    

}