clearInputs();

function changeCheck() {
  const allRadio = document.getElementsByName("chooseCategory");
  const taskName = document.querySelector(".taskName").value;
  const taskTime = document.querySelector(".timeSelect").value;
  const taskDate = document.querySelector(".dateSelect").value;
  let taskType = document.querySelector(
    'input[name="chooseCategory"]:checked'
  )?.value;
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
  if (document.querySelector('input[name="chooseCategory"]:checked')) {
    document.querySelector(
      'input[name="chooseCategory"]:checked'
    ).checked = false;
  }
  document.querySelector(".dateSelect").value = new Date()
    .toISOString()
    .split("T")[0];
  document.querySelector(".description").value = "";
  document.querySelector(".submit").disabled = true;
}
