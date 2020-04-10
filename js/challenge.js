document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let countPaused = false;

  //Returns the value of the counter integer
  function getCounterInt(){
    const counter = document.getElementById("counter");
    const countInt = parseInt(counter.innerText, 10);
    return countInt
  }

  //Increases or decreases the counter
  function changeCounter(action){
    let countInt = getCounterInt()
    if(action === 'increment') {
      countInt++;
    } else if (action === 'decrement') {
      countInt--;
    }
    counter.innerText = countInt.toString(10);
  }

  //Increases the counter every second
  function increaseEverySecond(){
    counterInterval = setInterval(function(){changeCounter('increment')}, 1000);
  }

  //Allows the plus and minus buttons to increase and decrease the counter
  function buttonChange(buttonId, action){
    const input = document.getElementById(buttonId);
    input.addEventListener('click', function(event) {
      changeCounter(action);
    });
  }

  buttonChange('minus', 'decrement')
  buttonChange('plus', 'increment')

  //pauses
  const pausedButton = document.getElementById('pause');
  pausedButton.addEventListener('click', function(event) {
    countPaused = true;
    pausedButton.innerText = 'resume'
    pausedButton.id = 'resume'
  });

  function stopIfPaused(){
    if(countPaused) {
      console.log('paused')
      clearInterval(counterInterval)
    } else {
      increaseEverySecond()
    }
  }

  stopIfPaused()
});
