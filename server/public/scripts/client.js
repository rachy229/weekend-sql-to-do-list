$(onReady);

function onReady() {
    console.log('linked!')
//click listeners
    $('#add').on('click', handleAddClick);
}

function handleAddClick(){
    console.log('add click!');
}

function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then (function(response) {
        console.log('GET /tasks response:', response);
        renderTasks();
    })
};