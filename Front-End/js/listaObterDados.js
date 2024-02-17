import { dadosTabela } from "../js/valoresLista.js";

function obterDadosTabela() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dadosTabela);
    }, 1);
  });
}

let paginaAtual = 1;
const registrosPorPagina = 11;

function updateTable() {
  obterDadosTabela().then((dados) => {
    const tbody = document.getElementById("tabela-linhas");
    tbody.innerHTML = "";

    const inicio = (paginaAtual - 1) * registrosPorPagina;
    const fim = inicio + registrosPorPagina;
    const dadosPagina = dados.slice(inicio, fim);

    dadosPagina.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.numeroNota}</td>
        <td>${item.dataEmissao}</td>
        <td>${item.dataCobranca}</td>
        <td>${item.dataPagamento}</td>
        <td>${item.valorNota}</td>
        <td>${item.docNota}</td>
        <td>${item.docBoleto}</td>
        <td class="status-${item.statusNotas
          .toLowerCase()
          .replace(" ", "-")}"><h4>${item.statusNotas}</h4></td>
        <td><i class="bi bi-list"></i></td>
      `;
      tbody.appendChild(tr);
    });

    rows = Array.from(document.querySelectorAll("#tabela-linhas tr"));
  });
}

obterDadosTabela().then(() => {
  updateTable();
});

obterDadosTabela().then((dados) => {
  const data = dados.map((item, index) => item);
});