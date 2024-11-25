var j=0.0;
var o=setInterval(ramp,100);
 function ramp(){
  j=j+0.1;
  k=j.toFixed(1);
   if(k==5.0){
  clearInterval(o);
}
 else{
  document.getElementById('forth').innerText=k+"*";
 }
}


var p=0;
var v=setInterval(be,0);
 function be(){
  p=p+1;
   if(p==951){
  clearInterval(v);
}
 else{
  document.getElementById('sen-counter').innerText=p+"+";
 }
}
var r=0;
var f=setInterval(fune,100);
 function fune(){
  r=r+1;
   if(r==13){
  clearInterval(f);
}
 else{
  document.getElementById('kbt').innerText=r+"K"+"+";
 }
}





// var m =0.0;
// var re=setInterval(medk,100);
// function medk(){
//   m=m+0.1;
//   tl=m.toFixed(2);
//   if (f==4.97) {
//     clearInterval(re); 
//   }
//   else{
//     document.getElementById('number-counter').innerText=tl;
//   }
// }

// var u=0.0;
// var m=setInterval(numk,100);
//  function numk(){
//   u=u+0.1;
//   l=u.toFixed(2);
//    if(l==4.99){
//   clearInterval(m);
// }
//  else{
//   document.getElementById('number-counter').innerText=l;
//  }
//  console.log(l)
// }

