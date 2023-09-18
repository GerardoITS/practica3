function recolectar()
{
    const dato1 = document.getElementById("inp_d1").value
    const dato2 = document.getElementById("inp_d2").value
    const t_op = document.getElementById("slt_operacion").value
    // 0 intensidad
    // 1 resistencia
    // 2 tensión
    const respuesta = calcular(dato1,dato2,t_op)

    document.getElementById("h_resultado").textContent = 'Resultado: ' + respuesta
    console.log(respuesta)

}

function calcular(d1,d2,t_op)
{
    let resultado= null
    if(t_op == 0){
        resultado = d2 / d1 + ' Ampere'
    }
    if(t_op == 1){
        resultado = d2 / d1 + ' Ohm'
        
    }
    if(t_op == 2){
        resultado = d1 * d2 + ' Volt'
        
    }
   
    // el retorno de la función calcular
    return resultado
}

function cambiar_label(){
    const t_op = document.getElementById("slt_operacion").value
    // 0 intensidad
    // 1 resistencia
    // 2 tensión

    if(t_op == 0){
        document.getElementById("lbl_1").textContent = 'Resistencia (Ohm)'
        document.getElementById("lbl_2").textContent = 'Tensión (Volt)'
    }
    if(t_op == 1){
        document.getElementById("lbl_1").textContent = 'Intensidad (Ampere)'
        document.getElementById("lbl_2").textContent = 'Tensión (Volt)'        
    }
    if(t_op == 2){
        document.getElementById("lbl_1").textContent = 'Intensidad (Ampere)'
        document.getElementById("lbl_2").textContent = 'Resistencia (Ohm)'        
    }
    

    
    
}