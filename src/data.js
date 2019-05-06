


function filterData(pais, code){//agregue pais como parametro de la función



let country_indicator = window.WORLDBANK.CHL;//variable que s etoma y va cambiando con swith
switch (pais) // me permite dar mas indicaciones por cada caso. paises 
{
   
       case "WORLDBANK.BRA": 
       country_indicator = window.WORLDBANK.BRA;//si aprietan brasil toma este let
       break;
       case "WORLDBANK.MEX": 
       country_indicator = window.WORLDBANK.MEX;//si aprietan mexico toma este let
       break;
       case "WORLDBANK.PER": 
       country_indicator = window.WORLDBANK.PER;//si aprietan peru toma este let
       break;       
   default: 
     country_indicator = window.WORLDBANK.CHL;// por defecto chile
}

const filterChile = Object.entries(country_indicator);//convertir objeto en array
const filterCHL= (filterChile[0])[1];

let arrTime = [];
let arrtimeData=[];

for(const index in filterCHL){//recorriendo indicadores
     const filterIndicator= filterCHL[index];//resultado de recorrido
     
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode==code){
              
               arrTime.push(filterIndicator[obj])
              
              arrtimeData=arrTime[0];
               
              
          }
     }  

}
 return (arrtimeData)
 
}

window.filterData = filterData;

function order(arr_data){
     let sort_array = arr_data.sort(function(a, b){
          var keyA = new Date(a.updated_at),
          keyB = new Date(b.updated_at);
          // Compare the 2 dates
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0;
     });

     return sort_array;
}
 
