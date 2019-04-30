
 
document.getElementById("paginaUno").style.display="block";//invisible
document.getElementById("root").style.display="none";//visible
let show;

document.getElementById("chile").addEventListener("click",()=>{
     
     document.getElementById("paginaUno").style.display="none";//invisible
     document.getElementById("root").style.display="block";//visible
     
     document.getElementById("datChile").addEventListener("change",() =>{
          
          show =filterData(document.getElementById("datChile").value);//le estoy enviando parametro a mi funcion
          console.table(show)
          
          let prueba = document.getElementById("prueba");
          // Crea un elemento <table> y un elemento <tbody>
          let tabla = document.createElement("table");
          let tblBody = document.createElement("tbody");
     
      // Crea las celdas
     for (let i = 0; i < show.length; i++) {
       // Crea las hileras de la tabla
       var hilera = document.createElement("tr");
       for (let j = 0; j < show[i].length; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = document.createElement("td");
          let textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
          // posiciona el <tbody> debajo del elemento <table>
          tabla.appendChild(tblBody);
          // appends <table> into <body>
          prueba.appendChild(tabla);
          // modifica el atributo "border" de la tabla y lo fija a "2";
          tabla.setAttribute("border", "2");
        }
        
     
     }   
          
     });
     
         
});
// Obtener la referencia del elemento body


    


         