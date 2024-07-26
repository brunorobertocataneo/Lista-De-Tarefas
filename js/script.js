const button = document.querySelector('.add-task');
const input = document.querySelector('.input-task');
const copmplete_list = document.querySelector('.list-task');

let list = []

function new_task() {
    if (input.value.trim() === '') {
        alert('Por favor, escreva algo antes de adicionar uma tarefa.');
        return; 
    }
    list.push({
        task: input.value,
        conclude: false
    })

    input.value = ''

    show_task()
}

function show_task (){

    let new_li = ''

    list.forEach((item, index) => {

        new_li = new_li + `

        <li class="task ${item.conclude && "done"}">
            <img src="./assets/img/check.png" alt="check" onclick="conclude_task(${index})">
                <p>${item.task}</p>
            <img src="./assets/img/trash.png" alt="trash" onclick="deleteItem(${index})">
        </li>

        `

    })

    copmplete_list.innerHTML = new_li;

    localStorage.setItem('lista', JSON.stringify(list))
}

function conclude_task (index){
    list[index].conclude = !list[index].conclude

    show_task()
}

function deleteItem (index){
  list.splice(index, 1)

  show_task()
}

function reloadScreen(){
    const taskLocalStorege = localStorage.getItem('lista')

    if (taskLocalStorege){
    list = JSON.parse(taskLocalStorege);
    }
    show_task()
}



reloadScreen();
button.addEventListener('click', new_task);