window.onload = function () {
  selectMes("Jan");
};

function selectMes(mes) {
  const trimestres = document.querySelectorAll(".trimestre");
  trimestres.forEach((m) => {
    m.classList.remove("selected");
  });

  const valores = valoresMeses[mes];
  document.getElementById("total-notas-emitidas").textContent =
    valores.emitidas.toFixed(2);
  document.getElementById("total-notas-sem-cobranca").textContent =
    valores.emitidasComCobranca.toFixed(2);
  document.getElementById("total-notas-vencidas").textContent =
    valores.vencidas.toFixed(2);
  document.getElementById("total-notas-a-vencer").textContent =
    valores.aVencer.toFixed(2);
  document.getElementById("total-notas-pagas").textContent =
    valores.pagas.toFixed(2);

  const meses = document.querySelectorAll(".mes");
  meses.forEach((m) => {
    m.classList.remove("selected");
    if (m.textContent === mes) {
      m.classList.add("selected");
    }
  });
}