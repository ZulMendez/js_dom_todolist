import {myBtn, myInp, myList} from "./events.js"


// fonction 
let addTodo = (e) => {
    if (e.keyCode == 13) {
        // Ma div
        let newDiv = document.createElement('div');
        newDiv.classList.add('todo')
        // Ma liste
        let newList = document.createElement('li')
        newList.innerText = myInp.value
        newList.classList.add('todo-item')
        newDiv.appendChild(newList)
        // bouton de check
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add('check-btn')
        newDiv.appendChild(checkBtn)
        // bouton de supprimer
        let suprBtn = document.createElement('button');
        suprBtn.innerHTML = '<i class="fas fa-trash"></i>';
        suprBtn.classList.add('supr-btn')
        newDiv.appendChild(suprBtn)
        // bouton modif
        let modif = document.createElement('button');
        modif.classList.add('modifTache')
        modif.innerHTML = '<i class="pen fas fa-edit"></i>'
        newDiv.appendChild(modif);
        // liste 
        myList.appendChild(newDiv)
        // effacer ce qui est dans l'input
        myInp.value = ''
    }
}

// fonction pour supprimer et verifier

let supprCheck = (e) => {
    let btn = e.target;
    if (btn.classList[0] === 'supr-btn') {
        let parent = btn.parentElement;
        parent.remove();
    }

    // check
    if (btn.classList[0] === 'check-btn') {
        let parent = btn.parentElement;
        parent.classList.toggle('done');
    }

    if (btn.classList[0] === 'modifTache') {
            let span2 = span;
            let span2text = span.innerHTML;
            let parent = span2.parentNode;
            console.log(span2.parentNode);
            let input2 = document.createElement('input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('value', span2text);
            input2.setAttribute('class', 'newI');
            span2.parentNode.replaceChild(input2, span2);
            let input2M = document.querySelector('.newI');
    }
}




let filterTodo = (e) => {
    console.log("hinne" + e.path[0].innerHTML);
    let todos = Array.from(myBtn.children);
    let list = Array.from(myList.children);
    console.log(todos);
    console.log(list);
    console.log("engh");
    console.log(list.length);
    for (let i = 0; i < list.length; i++) {
        console.log(i);
        console.log("boucle");
        console.log(todos[i].innerText);
        //switch (todos[i].innerText) {
        switch (e.path[0].innerHTML){
            case "All":
                console.log('test');
                list[i].style.display = "flex";
                break;
            case "Done":
                if (list[i].classList.contains('done')) {
                    list[i].style.display = "flex";
                } else {
                    list[i].style.display = "none";
                }
                break;
            case "To Do":
                if (!list[i].classList.contains('done')) {
                    list[i].style.display = "flex";
                } else {
                    list[i].style.display = "none";
                }
                break;
        }
    }
}

// EVENT 
myInp.addEventListener('keypress', addTodo);
myList.addEventListener('click', supprCheck)
myBtn.addEventListener('click', filterTodo)
