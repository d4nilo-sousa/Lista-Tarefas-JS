// relaciona os elementos do HTML com o JavaScript
const inputBox = document.getElementById('input-box');
const button = document.querySelector('button');
const lista = document.getElementById('lista');

//função que adiciona as tarefas
function addTarefa() {
    //se o valor do campo de texto estiver vazio, um alert é exibido
    if (inputBox.value.trim() === '') {
        alert('Você precisa adicionar uma tarefa!');
        return;
    //caso contrário, a tarefa eh adicionada na lista
    } else {
        let li = document.createElement('li'); //cria um novo item da lista
        li.textContent = inputBox.value.trim(); //adiciona o valor inserido no campo ao item da lista
        lista.appendChild(li); //adiciona o item da lista ao final da lista

        let span = document.createElement('span'); //cria um novo span
        span.textContent = '\u00d7'; //adiciona o x ao span
        li.appendChild(span); //adiciona o span ao item da lista
    }

    inputBox.value = ''; // limpa o campo de texto
    salvarDados();
}

// Função para escapar caracteres especiais e prevenir XSS
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}


//evento de click no botão de adicionar tarefas
lista.addEventListener('click', function(e) {
    // se o elemento clicado for um item da lista, ele é marcado ou desmarcado
    if (e.target.tagName === 'LI') {

        //marca ou desmarca o item da lista
        e.target.classList.toggle('checked');

        salvarDados();

    // caso contrário se o elemento clicado for o x, o item da lista é removido
    } else if (e.target.tagName === 'SPAN') {

        //remove o item da lista
        e.target.parentElement.remove();
    }
        salvarDados();   
}, false);

//evento que permite adicionar tarefas com a tecla enter
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTarefa();
    }
});

//função para salvar os dados
function salvarDados() {
    //salva os dados no localStorage
    localStorage.setItem('data', lista.innerHTML);
}

//função para mostrar os dados
function mostrarDados() {
    //mostra os dados salvos no localStorage
    lista.innerHTML = localStorage.getItem('data');
}

mostrarDados();