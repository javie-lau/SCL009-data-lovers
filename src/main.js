
 
document.getElementById("paginaUno").style.display="block";//invisible
document.getElementById("root").style.display="none";//visible

let show="";

document.getElementById("selectCountry").addEventListener("change",()=>{// boton chile
     
     document.getElementById("paginaUno").style.display="none";//invisible
     document.getElementById("root").style.display="block";//visible
     

     document.getElementById("datChile").addEventListener("change",() =>{//select de indicadores
          
          show =window.filterData(document.getElementById("selectCountry").value,document.getElementById("datChile").value);//le estoy enviando parametro a mi funcion, ambos parametros pais y code
          
         // alert(JSON.stringify(show));
          let key = Object.keys(show)
          let value= Object.values(show)
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
               document.getElementById("prueba").innerHTML = " "// para dejar vacio body entre cada tabla
               // Crea las celdas
               for (let i = 0; i < key.length; i++) {
                   
                    keyOne=key[i];
                    valueOne=value[i];
                    
                    if(valueOne){
   
                 
                hilera= document.createElement("tr");
                celda = document.createElement("td");
                celda1= document.createElement("td")
             
               textoCelda = document.createTextNode("año"+keyOne );
               textoCelda1 = document.createTextNode(valueOne);
               
                celda1.appendChild(textoCelda1);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
                hilera.appendChild(celda1);
            

                tblBody.appendChild(hilera);
                    }
               }
                            
                
               tabla.appendChild(tblBody);
               body.appendChild(tabla);
               tabla.setAttribute("border", "2");
                   
             
         
     });

    // ordenar tabla de indicador
    //TableDesc.addEventListener("click", ()=>{
    //alert(show.sort());
//})


     
});



    


         