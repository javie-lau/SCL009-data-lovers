

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


function average (numbers) {

     let sum = 0;
     let i = 0;
     var nuevoArray= Object.values(numbers);
      
     for (let index in nuevoArray){
          newValue=parseFloat(nuevoArray[index]);

          if(newValue){
            sum += parseFloat(newValue);
            i += 1;
          }
         
        }     
     return sum / i;
   }
   window.average = average;
/*
const sortData=(show, sortBy, sortOrder)=>{
    return show.sort((a,b)=>{
         let x=a[sortBy],
             y=b[sortBy];
             if(sortOrder==="asc"){
                  return((x<y)? -1 :((x>y)? 1: 0));
             }
             if(sortOrder === "desc"){
                  return((x>y)? -1 :((x<y) ? 1: 0));
             }
    }
    )};
   window.sortData = sortData;*/
   //promedio
  /* function average (valueOne){
        let sum= 0;
        if(!valueOne.length){
             return sum;
        }
        for(let i=0; i<valueOne.length;i++){
             sum += valueOne[i]
        }
        return sum/valueOne.length;
   }
   
   window.average=average;*/
  
//devuelve el indice del forindicador

/*
let orderDAta= (valueOne,sortBy,sortOrder) =>{
     let order=[];
     switch(sortOrder){
      case "TableAsc":
      if(sortBy === ""){
         order = valueOne.sort((a,b)=> (a. > b.  1: -1));
      }
      else(){

      }
      break;
      case "TableDesc":
      if(){

     }
     else(){

     }
     break;
     default:
     }
     return order;
};
window.orderDAta=orderDAta

//computeStats(data) funcion para sacar promedio

 const filterMujeres= (data,condition) =>{
     let result= data.filter(element=>{ 
          return element.indicatorName.includes("mujeres")});
          return result;
 }
 window.filterMujeres= filterMujeres*/