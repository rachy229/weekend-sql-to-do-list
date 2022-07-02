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
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then (function(response) {
        console.log('GET /tasks response:', response);
        for (let i = 0; i < response.length; i++) {
            $('#taskList').append(`
                <li>${response[i].name}</li>
                <button id="complete-btn" data-id="${response[i].id}" >Complete</button>
                <button id="delete-btn" data-id="${response[i].id}">Delete</button>
                `
            )
        }
    })
};

function addTask() {
    console.log('add click!');
    let newTask = {};
    newTask.name = $('#taskIn').val();
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
}

function deleteTask() {
    console.log('delete clicked!');
}