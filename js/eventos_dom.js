//Ejercicio 1.
//Manera 1

//Paso 1: Registrar evento
// document.addEventListener("mousemove", mouseMovement)

// function mouseMovement(event){
//     const mouse_position = document.getElementById("mousePosition")
//     mouse_position.textContent = `Posicion del mouse: X: ${event.clientX} Y: ${event.clientY}`
//     console.log("X", event.clientX)
// }

//Manera 2
document.addEventListener("mousemove", (event)=>{
    const mouse_position = document.getElementById("mousePosition")
    mouse_position.innerHTML = `Posicion del mouse: X: ${event.clientX} Y: ${event.clientY}`
})

//Ejercicio 2
document.getElementById("submit1").onclick = (evt)=>{
    evt.preventDefault();
    let fname_val = document.getElementById("fname").value
    let lname_val = document.getElementById("lname").value
    document.getElementById("namep").innerHTML = "Nombre completo: " + fname_val + " " + lname_val
}

//Ejercicio 3
document.getElementById("insertRow").onclick = ()=>{
    const table = document.getElementById("sampleTable")
    const new_row = table.insertRow(-1)
    const row = table.getElementsByTagName("tr")[0]
    const num_cells = row.getElementsByTagName("td").length
    const num_rows = table.getElementsByTagName("tr").length
    for (let i = 0; i<num_cells; i++){
        let cell = new_row.insertCell(i)
        cell.innerHTML = `Row ${num_rows} column ${i+1}`
    }
}

document.getElementById("insertColumn").onclick = ()=>{
    const table = document.getElementById("sampleTable")
    const num_rows = table.getElementsByTagName("tr").length
    for(let i=0; i<num_rows; i++){
        let row = table.getElementsByTagName("tr")[i]
        const num_cells = row.getElementsByTagName("td").length
        let cell = row.insertCell(-1)
        cell.innerHTML = `Row ${i+1} column ${num_cells+1}`
    }
}
//Ejercicio 4
document.getElementById("changeContent").onclick = ()=>{
    const table = document.getElementById("myTable")
    const row_num = document.getElementById("row_num").value
    const col_num = document.getElementById("col_num").value
    const text_val = document.getElementById("text_val").value
    const row = table.getElementsByTagName("tr")[row_num-1]
    const cell = row.getElementsByTagName("td")[col_num-1]
    cell.innerHTML = text_val
}

const colors = ["Black", "White", "Green", "Red", "Blue", "Yellow", "Brown", "Purple", "Gray", "Cyan", "Beige", "Light Green", "Light Salmon", "Aquamarine"]
//Ejercicio 5
document.getElementById("addColor").onclick = ()=>{
    const select = document.getElementById("colorSelect")
    const new_color = document.createElement("option")
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    new_color.value = randomColor
    new_color.innerHTML = randomColor
    select.appendChild(new_color)

}

document.getElementById("removeColor").onclick = ()=>{
    const select = document.getElementById("colorSelect")
    select.remove(0)
}

//Ejercicio 6
document.getElementById("imageOver").onmouseover = ()=>{
    let value1 = 300 + Math.floor(Math.random() * 300)
    let value2 = 300 + Math.floor(Math.random() * 300)
    document.getElementById("imageSize").innerHTML = `Width: ${value1}, Height: ${value2}`
    document.getElementById("imageOver").src = `http://placekitten.com/${value1}/${value2}`
}
