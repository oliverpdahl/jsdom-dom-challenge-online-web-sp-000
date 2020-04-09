document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let counter = document.getElementById("counter")
  function changeCounter(action){
    if action == 'increment' {
      const countInt = Integer.parseInt(counter.innerText);
      countInt++;
      counter.innerText = Integer.toString(countInt);
    }
  }
  changeCounter(increment)
});
