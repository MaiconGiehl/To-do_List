function adicionar () {
    
    const titulo = document.getElementById("tituloTarefa").value;
    const descricao = document.getElementById("descricaoTarefa").value;
    const nmrTarefas = [];
    
    while (localStorage.getItem(`nmrTarefas`) > nmrTarefas.length) {
            nmrTarefas.push("1");
        }
    
    if (titulo != 0 && descricao != 0) {
        nmrTarefas.push("1");
        var idTarefa = nmrTarefas.length;
         
        localStorage.setItem(`nmrTarefas`, nmrTarefas.length);
        localStorage.setItem(`titulo${idTarefa}`, titulo);
        localStorage.setItem(`descricao${idTarefa}`, descricao);
        
        nmrTarefas.push(idTarefa)

        const tarefasCadastradas = document.querySelector(".tarefasCadastradas");
        tarefasCadastradas.insertAdjacentHTML("beforeend", `<div id="${idTarefa}"> 
            <fieldset style="text-transform: capitalize" class="tarefa"> 
            <h1>${titulo} </h1> <h3 class="exibirTarefa" onclick="exibirTarefa(${idTarefa})"> Exibir Mais </h3> 
            <input class="checkbox" type="checkbox" onclick="alterarCheckbox(${idTarefa})"> Marcar como Concluída </input> <br> <br>
            <button class="apagar" onclick="apagarTarefa(${idTarefa})">Apagar Tarefa</button> 
            </fieldset> <br> </div>`);
        
        //Observação: foi escrito a mão mesmo
        
        document.getElementById("tituloTarefa").value = "";
        document.getElementById("descricaoTarefa").value = "";
        

    } else {
        alert("Preencha os dois campos para prosseguir.");
    }
}

function alterarCheckbox (id) {
    const checagem = document.getElementById(id).firstElementChild;
    
    const checkbox = checagem.querySelector(".checkbox");
    checkbox.disabled = true;
    
    checagem.style.background = "green";
}

function exibirTarefa (id) {
    let titulo = localStorage.getItem(`titulo${id}`);
    let descricao = localStorage.getItem(`descricao${id}`);
    
    alert(`Tarefa: ${titulo}, Descrição: ${descricao}`);
}

function apagarTarefa (id) {
    const tarefa = document.getElementById(`${id}`);
    tarefa.innerHTML = "";
}

function revelarCache () {
    const tarefasCache = document.querySelector(".tarefasCache");
    tarefasCache.innerHTML = "";

    let nmrTarefasEmCache = localStorage.getItem(`nmrTarefas`);
    
    for (let idTarefa = 1; idTarefa <= nmrTarefasEmCache; idTarefa++) {
        let titulo = localStorage.getItem(`titulo${idTarefa}`);
        
        tarefasCache.insertAdjacentHTML("beforeend", `<div id="${idTarefa}"> 
        <fieldset style="text-transform: capitalize" class="tarefaCacheCSS"> 
        <h2>${titulo} </h2> <p class="exibirTarefa" onclick="exibirTarefa(${idTarefa})"> Exibir Mais </p> 
        </fieldset> <br> </div>`)
    }
}

