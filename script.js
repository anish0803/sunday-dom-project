let open = document.querySelector(".open-popup");

let modal = document.querySelector(".modal-box");

let close = document.querySelector(".close");

open.addEventListener("click", () => {
  modal.classList.add("active");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});
let modalBtn = document.querySelector(".btn");

modalBtn.addEventListener("click", () => {

  let mainContent = document.querySelector(".main-content");

  modal.classList.remove('active');

  let msg = document.querySelector("#msg"); //Textbox

  let task = document.createElement("div");
  task.classList.add("task");
  mainContent.append(task);   //append task

  let taskhead = document.createElement("div"); //inside task(color);
  taskhead.classList.add("task-head");
  taskhead.style.height = '35px';
  taskhead.style.backgroundColor = 'red';
  task.append(taskhead);

  let h1 = document.createElement('h1');
  h1.innerText = msg.value;
  h1.setAttribute('readonly','readonly');
  task.append(h1);

  let icons = document.createElement('div');
  icons.classList.add('icons');
  task.append(icons);

  let lockbtn = document.createElement('button');
  lockbtn.classList.add("lockbtn");
  lockbtn.innerHTML = '<i class="fa-solid fa-lock"></i>';
  icons.append(lockbtn);

    lockbtn.addEventListener('click',()=>{
    iconSet.style.visibility = 'visible';
    lockbtn.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
    });

  let iconSet = document.createElement('div')
  iconSet.classList.add('icon-set');
  icons.append(iconSet);
  iconSet.style.visibility = 'hidden';

  let check = document.createElement('button');
  check.classList.add('check');
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  iconSet.append(check);

  let trash = document.createElement('button');
  trash.classList.add('trash');
  trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
  iconSet.append(trash);

  let pencil = document.createElement('button');
  pencil.classList.add('pencil');
  pencil.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  iconSet.append(pencil);

  ////////////////////////////////////////////////////



  let editbtn = document.querySelector('.fa-pencil');
  editbtn.addEventListener('click',() =>{
    editbtn.style.color = "green";
    h1.contentEditable = true;
    console.log(h1);
  })

});
