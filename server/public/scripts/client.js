$(onReady);

function onReady() {
    console.log('linked!')
//click listeners
    $('#add').on('click', handleAddClick);
}

function handleAddClick(){
    console.log('add click!');
}