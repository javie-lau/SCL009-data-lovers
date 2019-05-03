
 
document.getElementById("paginaUno").style.display="block";//invisible
document.getElementById("root").style.display="none";//visible
let show;


document.getElementById("chile").addEventListener("click",()=>{
     
     document.getElementById("paginaUno").style.display="none";//invisible
     document.getElementById("root").style.display="block";//visible
     
     document.getElementById("datChile").addEventListener("change",() =>{
          
          show = filterData(document.getElementById("datChile").value);//le estoy enviando parametro a mi funcion
          console.table(show)
          let key = Object.keys(show)
          console.log(key);
          let value= Object.values(show)
          console.log(value);
          //variables de tabla
          let hilera="";
          let celda="";
          let keyOne="";
          let valueOne="";
          let celda1="";
          let textoCelda="";
          let textoCelda1="";
            //TABLA DINAMICA  
              // Obtener la referencia del elemento body
             let body = document.getElementById("prueba");
              
               // Crea un elemento <table> y un elemento <tbody>
               let tabla   = document.createElement("table");
               let tblBody = document.createElement("tbody");
              
               // Crea las celdas
               for (let i = 0; i < key.length; i++) {
                   
                    keyOne=key[i];
                    valueOne=value[i];
                    console.log(keyOne)
                    
                 // Crea las hileras de la tabla
              
                 
                hilera= document.createElement("tr");
                celda = document.createElement("td");
                celda1= document.createElement("td")
             
               textoCelda = document.createTextNode("año"+keyOne );
               textoCelda1 = document.createTextNode("data" +valueOne);
               
                celda1.appendChild(textoCelda1);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
                hilera.appendChild(celda1);
            

                tblBody.appendChild(hilera);

               }
                 // agrega la hilera al final de la tabla (al final del elemento tblbody)
               
                
               // posiciona el <tbody> debajo del elemento <table>
               tabla.appendChild(tblBody);
               // appends <table> into <body>
               body.appendChild(tabla);
               // modifica el atributo "border" de la tabla y lo fija a "2";
               tabla.setAttribute("border", "2");
                   
     
         
     });
        
});
// Obtener la referencia del elemento body


    


         