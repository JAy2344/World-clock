
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


//Challenge 2
let today = moment().format("dddd Do MMMM");
let todayElement = document.querySelector("#now");
todayElement.innerHTML = today;

//Challenge 3
let futureElement = document.querySelector("#future-date");
let future_date = moment().add(10, `years`).format("dddd Do MMMM YYYY");
futureElement.innerHTML = future_date;
