
function filterData(code){

const filterChile = Object.entries(WORLDBANK.CHL);//convertir objeto en array
const filterCHL= (filterChile[0])[1];
//console.log(filterCHL);// indicadores de chile
let arrTime = [];
let arrtimeData=[];
for(const index in filterCHL){//recorriendo indicadores
     const filterIndicator= filterCHL[index];//resultado de recorrido
     
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode==code){
              
               arrTime.push(filterIndicator[obj])
               console.log(arrTime[0]);
               arrtimeData=arrTime[0];
               
              
     }
     }
} 
 return arrtimeData
  
}




