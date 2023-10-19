// year input
// document.getElementById(year)
//     .oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1))
   
// credit card spacers
function formats(ele,e){
  if(ele.value.length<19){
    ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    return true;
  }else{
    return false;
  }
}

function numberValidation(e){
  e.target.value = e.target.value.replace(/[^\d ]/g,'');
  return false;
}

// card will match the inputs of text
document.getElementById("name").addEventListener("input", function(){
  document.getElementById("card-name").innerHTML = this.value;
});

document.getElementById("number").addEventListener("input", function(){
  document.getElementById("card-number").innerHTML = this.value;
});

document.getElementById("cvc").addEventListener("input", function(){
  document.getElementById("cvc-number").innerHTML = this.value;
});

document.getElementById("month").addEventListener("input", function(){
  document.getElementById("card-month").innerHTML = this.value;
});

document.getElementById("year").addEventListener("input", function(){
  document.getElementById("card-year").innerHTML = this.value;
});

// button to reveal thank you
// function hideMe() {
//   var x = document.getElementsByClassName("completed");
//   x.removeAttribute("hidden");
// }

// function hideMe() {
//   var x = document.getElementsByID("completed");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   }
// }

function hideMe(){
  x = document.getElementsByID ('completed');
  if(x[0].style.visibility === "hidden"){
     x[0].style.visibility = "visible"   
   }else{
     x[0].style.visibility = "hidden"  
  }}