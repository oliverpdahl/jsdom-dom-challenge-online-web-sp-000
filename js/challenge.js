document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let countPaused = false;

  //This will return the value of the counter integer
  function getCounterInt(){
    const counter = document.getElementById("counter");
    const countInt = parseInt(counter.innerText, 10);
    return countInt
  }

  //Will increase or decrease the counter
  function changeCounter(action){
    let countInt = getCounterInt()
    if(action === 'increment') {
      countInt++;
    } else if (action === 'decrement') {
      countInt--;
    }
    counter.innerText = countInt.toString(10);
  }

  function increaseEverySecond(){
    setInterval(function(){
      changeCounter('increment')
    }, 1000);
  }

  function stopIfPaused(){
    if(countPaused) {

    } else {
      increaseEverySecond()
    }
  }

  stopIfPaused()
});
