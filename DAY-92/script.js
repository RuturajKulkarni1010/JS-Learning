const addBtnEl = document.querySelector(".add");

addBtnEl.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = "") {
  const noteNewEl = document.createElement("div");
  noteNewEl.classList.add("note");

  noteNewEl.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtnEl = noteNewEl.querySelector(".edit");
  const deleteBtnEl = noteNewEl.querySelector(".delete");
  const mainEl = noteNewEl.querySelector(".main");
  const textareaEl = noteNewEl.querySelector("textarea");

  textareaEl.value = text;
  mainEl.innerHTML = marked(text);

  deleteBtnEl.addEventListener("click", () => {
    noteNewEl.remove();
  });

  editBtnEl.addEventListener("click", () => {
    mainEl.classList.toggle("hidden");
    textareaEl.classList.toggle("hidden");
  });

  textareaEl.addEventListener("input", (e) => {
    const { value } = e.target;

    mainEl.innerHTML = marked(value);
  });

  document.body.appendChild(noteNewEl);
}
