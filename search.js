const textBoxSearch = document.querySelector(".search-textbox");
const backOrCloseImage = document.querySelector(".back-to-home-img");

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
      textBoxSearch.style.visibility = "hidden";
      backOrCloseImage.src = "assets/arrow-left.png";
      document;
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
  if (localStorage.getItem("todolistsource") !== null) {
    objectSource = JSON.parse(localStorage.getItem("todolistsource"));
    for (i = 0; i < objectSource.length; ++i) {
      let newButton = document.createElement("button");
      newButton.className = classTypeArray[objectSource[i].taskType];
      let newH3 = document.createElement("h3");
      newH3.textContent = objectSource[i].taskName;
      let newP = document.createElement("p");
      newP.textContent = objectSource[i].taskDescription;
      newButton.appendChild(newH3);
      newButton.appendChild(newP);
      document.querySelector("main").appendChild(newButton);
    }
  }
}

updateTasks();
