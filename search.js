const textBoxSearch = document.querySelector(".search-textbox");
const backOrCloseImage = document.querySelector(".back-to-home-img");
// const deletTasks = document.querySelectorAll(".trash-img");
function searchButtonClick() {
  if (textBoxSearch.style.visibility !== "visible") {
    textBoxSearch.style.visibility = "visible";
    backOrCloseImage.src = "assets/close.png";
  }
}

document
  .querySelector(".back-to-home-button")
  .addEventListener("click", function () {
    if (textBoxSearch.style.visibility == "visible") {
      textBoxSearch.value = "";
      textBoxSearch.style.visibility = "hidden";
      backOrCloseImage.src = "assets/arrow-left.png";
      document.querySelector("main").innerHTML = "";
      updateTasks();
    } else {
      window.location.replace("home.html");
    }
  });

function updateTasks() {
  const classTypeArray = {
    Work: "work-tasks",
    Personal: "health-tasks",
    Shopping: "shopping-tasks",
    Health: "Personal-tasks",
    Other: "Other-tasks",
  };
  console.log(document.querySelector(".search-textbox").value);
  if (localStorage.getItem("todolistsource") !== null) {
    objectSource = JSON.parse(localStorage.getItem("todolistsource"));
    for (i = 0; i < objectSource.length; ++i) {
      if (
        objectSource[i].taskName.search(
          document.querySelector(".search-textbox").value
        ) == -1
      )
        continue;
      let newDiv = document.createElement("div");
      newDiv.id = `divId${i}`;
      newDiv.className = "chart-task";
      let newImg = document.createElement("input");
      newImg.id = `TaskId${i}`;
      newImg.type = "Image";
      newImg.src = "assets/edit.png";
      newImg.className = "edit-img";
      newImg.classList.add("reset-color");
      let newButton = document.createElement("button");
      newButton.id = `buttonTaskId${i}`;
      newButton.className = classTypeArray[objectSource[i].taskType];
      newButton.classList.add("button-task");
      newButton.classList.add("reset-color");
      let newH3 = document.createElement("h3");
      newH3.textContent = objectSource[i].taskName;
      let newP = document.createElement("p");
      newP.textContent = objectSource[i].taskDescription;
      let newTrashImg = document.createElement("input");
      newTrashImg.type = "Image";
      newTrashImg.src = "assets/trash.png";
      newTrashImg.classList.add("trash-img");
      newTrashImg.id = `trashId${i}`;
      newButton.appendChild(newH3);
      newButton.appendChild(newP);
      newDiv.appendChild(newImg);
      // newImg.attributes();
      newImg.setAttribute("onfocus", "unFocusEditImg(this.id)");
      newDiv.appendChild(newButton);
      newDiv.appendChild(newTrashImg);
      newTrashImg.setAttribute("onclick", "deletTask(this.id)");
      document.querySelector("main").appendChild(newDiv);
    }
  }
}

updateTasks();

document.body.addEventListener("mousedown", fn, true);

function fn() {
  const allForResetColor = document.querySelectorAll(".reset-color");
  for (const resetColorElement of allForResetColor) {
    resetColorElement.style.backgroundColor = "#fff";
    resetColorElement.style.color = "#000";
  }
}

function unFocusEditImg(id) {
  document.querySelector(`#button${id}`).style.backgroundColor = "#fbd2e3";
  document.querySelector(`#button${id}`).style.color = "#ee2375";
  document.querySelector(`#${id}`).style.backgroundColor = "#fbd2e3";
}

function deletTask(id) {
  const objectSource = JSON.parse(localStorage.getItem("todolistsource"));
  objectSource.splice(+id.replace("trashId", ""), 1);
  localStorage.setItem("todolistsource", JSON.stringify(objectSource));
  document.querySelector("main").innerHTML = "";
  updateTasks();
}

function searchTextChange() {
  document.querySelector("main").innerHTML = "";
  updateTasks();
}
