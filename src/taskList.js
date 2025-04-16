window.onload = function () {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length === 0) {
        const message = document.createElement('li');
        message.textContent = 'Não há tarefas registradas.';
        taskList.appendChild(message);
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <strong>${task.titulo}</strong><br>
            <span><em>Criado em: ${task.dataCriacao}</em></span><br>
            <span><strong>Prazo: </strong>${task.prazoFinal}</span>
        `;

        // Make each item clickable, passing the index as a query parameter
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            window.location.href = `taskDetail.html?id=${index}`;
        });

        taskList.appendChild(li);
    });
};
