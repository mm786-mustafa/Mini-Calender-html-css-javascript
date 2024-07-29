let monthNameEL = document.getElementById("month-name");
let dayNameEl = document.getElementById("day-name");
let dayNumberEl = document.getElementById("day-number");
let yearEl = document.getElementById("year");

const date = new Date();
//console.log(day)

monthNameEL.innerHTML = date.toLocaleString("en", {
    month:"long"
});

dayNameEl.innerHTML = date.toLocaleString("en", {
    weekday: "long"
});

dayNumberEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();