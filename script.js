<script>
        function addTask() {
             taskInput = document.getElementById('task-input')}
            var taskList = document.getElementById('task-list');

            if (taskInput.value.trim() !== '') {
                 taskItem = document.createElement('li')}
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <span>${taskInput.value}</span>
                    <button onclick="removeTask(this)">Remove</button>
                `;
                taskList.appendChild(taskItem);
                taskInput.value = '';
        

        function removeTask(btn) {
             taskItem = btn.parentElement}
            taskItem.remove();
        
    </script>