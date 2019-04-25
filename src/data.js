/* Manejo de data  */
const filterChile = Object.entries(WORLDBANK.CHL);

const filterCHL= (filterChile[0])[1];
//let pruebaUno=[];
for(const index in filterCHL){
     const filterIndicator= filterCHL[index];
    // console.log(filterIndicator);
    
     for (let obj in filterIndicator){
          if(filterIndicator.indicatorCode=="SL.TLF.PART.FE.ZS"){
               let arrTime = [];
               arrTime.push(filterIndicator[obj])
                console.log(arrTime);

          }
          if (filterIndicator.indicatorCode== "SL.TLF.BASC.FE.ZS"){
               let arrTime2 = [];
               arrTime2.push(filterIndicator[obj])
                console.log(arrTime2);

          }
          }
          } 
          
         
// esta es una función de ejemplo
//puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
 //return 'example';
//};

//window.example = example;



//const filterCountry = Object.entries(WORLDBANK);

    //console.log(filterCountry); */
