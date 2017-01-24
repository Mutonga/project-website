"use strict"
function validateForm(){
  var x = document.form["myform"]["fname"].value;
  if(x == ""){
    alert("Please fill name");
      return false;
  }
}

function myFunction(){
  var Message = "";
  if(document.getElementById("tel").validity.typeMismatch){
      Message = "Type mismatch";
  }
document.getElementById("tel1").innerHTML = Message;  
  }
