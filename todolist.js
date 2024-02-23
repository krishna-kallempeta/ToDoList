let arr = [];
let user_container = document.querySelector('.user_container');

function render(){
    user_container.innerText="";

    for(let i=0;i<arr.length;i++){
        let div = document.createElement('div');
        let todo = document.createElement('div')

        div.classList.add('use')
        
        todo.innerText = arr[i];
        user_container.appendChild(div);
        div.appendChild(todo);
    }
}

function dele(){
    user_container.innerText="";
    for(let i=0;i<arr.length;i++){
        let div = document.createElement('div');
        let todo = document.createElement('div')

        div.classList.add('use')
        todo.innerText = arr[i];
        user_container.appendChild(div);
        div.appendChild(todo);
    }
}

function enter(){
    let userinput = document.getElementById('todolist');
    arr.push(userinput.value)
    render()
    console.log(arr);
}

function delet(){
    let userremove = document.getElementById('todolist');
    arr.pop(userremove.value)
    dele()
    console.log(arr);
}



