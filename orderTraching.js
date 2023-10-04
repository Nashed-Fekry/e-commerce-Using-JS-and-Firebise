var prev = document.getElementById('prev');
var next = document.getElementById('next');
var trak = document.getElementById('progress');
var step = document.getElementById('step');



var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime >8000){
        clearInterval(interval);
        return;
    }
    var cls = trak.className.split('-').pop();
    cls > 6 ? cls = 0 : cls++;
  
  step.innerHTML = cls;
    trak.className = 'progress-' + cls;
}, 2000);  


// setInterval(function(){
   
//         var cls = trak.className.split('-').pop();
//         cls > 6 ? cls = 0 : cls++;
      
//       step.innerHTML = cls;
//         trak.className = 'progress-' + cls;

        
    
    
// },2000)

