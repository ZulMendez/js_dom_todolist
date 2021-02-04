let body = document.querySelector('body');

// selectors
let input1 = document.querySelector('.input1');
let addButton = document.querySelectorAll('button')[0];
let allButton = document.querySelectorAll('button')[1];
let doneButton = document.querySelectorAll('button')[2];
let todoButton = document.querySelectorAll('button')[3];
let contenuList = document.querySelector('.contenu');
let listeUL1 = document.querySelector('#liste1');
let listeUL2 = document.querySelector('#liste2');
let listeUL3 = document.querySelector('#liste3');
let listeUL4 = document.querySelector('#liste4');

let monTabDone = [];
let monTabtodo = [];
let monTabAll = [];

let monTab = [];

addButton.onclick = () => {
    let userValue = input1.value;// recup val.input
    if (userValue === userValue) {
        let monLi = document.createElement('li');
        monTab.push(userValue);
        listeUL1.appendChild(monLi); 
        // SPAN
        let span = document.createElement('span');
        span.style.backgroundColor = 'white';
        span.style.padding = '0 200px';
        span.style.margin = '10px 20px';
        span.style.fontWeight = 'bold';
        span.innerText = userValue;
        monLi.append(span);
        // CHECKBOX
        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkbox");
        checkBox.style.margin = '10px 20px';
        monLi.append(checkBox);
        // BOUTON SUPPRIMER
        let suppr = document.createElement('button');
        suppr.setAttribute('color', 'red');
        suppr.style.margin = '10px 20px';
        suppr.innerHTML = '<i class="trash fas fa-trash-alt"></i>';
        monLi.append(suppr)
        monTab.push(suppr)
        // BOUTON MODIFIER
        let modif = document.createElement('button');
        modif.setAttribute('color', 'white')
        modif.innerHTML = '<i class="pen fas fa-edit"></i>'
        monLi.append(modif);
        monTab.push(modif)
        // Supprime event
        suppr.addEventListener('click', () => {
        monLi.remove(suppr.parentNode)
        })
        // Modifie event
        modif.addEventListener('click', () => {
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
            input2M.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    let valeurI = input2.value;
                    let span3 = document.createElement('span');
                    span3.innerText = valeurI;
                    span3.style.backgroundColor = 'white';
                    span3.style.fontWeight = 'bold';
                    span3.style.padding = '0 200px';
                    span3.style.margin = '10px 20px';
                    parent.replaceChild(span3, input2); 
                }
            })
        })
        let checkbox = document.getElementsByClassName('checkbox')
        Array.from(checkbox).forEach(element => {
            element.addEventListener('change', (e) => {
                if (e.checked) {
                    monTabDone.push(element)
                    alert('checked');
                } else {
                    monTabtodo.push()
                }
            })
            
        });
    }
};

    // keycode
    input1.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            monTab.push(input1)
            console.log(input1.value);
        }
    });








