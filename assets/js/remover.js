var excluir = document.getElementById("excluir");
var tr = document.querySelector(".paciente");

excluir.addEventListener("click", function() {
    tr.remove();
})