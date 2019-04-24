document.getElementById("chile").addEventListener("click",()=>{
   

    
   const filterChile = Object.entries(WORLDBANK.CHL);

    const filterCHL= (filterChile[0])[1];
      for(i=0;i<filterCHL.length;i++){
            const filterYes=filterCHL[i];
                 const dataChile= filterYes.data;
                      console.log(dataChile);
                     
                     /* for( j=0;j<dataChile.length; j++){
                          let data= dataChile[j];
                           console.log(data);  } */                      
                      
                      
                      const indicatorName=  filterYes.indicatorName;
                       console.log(indicatorName);   
                      
                    
                     }
     
         
       
         
})
 // root.innerHTML+= indicatorChile.indicatorName;