window.onload = function () {
  selectMes("Jan");
};

function selectMes(mes) {
  const meses = document.querySelectorAll(".mes");
  meses.forEach((m) => {
    m.classList.remove("selected");
    if (m.textContent === mes) {
      m.classList.add("selected");
    }
  });

  filterTableByMonth(mes);
}

function filterTableByMonth(mes) {
  const linhas = document.querySelectorAll("#tabela tbody tr");
  linhas.forEach((linha) => {
    const linhaMes = linha.getAttribute("data-mes");
    if (linhaMes === mes) {
      linha.style.display = "";
    } else {
      linha.style.display = "none";
    }
  });
}