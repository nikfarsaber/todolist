function setSourceStorage() {
  let countPassTasks = 0;
  let numberTodayTasks = 0;
  let numberTasksType = {
    Work: 0,
    Personal: 0,
    Shopping: 0,
    Health: 0,
    Other: 0,
  };
  const classTypeArray = {
    Work: "work-tasks",
    Personal: "health-tasks",
    Shopping: "shopping-tasks",
    Health: "Personal-tasks",
    Other: "Other-tasks",
  };
  const rowGridNumber = {
    "08:00-08:30": 1,
    "08:30-09:00": 2,
    "09:00-09:30": 3,
    "09:30-10:00": 4,
    "10:00-10:30": 5,
    "10:30-11:00": 6,
    "11:00-11:30": 7,
    "11:30-12:00": 8,
    "12:00-12:30": 9,
    "12:30-13:00": 10,
    "13:00-13:30": 11,
    "13:30-14:00": 12,
    "14:00-14:30": 13,
    "14:30-15:00": 14,
    "15:00-15:30": 15,
    "15:30-16:00": 16,
    "16:00-16:30": 17,
    "16:30-17:00": 18,
    "17:00-17:30": 19,
    "17:30-18:00": 20,
    "18:00-18:30": 21,
    "18:30-19:00": 22,
    "19:00-19:30": 23,
    "19:30-20:00": 24,
    "20:00-20:30": 25,
    "20:30-21:00": 26,
    "21:00-21:30": 27,
    "21:30-22:00": 28,
    "22:00-22:30": 29,
    "22:30-23:00": 30,
    "23:00-23:30": 31,
    "23:30-24:00": 32,
  };
  if (localStorage.getItem("todolistsource") !== null) {
    objectSource = JSON.parse(localStorage.getItem("todolistsource"));
    const stringTime = timeInString();
    for (i = 0; i < objectSource.length; ++i) {
      taskStringTime = +(
        objectSource[i].taskDate.slice(0, 4) +
        objectSource[i].taskDate.slice(5, 7) +
        objectSource[i].taskDate.slice(8, 10) +
        objectSource[i].taskTime.slice(6, 8) +
        objectSource[i].taskTime.slice(9, 11)
      );
      if (stringTime < taskStringTime) ++countPassTasks;
      if (objectSource[i].taskDate !== new Date().toISOString().slice(0, 10)) {
        continue;
      }
      ++numberTodayTasks;
      ++numberTasksType[objectSource[i].taskType];
      // console.log(objectSource[i]);
      let newButton = document.createElement("button");
      newButton.className = classTypeArray[objectSource[i].taskType];
      let newH3 = document.createElement("h3");
      newH3.textContent = objectSource[i].taskName;
      let newP = document.createElement("p");
      newP.textContent = objectSource[i].taskDescription;
      newButton.appendChild(newH3);
      newButton.appendChild(newP);
      document.querySelector(".tasks-list").appendChild(newButton);
      newButton.style.gridRow = rowGridNumber[objectSource[i].taskTime];
    }
    document.querySelector(
      ".numberWorkTasks"
    ).textContent = `${numberTasksType.Work} tasks`;
    document.querySelector(
      ".numberPersonalTasks"
    ).textContent = `${numberTasksType.Personal} tasks`;
    document.querySelector(
      ".numberShoppingTasks"
    ).textContent = `${numberTasksType.Shopping} tasks`;
    document.querySelector(
      ".numberHealthTasks"
    ).textContent = `${numberTasksType.Health} tasks`;
    document.querySelector(".tasksCreated").textContent = objectSource.length;
    document.querySelector(
      ".textTodayTasks"
    ).textContent = `Today you have ${numberTodayTasks} tasks`;
    document.querySelector(".tasksPassed").textContent = countPassTasks;
  }
  // console.log(numberTasksType);
}

window.addEventListener("load", setSourceStorage());

function timeInString() {
  const thisTime = new Date();
  return (
    1000000 +
    +`${thisTime.getUTCFullYear()}${
      thisTime.getUTCMonth() / 10 > 1
        ? thisTime.getUTCMonth()
        : "0" + thisTime.getUTCMonth()
    }${
      thisTime.getDate() / 10 > 1
        ? thisTime.getDate()
        : "0" + thisTime.getDate()
    }${
      thisTime.getUTCHours() / 10 > 1
        ? thisTime.getUTCHours()
        : "0" + thisTime.getUTCHours()
    }${
      thisTime.getUTCMinutes() / 10 > 1
        ? thisTime.getUTCMinutes()
        : "0" + thisTime.getUTCMinutes()
    }`
  );
}
