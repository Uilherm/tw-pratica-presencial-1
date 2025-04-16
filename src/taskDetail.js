function getTaskIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

function goBack() {
    window.location.href = './taskList.html';
}

function deleteTask() {
    const taskId = getTaskIdFromUrl();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (taskId >= 0 && taskId < tasks.length) {
        tasks.splice(taskId, 1); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated array
    }

    // Redirect to task list
    window.location.href = './taskList.html';
}

window.onload = function () {
    const taskId = getTaskIdFromUrl();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (isNaN(taskId) || taskId < 0 || taskId >= tasks.length) {
        document.getElementById('taskDetails').innerHTML = `<p>Tarefa não encontrada.</p>`;
        return;
    }

    const task = tasks[taskId];

    document.getElementById('taskDetails').innerHTML = `
        <h3>${task.titulo}</h3>
        <p><strong>Descrição:</strong> ${task.descricao}</p>
        <p><strong>Criado em:</strong> ${task.dataCriacao}</p>
        <p><strong>Prazo final:</strong> ${task.prazoFinal}</p>
    `;
};
