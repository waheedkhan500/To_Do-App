
const input = document.getElementById("input");

const list = document.getElementById("list-group");

const mainContainer = document.querySelector(".main-container");

function addTask() {

  if (input.value.trim() === "") {
    alert("Add Task please");


  } else {
    let li = document.createElement("li");
    let hr = document.createElement("hr");

    let textContainer = document.createElement("div");

    textContainer.classList.add("text-container")

    textContainer.textContent = input.value;
    
    li.classList.add("list-group-item");

    li.appendChild(textContainer);
    
   
    let editIcon =document.createElement("i")
    editIcon.classList.add("bi", "bi-pencil-square")

    let checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", "");
    // checkbox.setAttribute("id", "flexCheckDefault");
    // checkbox.classList.add("form-check-input");

    

     list.appendChild(li);

     list.appendChild(hr);

    li.addEventListener("mouseover", function () {
      li.appendChild(editIcon);
      editIcon.style.display = "inline";
      editIcon.style.position = "absolute";
      editIcon.style.top = "50%";
      editIcon.style.right = "0";
      editIcon.style.transform = "translateY(-50%)"
      editIcon.style.margin = "0 0.3rem 0 1rem";

      li.prepend(checkbox);

      checkbox.style.display = "inline";
      checkbox.style.position = "absolute";
      checkbox.style.top = "60%";
      checkbox.style.left = "0";
      checkbox.style.transform = "translateY(-50%)";
      checkbox.style.margin = "0 1rem 0 0.5rem";
      checkbox.style.border = "1px solid black"
      checkbox.style.width = "15px"
      checkbox.style.height = "15px"
      checkbox.style.borderRadius = "5rem"

      function checkBoxChecking() {
        checkbox.addEventListener("click", function () {
          if (checkbox.checked) {
            checkbox.style.display = "inline";
          } else {
            checkbox.style.display = "none";
          }
        });

        
      }
      checkBoxChecking();

      
     

    });
    

    li.addEventListener("mouseout", function () {
      
      editIcon.style.display = "none";
    
      if (checkbox.checked) {
        checkbox.style.display = "inline";

      } else {
        checkbox.style.display = "none"
      }
      
    });
     
    // editIcon.addEventListener("click", function () {
    //   li.contentEditable = true;
    //   li.style.outline = "none";
    //   li.style.cursor = "text";

    //   const textNode = li.childNodes[0];
    //   const range = document.createRange();
    //   range.setStart(textNode, textNode.textContent.length);
    //   range.collapse(true); 
    //   const sel = window.getSelection();
    //   sel.removeAllRanges();
    //   sel.addRange(range);
    // })
    
    editIcon.addEventListener("click", function () {
      textContainer.contentEditable = true;
      
    })
    
    
    // li.addEventListener("dblclick", function () {
    //   li.contentEditable = true;
    //   li.style.outline = "none";
    //   li.style.cursor = "text";

    // });

    // li.addEventListener("dblclick", function (event) {
    //   event.stopPropagation(); 

    // });
    
    
     const removeBtnDiv = document.createElement("div");
     removeBtnDiv.classList.add("remove-btn");

     let removeBtn = document.createElement("button");
     removeBtn.textContent = "Remove";
    removeBtn.classList.add("btn", "btn-warning");
    
    removeBtn.addEventListener("click", function () {
      const checkedItems = document.querySelectorAll(
        ".list-group-item input[type='checkbox']:checked"
      );
      for (let i = 0; i < checkedItems.length; i++) {
        const listItem = checkedItems[i].parentNode;
        const hrElement = listItem.nextElementSibling;
        list.removeChild(listItem);
        list.removeChild(hrElement);
      }
    });

     removeBtnDiv.appendChild(removeBtn);

     mainContainer.appendChild(removeBtnDiv);


  }

  input.value = "";

 
  

}
