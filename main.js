window.onload =  function() {
  window.startTime = 0;
  window.stopTime = 0;
  window.totalTime = 0;
  document.getElementById('start').onclick = function() {
    startTime = Date.now();
  }
  document.getElementById('stop').onclick = function() {
    stopTime = Date.now();
    totalTime = new Date(stopTime - startTime).getMinutes();
    console.log(totalTime);
  }
}
