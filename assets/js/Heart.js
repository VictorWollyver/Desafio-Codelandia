let estado = false;

function heart (id) {

        if (estado==false) {
            document.getElementById(id).src = "/assets/img/heart-fill.svg"
            estado=true;

        } else

        if (estado==true) {
            document.getElementById(id).src = "/assets/img/heart.svg"
             estado=false;
        } 

    }

    
     
    


   
    
        
    
    
   
    
   