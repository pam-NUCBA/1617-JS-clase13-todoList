const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTaskAlert = document.getElementById("emptyTask");
const tasksList = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  //evitamos que el form sea submitido al apretar el botón, que es el comportamiento default de los botones
  e.preventDefault();
  console.log("lara lara, no refresco");

  //vamos a agarrar el valor del form:
  const task = newTask.value;
  console.log(task);

  //si el valor de task no existe:
  if (!task) {
    emptyTaskAlert.classList.remove("hidden");
    setTimeout(() => {
      emptyTaskAlert.classList.add("hidden");
    }, 3000);
    return;
  }

  //no necesitamos realmente un else, porque si tiene value, simplemente no va a entrar en el if

  //acá viene el chino: vamos a crear desde cero todo lo que teníamos mock en el front

  //creamos el div que va a ser nuestro container:
  const taskElement = document.createElement("div");
  //le damos la clase:
  taskElement.classList.add("container");

  //creamos el input de la tarea:
  const taskInput = document.createElement("input");
  taskInput.classList.add("taskInput"); //esta es la que tenía el mock!
  //yo ese input quiero que venga con un valor por defecto:
  taskInput.value = task;
  //necesito decirle qué tipo de input es:
  taskInput.type = "text";
  //nos falta el atributo con el que vamos a poder modificar o no el texto:
  //https://www.w3schools.com/html/html_form_attributes.asp
  taskInput.setAttribute("readonly", "readonly"); //a qué le aplico, qué valor le aplico. SetAttribute sí o sí recibe dos params
  //taskInput.setAttribute("min", 5) //si quisiéramos que el largo mínimo fuera 5

  //ahora, a apendearlos y sumarlos al html:
  //al taskElement, le vamos a pegar el input, y al taskList le vamos a pegar el taskElement
  taskElement.appendChild(taskInput); //ahora el input es hijo del container
  tasksList.appendChild(taskElement); //el container y sus hijos, ahora son hijos del id tasks.

  //el div de los botones:
  const taskBtns = document.createElement("div");
  taskBtns.classList.add("btns");

  //los botones:
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");

  const scrapBtn = document.createElement("button");
  scrapBtn.classList.add("scrap");

  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("erase");

  //a apendear botones padre.metodo(hijo):
  taskBtns.appendChild(editBtn);
  taskBtns.appendChild(scrapBtn);
  taskBtns.appendChild(eraseBtn);

  taskElement.appendChild(taskBtns);

});
