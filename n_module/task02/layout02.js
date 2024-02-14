const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            if (todo.completed) {
                text.style.color = "red";
                text += `<tr><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
            }
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();
