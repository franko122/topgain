function starter( ) {

    three.addEventListener('click' , ()=>{ 
    let one = document.getElementById("one");
    let two = document.getElementById("two") ;
    let wel = document.getElementById("wel");
    let ede = document.getElementById("ede")
    let three = document.getElementById("three"); 
        let Username = "frank" 
        let password = "frank"   
        if  ( one.value == Username && two.value == password) {  
            window.location="dashboard1.html"
        }else{
            console.log('wrong'); 
            alert('wrong password')
        } 
    })
}
starter()￼Enter
