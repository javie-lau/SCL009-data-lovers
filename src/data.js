
function filterData(code){

const filterChile = Object.entries(WORLDBANK.CHL);//convertir objeto en array
const filterCHL= (filterChile[0])[1];
//console.log(filterCHL);// indicadores de chile
let arrTime = [];
let arrtimeData=[];
//let datOutk=[];
//let dataOutv=[];
//let data2d=[];
for(const index in filterCHL){//recorriendo indicadores
     const filterIndicator= filterCHL[index];//resultado de recorrido
     
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode==code){
              
               arrTime.push(filterIndicator[obj])
              //console.log(arrTime[0]);
               arrtimeData=arrTime[0];
               //console.table(arrtimeData);
               /* const propiedades= Object.keys(arrtimeData);//propiedades de data
               datOutk=propiedades;
              for(let i= 0; i< propiedades.length;i++){
                    data2d.push([propiedades[i],arrtimeData[propiedades[i]]]);
                    console.log(data2d);
                   
               
               console.log(propiedades);
               const valores = Object.values(arrtimeData);//valores de data
               dataOutv=valores;
               console.log(valores);
               
               

               }
               //console.log(`${propiedades},${valores}`);*/
               
              
          }
     }  

}
 return (arrtimeData)
  
}

window.filterData


