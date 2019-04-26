

document.getElementById("paginaUno").style.display="block";//invisible
document.getElementById("root").style.display="none";//visible

document.getElementById("chile").addEventListener("click",()=>{
     
     document.getElementById("paginaUno").style.display="none";//invisible
     document.getElementById("root").style.display="block";//visible
  
     document.getElementById("datChile").addEventListener("change",() =>{

          let show =filterData(document.getElementById("datChile").value);//le estoy enviando parametro a mi funcion
          
          document.getElementById("filteredData").value = show;

     })
});

         