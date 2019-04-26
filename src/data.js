
function filterData(code){

const filterChile = Object.entries(WORLDBANK.CHL);
const filterCHL= (filterChile[0])[1];
let arrTime = [];
for(const index in filterCHL){
     const filterIndicator= filterCHL[index];
     
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode==code){
              
               arrTime.push(filterIndicator[obj])
               console.log(arrTime[0]);
          }
     }

} 
 return arrTime[0]
  
}


//window.example = example; probar con esto



