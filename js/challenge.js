document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let counter = document.getElementById("counter")
  function changeCounter(action){
    if(action === 'increment') {
      const countInt = parseInt(counter.innerText, 10);
      countInt++;
      console.log(countInt)
      counter.innerText = countInt.toString(10);
    }
  }
  changeCounter('increment')
});
