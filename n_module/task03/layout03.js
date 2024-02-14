const userLayout = (() => {
    const showList = (users) => {
        const table = document.querySelector("#users");
        let text = ``;
        users = users.slice(0, 2);
        users.forEach((user) => {
            text += `<tr><td>${user.id}</td><td>${user.name}</td></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();

userService.findAll(userLayout.showList);
