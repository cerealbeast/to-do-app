function onReady(){
  let toDos = [];
  let toDoId = 1;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', function(event) => {
    event.preventDefault();

    // get the text
    let title = NEW_TODO_TEXT.value;
    let todoObj = {
      title: title,
      id: toDoID
    }

    toDoId++;

    toDos.push(todoObj);

    // create a new li
    let newLi = document.createElement('li') // <li></li>
    let checkbox = document.createElement('input'); // create a new input
    checkbox.type = "checkbox"; // set the input's type to checkbox

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      // let buttinLiText = this
      //console.log(event);
      //this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.ParentElement);

      toDos.fourEach(function(currentToDo, index){
        // console.log(currentToDo, index);
        // console.log(this);

        if(currentToDo === buttonLiText){
          //remove from array
          toDos.splice(index, 1);
        }
        console.log(toDos);
      });
    })

    newli.textContent = title;  // set the title
    newLi.appendChild(checkbox);
    newLi.appaendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
})

   toDoList.appendChild(newLi);

   // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';
  });
}

window.onload = function() {
  alert("The window has loaded!");
};
