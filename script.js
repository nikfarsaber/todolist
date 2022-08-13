function changeCheck() {
  const allRadio = document.getElementsByName("chooseCategory");
  let taskType = 0;
  const taskName = document.querySelector(".taskName").value;
  const taskTime = document.querySelector(".timeSelect").value;
  const taskDate = document.querySelector(".dateSelect").value;
  for (i = 0; i < allRadio.length; ++i) {
    if (allRadio[i].checked) {
      taskType = allRadio[i].value;
    }
  }
  const taskDescription = document.querySelector(".description").value;
  // console.log(taskDate);
  if (taskName && taskTime && taskDate && taskType && taskDescription) {
    document.querySelector(".submit").disabled = false;
    return [taskName, taskTime, taskDate, taskType, taskDescription];
  } else {
    document.querySelector(".submit").disabled = true;
  }
}

function saveToLocal() {
  let rows = 0;
  let objectSource = [];
  const inputArray = changeCheck();
  // console.log(inputArray, rows);
  if (localStorage.getItem("todolistsource") !== null) {
    objectSource = JSON.parse(localStorage.getItem("todolistsource"));
    rows = objectSource.length;
  } else {
  }
  objectSource[rows] = {
    taskName: inputArray[0],
    taskTime: inputArray[1],
    taskDate: inputArray[2],
    taskType: inputArray[3],
    taskDescription: inputArray[4],
  };
  // console.log(objectSource, objectSource.length);
  localStorage.setItem("todolistsource", JSON.stringify(objectSource));
  clearInputs();
}

function clearInputs() {
  const inputArray = changeCheck();
  document.querySelector(".taskName").value = "";
  document.querySelector(".timeSelect").value = "12:30-13:00";
  document.getElementById(inputArray[3]).checked = false;
  document.querySelector(".dateSelect").value = "2022-08-12";
  document.querySelector(".description").value = "";
  document.querySelector(".submit").disabled = true;
}
