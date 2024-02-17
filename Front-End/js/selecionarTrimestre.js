function selectTrimestre(trimestre) {
  const meses = document.querySelectorAll(".mes");
  meses.forEach((m) => {
    m.classList.remove("selected");
  });

  const valores = ValoresTrimestre[trimestre];
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

  const trimestres = document.querySelectorAll(".trimestre");
  trimestres.forEach((t) => {
    t.classList.remove("selected");
    if (t.getAttribute("onclick") === `selectTrimestre('${trimestre}')`) {
      t.classList.add("selected");
    }
  });
}