$(onReady);

function onReady() {
    console.log('linked!')
    getTasks();
//click listeners
    $('#add').on('click', handleAddClick);
}

function handleAddClick(){
    console.log('add click!');
}

function getTasks() {
    $.ajax({
        type: 'GET',
        url: '.server/routes/tasks.router.js'
    }).then (function(response) {
        console.log('GET /tasks response:', response);
        for (let i = 0; i < response.length; i++) {
            $('#taskList'.append(`
                <li>${response[i].name}</li>
                `
            ))
        }
    })
};
