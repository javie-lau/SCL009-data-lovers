document.getElementById("chile").addEventListener("click",()=>{
   

    
   const filterChile = Object.entries(WORLDBANK.CHL);

    const filterCHL= (filterChile[0])[1];

    for(const index in filterCHL){
         const filterYes= filterCHL[index];
        // console.log(filterYes);
         const dataChile= filterYes.data;
         //console.log(dataChile);
         for (const index in dataChile){
             
               const arrDatos= dataChile[index];
              console.log(arrDatos) 
         
              //root.innerHTML+= arrDatos;
         }
    }
    /*
      for(i=0;i<filterCHL.length;i++){
            const filterYes=filterCHL[i];
                 const dataChile= filterYes.data;
                      console.log(dataChile);
                     
                               
                      
                     
                      const indicatorName=  filterYes.indicatorName;
                       console.log(indicatorName);   
                                         
                     }*/
     
         
         
})
 // 