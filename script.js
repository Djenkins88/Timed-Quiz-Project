var btnStart = document.getElementById("btn-start");
var timerText = document.getElementById("timer-text");

var countdown = 60;

btnStart.addEventListener("click",function() {
    setInterval(function(){
      if (countdown <= 0 ) {
        clearInterval(countdown = 1)
      }
      countdown -=1;
      timerText.textContent = countdown;
    }, 1000);

    

});




