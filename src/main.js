google.load('visualization', '1.0', { 'packages': ['corechart'] });

document.getElementById("paginaUno").style.display = "block";//invisible
document.getElementById("root").style.display = "none";//visible

document.getElementById("logo").addEventListener("click", () => {
     document.getElementById("paginaUno").style.display = "block";//invisible
     document.getElementById("root").style.display = "none";//visible   
})

let show = "";
let keyOne = "";
let valueOne = "";
let body = "";
let chartOne = "";
let strings = "";
let chartTwo = "";
let strings2 = "";
document.getElementById("buttonIndicator").addEventListener("click", () => {// boton chile

     document.getElementById("paginaUno").style.display = "none";//invisible
     document.getElementById("root").style.display = "block";
});//visible
document.getElementById("selectCountry").addEventListener("change", () => {// boton chile

     document.getElementById("datChile").addEventListener("change", () => {//select de indicadores

          show = window.filterData(document.getElementById("selectCountry").value, document.getElementById("datChile").value);//le estoy enviando parametro a mi funcion, ambos parametros pais y code

          // alert(JSON.stringify(show));
          let key = Object.keys(show)
          let value = Object.values(show)

          value = value.map(val => val ? val : 0);//itera y pone cero a los valores default

          //variables de tabla
          let hilera = "";
          let celda = "";


          let celda1 = "";
          let textoCelda = "";
          let textoCelda1 = "";
          //TABLA DINAMICA  
          // Obtener la referencia del elemento body
          body = document.getElementById("prueba");

          // Crea un elemento <table> y un elemento <tbody>
          let tabla = document.createElement("table");
          let tblBody = document.createElement("tbody");
          document.getElementById("prueba").innerHTML = " "// para dejar vacio body entre cada tabla
          // Crea las celdas
          for (let i = 0; i < key.length; i++) {

               keyOne = key[i];
               valueOne = value[i];


               if (valueOne) {


                    hilera = document.createElement("tr");
                    celda = document.createElement("td");
                    celda1 = document.createElement("td")

                    textoCelda = document.createTextNode("año " + keyOne);
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
          tabla.setAttribute("align", "center");
          tabla.setAttribute("class", "estiloTabla");

          google.charts.setOnLoadCallback(drawChart);


          function drawChart() {
               var data = google.visualization.arrayToDataTable([key, value])
               var options = {
                    title : 'Data por años',
                    vAxis: {title: 'Valor'},
                    hAxis: {title: 'Año'},
                    seriesType: 'bars',
                    series: {10: {type: 'line'}}
                  };
               var chart = new google.visualization.ComboChart(document.getElementById("charts"));
               chart.draw(data, options); 
                   
                   
               
          }

          /* document.getElementById("TableDesc").addEventListener("click",()=>{

                let sortData=window.orderDAta(show);
                console.log(sortData);

           });*/



          document.getElementById("promedio").addEventListener("click", () => {//boton de promedio
               document.getElementById("promedioText").innerHTML = " "//para que se limpie el valor de promedio
               let idText = document.getElementById("promedioText")
               let text = document.createElement("text");
               const travel_average = window.average(show);
               //let NodeText = document.createTextNode
               text.innerHTML = ("El promedio de los valores es :" + travel_average);
               idText.appendChild(text);



          });
     });

});

