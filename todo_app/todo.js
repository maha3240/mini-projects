let todoList=[
    {item:'buy milk',duedate:'04/09/2024'},
    {item:'pickup clothes',duedate:'04/09/2024'}
];

displayItems();

function addTodo () {
let inputElement=document.querySelector('#todo_input');
let dateElement=document.querySelector('#todo_date');
let todoItem=inputElement.value;
let todoDate=dateElement.value;
todoList.push({item:todoItem,duedate:todoDate});
inputElement.value='';
dateElement.value='';
displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo_container');
    let newHtml='';
     for (let i= 0; i < todoList.length; i++) {
        let {item, duedate}=todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn_delete" onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
        `;
        
    }
    containerElement.innerHTML= newHtml;

}