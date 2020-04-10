document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let countPaused = false;

  //Will increase or decrease the counter
  function changeCounter(action){
    let counter = document.getElementById("counter");
    let countInt = parseInt(counter.innerText, 10);
    if(action === 'increment') {
      countInt++;
    } else if (action === 'decrement') {
      countInt--;
    }
    counter.innerText = countInt.toString(10);
  }

  function increaseEverySecond(){
    setInterval(changeCounter('increment'), 1000);
  }

  function paused(){
    if(countPaused) {

    } else {
      increaseEverySecond()
    }
  }

  changeCounter('increment')
  changeCounter('increment')
  // paused()
});
