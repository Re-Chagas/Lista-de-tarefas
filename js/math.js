function AdicionarItens() {
    let resultado = document.getElementById("resultado");
        if (resultado.value.trim() !== "") {
        let selecionados = document.createElement("li"); 
        selecionados.innerHTML = resultado.value;

        let FinButton = document.createElement("button"); 
        FinButton.innerHTML = "Finalizar";
        FinButton.className = "FinButton";

        let  delButton = document.createElement("button"); 
        delButton.innerHTML = "Excluir"; 

        selecionados.appendChild(FinButton); 
        selecionados.appendChild(delButton); 
        document.getElementById("item").appendChild(selecionados); 
        resultado.value = ""

        resultado.focus();

        //addevents
        FinButton.addEventListener("click", function() {
            finalizarTarefa(selecionados); 
        });
        delButton.addEventListener("click", function() { 
            excluirTarefa(selecionados); 
        });
    }
}

function finalizarTarefa(tarefa) {
    tarefa.removeChild(tarefa.childNodes[1]);
    document.getElementById("finalizadas").appendChild(tarefa);
}
function excluirTarefa(tarefa) {
    tarefa.remove(); 
}
document.getElementById("button").addEventListener("click", AdicionarItens); 
document.addEventListener("keypress", function(event) { 
    if (event.keyCode === 13) { 
        AdicionarItens();
    }
})