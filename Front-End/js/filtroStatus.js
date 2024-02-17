function filtrarPorStatus(statusSelecionado) {
  var tbody = document.getElementById("tabela-linhas");
  tbody.innerHTML = "";

  obterDadosTabela().then((dados) => {
    dados.forEach((item) => {
      if (
        item.statusNotas.toLowerCase().replace(" ", "-") ===
          statusSelecionado ||
        statusSelecionado === "status"
      ) {
        var tr = document.createElement("tr");
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
      }
    });
  });
}
