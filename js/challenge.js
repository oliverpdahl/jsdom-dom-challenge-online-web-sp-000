document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let counter = document.getElementById("counter")
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
  changeCounter('decrement')
});
