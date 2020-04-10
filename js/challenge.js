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

  // //pauses
  // function pauseResumeButtonSet(id, pauseBoolean){
  //   const button = document.getElementById(id);
  //   countPaused = pauseBoolean;
  //   button.innerText = id;
  //   button.id = id;
  //   button.addEventListener('click', function(event) {
  //     countPaused = !countPaused
  //     stopIfPaused();
  //   });
  // }


  const pausedButton = document.getElementById('pause');
  pausedButton.addEventListener('click', function(event) {
    if pausedButton.innerText == 'pause' {
      countPaused = true;
      pausedButton.innerText = 'resume'
      stopIfPaused();
    } else {
      countPaused = false;
      pausedButton.innerText = 'pause'
      stopIfPaused();
    }
  });

  function stopIfPaused(){
    if(countPaused) {
      clearInterval(counterInterval)
    } else {
      increaseEverySecond()
    }
  }

  stopIfPaused()
});
