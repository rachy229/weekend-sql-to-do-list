$(onReady);

function onReady() {
    console.log('linked!')
    getTasks();
//click listeners
    $('#add').on('click', addTask);
    $('#taskList').on('click', '#complete-btn', completeTask);
    $('#taskList').on('click', '#delete-btn', deleteTask);
}

function handleAddClick(){
    // console.log('add click!');
    // let newTask = {};
    // newTask.name = $('#taskIn').val();
    // addTask(newTask);
}

function getTasks() {
    $('#taskList').empty();
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then (function(response) {
        console.log('GET /tasks response:', response);
        for (let i = 0; i < response.length; i++) {

            $('#taskList').append(`
            <tr>
                <td>${response[i].name}</td>
                <td>${response[i].status}</td>
                <td> 
                    <button id="complete-btn" data-id="${response[i].id}" 
                        data-status="${response[i].status}">Complete 
                    </button> 
                </td>
                <td>
                    <button id="delete-btn" data-id="${response[i].id}">Delete
                    </button>
                </td>
            </tr>
                `
            )
        }
    })
};

function addTask() {
    console.log('add click!');
    let newTask = {};
    newTask.name = $('#taskIn').val();
    newTask.status = 'false';
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then(function(response) {
        $('#taskIn').val('');
        getTasks();
    })
}

function completeTask() {
    console.log('complete clicked!');
    let taskId = $(this).data('id');
    let status = $(this).data('status');
    console.log('taskId in completeTask:', taskId);
    console.log('status in completeTask:', status);

    $.ajax({
        method: 'PUT',
        url: `/tasks/status/${taskId}`,
        data: {status: status}
    }).then(function() {
        getTasks();
    }).catch(function(error) {
        alert('ERROR in completeTask', error);
    })
}


function deleteTask() {
    console.log('delete clicked!');
}