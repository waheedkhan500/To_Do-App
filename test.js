const input = document.getElementById("input");
const list = document.getElementById("list-group");
const mainContainer = document.querySelector(".main-container");

function addTask() {
  if (input.value.trim() === "") {
    alert("Add Task please");
  } else {
    let li = document.createElement("li");
    let hr = document.createElement("hr");

    li.classList.add("list-group-item");
    let textSpan = document.createElement("span");
    textSpan.textContent = input.value;
    li.appendChild(textSpan);

    let editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit", "edit-icon");
    li.appendChild(editIcon);

    list.appendChild(li);
    list.appendChild(hr);

    li.addEventListener("mouseover", function () {
      editIcon.style.display = "inline";
    });

    li.addEventListener("mouseout", function () {
      editIcon.style.display = "none";
    });

    editIcon.addEventListener("click", function () {
      li.contentEditable = true;
      li.focus();
    });

    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.classList.add("btn", "btn-success", "update-btn");
    updateBtn.style.display = "none"; // Initially hide update button

    updateBtn.addEventListener("click", function () {
      textSpan.textContent = li.textContent;
      li.contentEditable = false;
      updateBtn.style.display = "none";
      removeBtn.style.display = "inline";
    });

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("btn", "btn-warning");

    removeBtn.addEventListener("click", function () {
      li.remove();
      removeBtn.remove();
      updateBtn.remove();
    });

    li.appendChild(updateBtn);
    li.appendChild(removeBtn);
  }
  input.value = "";
}
