const reloj = () =>{
    
    

    let date = new Date();

    let hh = date.getHours(0-23);
    let mm = date.getMinutes(0-59);
    let ss = date.getSeconds(0-59);
    
   


    let hora = `${hh}: ${mm}: ${ss}`;

  

    document.getElementById('main').innerHTML = `<p>Hora Venezuela</p>` + hora ;


  const s =document.getElementById("arrowhour").style.transform = "rotate("+30*hh+"deg)";
  const y = document.getElementById("arrowmin").style.transform = "rotate("+ 6*mm +"deg)";
  const x =document.getElementById('arrowsec').style.transform = "rotate("+6*ss+"deg)";
  
    
   

  document.getElementById('digital').innerHTML =   s +" "+y+ " "+ " " +x+"";
    

  

  
    

};



setInterval(reloj,1000);

