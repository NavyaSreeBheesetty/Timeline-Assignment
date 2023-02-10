arr = [];
let line = document.getElementById("line");
document.querySelector("#submit").onclick = () => {
  if (task != "") {
    time = document.getElementById("time").value;
    task = document.getElementById("task").value;
    flag = 1;
    arr.forEach((ele) => {
      if (ele.time == time) {
        alert("The selected time slot is full.Can please enter other time slot");
        flag = 0;
      }
    });
    if (flag == 1) {
      arr.push({
        time: time,
        task: task,
      });
      arr.sort(function (a, b) {
        return a.time.localeCompare(b.time);
      });
      line.innerHTML = "";
      arr.forEach((element) => {
        line.innerHTML += `<div class="container">
      <div class="content">
        <h2>${element.time}</h2>
        <p>${element.task}</p>
      </div>
    </div>`;
      });
    }
  }
  else{
    alert("Details are missing.would you like to enter empty block");
  }
};
