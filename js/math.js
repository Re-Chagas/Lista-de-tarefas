function addItens() {
    let resultado = document.getElementById("resultado");
        if (resultado.value.trim() !== "") {
        let selecionados = document.createElement("li"); 
        selecionados.innerHTML = resultado.value;

        resultado.focus();

        let finalizarBtn = document.createElement("button"); 
        finalizarBtn.innerHTML = "Finalizar";
        finalizarBtn.className = "finalizarBtn";
        finalizarBtn.addEventListener("click", function() {
            finalizarTarefa(selecionados); 
        });

        resultado.focus();

        let excluirBtn = document.createElement("button"); 
        excluirBtn.innerHTML = "Excluir"; 
        excluirBtn.addEventListener("click", function() { 
            excluirTarefa(selecionados); 
        });

        resultado.focus();

        selecionados.appendChild(finalizarBtn); 
        selecionados.appendChild(excluirBtn); 
        document.getElementById("item").appendChild(selecionados); 
        resultado.value = ""
    }
}

function finalizarTarefa(tarefa) {
    tarefa.removeChild(tarefa.childNodes[1]);
    document.getElementById("finalizadas").appendChild(tarefa);
}
function excluirTarefa(tarefa) {
    tarefa.remove(); 
}
document.getElementById("button").addEventListener("click", addItens); 
document.addEventListener("keypress", function(event) { 
    if (event.keyCode === 13) { 
        addItens();
    }
})