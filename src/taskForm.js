document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('taskTitle');
    const descriptionInput = document.getElementById('taskDescription');
    const deadlineInput = document.getElementById('taskDeadline');

    // Reset custom messages before checking
    titleInput.setCustomValidity('');
    descriptionInput.setCustomValidity('');
    deadlineInput.setCustomValidity('');

    // Check and set custom messages
    if (!titleInput.value) {
        titleInput.setCustomValidity('Por favor, preencha o título da tarefa.');
        titleInput.reportValidity();
        return;
    }

    if (!descriptionInput.value) {
        descriptionInput.setCustomValidity('Por favor, insira uma descrição.');
        descriptionInput.reportValidity();
        return;
    }

    if (!deadlineInput.value) {
        deadlineInput.setCustomValidity('Por favor, escolha um prazo final.');
        deadlineInput.reportValidity();
        return;
    }

    // Get the current date and format it as dd/mm/yyyy
    const creationDate = new Date();
    const day = String(creationDate.getDate()).padStart(2, '0');
    const month = String(creationDate.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const year = creationDate.getFullYear();
    const formattedCreationDate = `${day}/${month}/${year}`;

    // Format the deadline as dd/mm/yyyy
    const deadline = new Date(deadlineInput.value);
    const deadlineDay = String(deadline.getDate()).padStart(2, '0');
    const deadlineMonth = String(deadline.getMonth() + 1).padStart(2, '0');
    const deadlineYear = deadline.getFullYear();
    const formattedDeadline = `${deadlineDay}/${deadlineMonth}/${deadlineYear}`;

    // Create the task object
    const task = {
        titulo: titleInput.value,
        descricao: descriptionInput.value,
        prazoFinal: formattedDeadline, // Store the formatted deadline
        dataCriacao: formattedCreationDate // Store the formatted creation date
    };

    // Get current tasks from localStorage or create an empty array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add new task to the array
    tasks.push(task);

    // Save the updated task list back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Redirect to the task list page
    window.location.href = "./taskList.html";
});
