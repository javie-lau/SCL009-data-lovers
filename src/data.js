//let {PER,MEX,BRA,CHL} = window.WORLDBANK;
/*
let PER = PER; 
let MEX = MEX;
let BRA = BRA;
let CHL = CHL;*/

function filterData(pais, code){//agregue pais como parametro de la función

let country_indicator = "";//variable que s etoma y va cambiando con swith
switch (pais) // me permite dar mas indicaciones por cada caso. paises 
{
     case "WORLDBANK.CHL": 
     country_indicator = window.WORLDBANK.CHL;//si aprietan brasil toma este let
     break;
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
const filterCHL= (filterChile[0])[1];//filtrando indicadores

let arrTime = [];
let arrtimeData=[];


for(const index in filterCHL){//recorriendo indicadores
     const filterIndicator= filterCHL[index];//resultado de recorrido
     
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode==code){
              
               arrTime.push(filterIndicator[obj])
              
              arrtimeData=arrTime[0];//entrando a la data
              
              
              
          }
     }  

}
 return (arrtimeData)
 
}

window.filterData = filterData;


function average (numbers) {//promedio
     let newValue="";
     let sum = 0;
     let i = 0;
     let nuevoArray= Object.values(numbers);//array de los valores del objeto
      
     for (let index in nuevoArray){//recorrer ese array
           newValue=parseFloat(nuevoArray[index]);//convertirlo a  numero

          if(newValue){//para que no cuente los lugares vacios
            sum += parseFloat(newValue);
            i += 1;
          }
         
        }     
     return sum / i;
   }
   window.average = average;



/*
function orderDAta(arr){

     let newArr=Object.keys(arr);
     for(let index in newArr){
          newArrTwo=parseFloat(newArr[index]);
          
     }
     newArrTwo.sort(a, b) {
          
          if (a.value > b.value) {
            return 1;
          }
          if (a.value < b.value) {
            return -1;
          }
          return 0;
        });
          
        


}


window.orderDAta=orderDAta*/

