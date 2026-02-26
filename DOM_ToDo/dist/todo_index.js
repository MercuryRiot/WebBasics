// ! to store the data
let todos = [];
// ! Targeting elements
let form = document.getElementById("form");
let input = document.getElementById("inputValue");
let listItems = document.getElementById("items");
// ! Adding task
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    let newTask = {
        id: Date.now().toString(),
        task: value,
    };
    todos.push(newTask);
    input.value = "";
    render();
});
function render() {
    if (!todos.length) {
        listItems.style.display = "none";
        listItems.innerHTML = "";
        return;
    }
    listItems.style.display = "inline-block";
    listItems.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.task;
        li.style.position = "relative";
        li.style.paddingRight = "5rem";
        li.style.marginBottom = "0.75rem";
        li.style.paddingTop = "0.4rem";
        li.style.paddingBottom = "0.4rem";
        const editBtn = document.createElement("button");
        editBtn.textContent = "✎";
        editBtn.className = "edit-btn";
        Object.assign(editBtn.style, {
            position: "absolute",
            right: "36px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            color: "#4a90e2",
            fontWeight: "700",
            cursor: "pointer",
            padding: "4px 8px"
        });
        editBtn.setAttribute("aria-label", "Edit task");
        editBtn.addEventListener("click", () => {
            const newName = prompt("Edit task", todo.task);
            if (newName !== null) {
                const trimmed = newName.trim();
                if (trimmed && trimmed !== todo.task)
                    editTask(todo.id, trimmed);
            }
        });
        const delBtn = document.createElement("button");
        delBtn.textContent = "-";
        delBtn.className = "delete-btn";
        Object.assign(delBtn.style, {
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            color: "#ff6b6b",
            fontWeight: "700",
            cursor: "pointer",
            padding: "4px 8px"
        });
        delBtn.setAttribute("aria-label", "Delete task");
        delBtn.addEventListener("click", () => deleteTask(todo.id));
        li.append(editBtn, delBtn);
        listItems.appendChild(li);
    });
}
function deleteTask(id) {
    todos = todos.filter(t => t.id !== id);
    render();
}
function editTask(id, newName) {
    todos = todos.map(t => (t.id === id ? { ...t, task: newName } : t));
    render();
}
export {};
