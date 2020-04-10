document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let counter = document.getElementById("counter")
  let countPaused = false;

  //Will increase or decrease the counter
  function changeCounter(action){
    let countInt = parseInt(counter.innerText, 10);
    if(action === 'increment') {
      countInt++;
    } else if (action === 'decrement') {
      countInt--;
    }
    console.log(countInt)
    counter.innerText = countInt.toString(10);
  }

  function increaseEverySecond(){
    window.setInterval(changeCounter('increment'), 1);
  }

  function paused(){
    if(countPaused) {

    } else {
      increaseEverySecond()
    }
  }

  paused()
});
