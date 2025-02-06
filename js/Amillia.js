function starter( ) {
    let three = document.getElementById("three");
    three.addEventListener('click' , ()=>{ 
    let one = document.getElementById("one");
    let two = document.getElementById("two") ;
    let wel = document.getElementById("wel");
    let ede = document.getElementById("ede")
    let three = document.getElementById("three"); 
        let Username = "amillia" 
        let password = "recoverY21@"   
        if  ( one.value == Username && two.value == password) {  
            window.location="dashboardamillia.html"
        }else{
            console.log('wrong'); 
            alert('wrong password')
        } 
    })
}
starter()
