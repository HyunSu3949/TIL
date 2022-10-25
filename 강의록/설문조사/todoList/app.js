const main = document.querySelector(".artcl_main");
const userTask = main.querySelector("header input");
const addBtn = main.querySelector("header button");
const listTodo = main.querySelector(".list_todo");

addBtn.addEventListener("click", createListItem);

const message = document.createElement("strong");
message.style.display = "none";
message.classList.add("txt_invalid");
main.appendChild(message);
userTask.addEventListener("input", () => {
  message.style.display = "none";
});

const downloadBtn = document.createElement("button");
downloadBtn.classList.add("btn");
downloadBtnl;

const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

function createListItem() {
  const val = userTask.value;

  if (val) {
    const tempTask = {
      val: val,
      checked: false,
    };

    tasks.push(tempTask);

    genItem(val);
  } else {
    errorMsg("내용을 작성해주세요");
  }
}

function genItem(val) {
  const li = document.createElement("li");
  li.textContent = val;
  listTodo.appendChild(li);

  userTask = "";

  if (complete) {
    li.classList.add("done");
  }

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const btn = document.createElement("button");
  btn.innerHTML = `<i class='fa-solid fa-trash></i>'`;
  li.appendChild(btn);
  btn.addEventListener("click", () => {
    li.remove();
  });
}

function showDownload() {
  const curList = listTodo.querySelectorAll("li");
  if (curList.length > 0) {
    downloadBtn.style.display = "block";
  } else {
    downloadBtn.style.display = "none";
  }
}

function errorMsg(msg) {
  message.style.display = "block";
  message.textContent = msg;
  userTask.focus();
}
