let num = new String("0123456789");
let alpa = new String("abcdefghijklmnopqrstuvwxyz");
let symbol = new String("#@!$%^&*()><?/.,{}+_+")

const len = 10;

let ran = rand();
function rand(){
  let max = 20;
  let min = 10;
let X = Math.floor((Math.random()*(max-min+1))+ min);
  return X;
}

function returnpassword(){
  let x = `${num.substring(0,ran)}+${alpa.substring(0,ran)}+${symbol.substring(0,ran)}`;
  //if we required only few character
return x;

}


//how to show it place holder

var v  =  document.getElementById("inp");

const btn = document.getElementById("btn");


btn.addEventListener('click',(e)=>{
// e.stopPropagation();
v.placeholder = returnpassword();
// v.placeholder = "Password";
})

function copy(){
  v.ariaSelected();
  document.execCommand("copy");
}
document.getElementById("imgcopy").addEventListener('click',()=>{
  copy();
})







