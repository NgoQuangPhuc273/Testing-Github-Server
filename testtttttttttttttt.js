// window.onload = function(){
//    var container = document.getElementById('container');
//    var text = document.getElementById('text');
//    var wrapper = document.getElementById('wrapper');
 
//    container.onclick = function(){
//      if(text.style.opacity == 0){
//        text.style.opacity = 1;
//        wrapper.style.backgroundColor = "red";
//      }
//      else{
//        text.style.opacity = 0;
//        wrapper.style.backgroundColor = '';
//      }
//    };
//  }
 window.onload = function(){
   var container = document.getElementById('container'),
       text = document.getElementById('text'),
       wrapper = document.getElementById('wrapper');

 container.onclick = function(){
     if(text.style.opacity == 0){
       text.style.opacity = 1;
       wrapper.style.backgroundColor = "red";
     }
     else{
       text.style.opacity = 0;
       wrapper.style.backgroundColor = "";
     }
 };
}