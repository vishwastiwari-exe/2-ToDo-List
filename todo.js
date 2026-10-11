let todoList = [
     {
        item: 'HTML Completed 😎👍', 
        dueDate: '4/8/2025'
    },
     {
        item: 'CSS Completed 😎👍', 
        dueDate: '4/8/2025'
    },
    {
        item: 'JavaScript Completed 😎👍', 
        dueDate: '28/8/2026'
    },
     {
        item: 'Backend With JavaScript Coming Soon........🤫', 
        dueDate: '..../..../2026'
    },
    {
        item: 'DSA Coming Soon..........🤫', 
        dueDate: '..../..../2026'
    }
];
displayItems ();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item: todoItem, dueDate: tododate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
   let newhtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newhtml += `
        <span>${item}</span> 
        <span>${dueDate}</span> 
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
         displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newhtml;
}