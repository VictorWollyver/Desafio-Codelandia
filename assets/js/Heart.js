var estado = false;
var darkmode = false

function heart (id) {

        if (estado==false) {
            document.getElementById(id).src = "/Desafio-Codelandia/assets/img/heart-fill.svg"
            estado=true;

        } else

        if (estado==true) {
            document.getElementById(id).src = "/Desafio-Codelandia/assets/img/heart.svg"
             estado=false;
        } 
    }

    
          
    document.querySelector('#darkmode').addEventListener('click', darktela)
    function darktela() {
    
        if (darkmode == false) {
            darkmode = true
            document.querySelector ('img#img-darkmode').src = "/Desafio-Codelandia/assets/img/brightness-high-fill.svg"
            document.querySelector('body').style.backgroundColor = "#131515"
            document.querySelector('header').style.cssText = " background: linear-gradient(90deg, #080708 0%, #BFB5AF 100%);"
            for (let i = 0; i < 100; i++) {
                document.querySelectorAll('section')[i].style.backgroundColor = "#131515"
                document.querySelectorAll('h1')[i].style.color = "white"
                document.querySelectorAll('.date')[i].style.color = "white"
                document.querySelectorAll('.add')[i].style.color = "white"
            }
        }else {
            darkmode = false
            document.querySelector ('img#img-darkmode').src = "/Desafio-Codelandia/assets/img/brightness-high.svg"
            document.querySelector('body').style.backgroundColor = "white"
            document.querySelector('header').style.cssText = " background: linear-gradient(90deg, #574AE8  0%, #3EA1DB 100%);"
            for (let i = 0; i < 100; i++) {
                document.querySelectorAll('section')[i].style.backgroundColor = "white"
                document.querySelectorAll('h1')[i].style.color = "black"
                document.querySelectorAll('.date')[i].style.color = "black"
                document.querySelectorAll('.add')[i].style.color = "black"
                
            }
        }
        
       
        }
       
       
    

    
    


   
    
        
    
    
   
    
   