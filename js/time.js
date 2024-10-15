function getdays() { 
    
            // Converting string to required date format 
            let demo= document.getElementById("deme");
            let hr = document.getElementById("hr")
            let mii = document.getElementById("mii")
            let seco = document.getElementById("seco")
            let over = document.getElementById("over")
            let secover = document.getElementById("secover")
            let deadline = new Date("oct 12, 2024 15:37:25").getDay();
            let sec = new Date().getSeconds()
            let hour = new Date ().getHours()
            let mini = new Date ( ) . getMinutes()
            demo.innerHTML =deadline; 
            hr.innerHTML= hour
            mii.innerHTML = mini
            seco.innerHTML = sec
            switch(deadline){
                case 0:
                 alert("over")
                 over.style.display="block"
                 secover.style.display="none"
                 break
                ; 
            }
 
}
getdays();  