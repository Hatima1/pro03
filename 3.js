let x=document.getElementById("ok")
var a=document.getElementById("we")
var b=document.getElementById("wee")
x.addEventListener('change',function(){
  if(this.checked){
      
a.textContent="$190.99"
b.textContent="$2000.999"
  }
  else{
      a.textContent="$19.99"
      b.textContent="$200.99"
  }
})
