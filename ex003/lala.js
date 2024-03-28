function clicar() {
   var a = window.prompt("ela esta perto ?")
    var b = window.document.getElementById("lal")
    if(a == 'sim'){
       b.innerHTML = 'Cuidado para não se apaixonar' 
    }else{
        window.alert("esconda")
    }
}
