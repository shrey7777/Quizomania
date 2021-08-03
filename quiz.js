 var account="";
 function hide() {
    account=document.getElementById("add").style.display = "none";
 }

 function addaccount() {
     var add="";
    var x = document.getElementById("add");
    if (x.style.display === "none") {
      x.style.display = "block";
      
 
    } else {
      x.style.display = "none";
      
    }
  }