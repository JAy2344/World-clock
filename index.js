function setdate() {
  let date = document.querySelector("#current");
  date.innerHTML = new Date();
}
setTimeout(setdate, 5000);

function currentdate() {
  let current = document.querySelector("#milliseconds");
  current.innerHTML = new Date();
}
setInterval(currentdate);
