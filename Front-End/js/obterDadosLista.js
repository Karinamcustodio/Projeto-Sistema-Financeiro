// Função para obter os dados da tabela
// function obterDadosTabela() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(dadosTabela);
//     }, 500);
//   });
// }

// // Atualiza a tabela com os dados obtidos da API
// function updateTable() {
//   obterDadosTabela().then((dados) => {
//     const tbody = document.getElementById("tabela-linhas");
//     tbody.innerHTML = ""; // Limpa o conteúdo do tbody antes de adicionar as novas linhas

//     dados.forEach((item) => {
//       const tr = document.createElement("tr");
//       tr.innerHTML = `
//         <td>${item.nome}</td>
//         <td>${item.numeroNota}</td>
//         <td>${item.dataEmissao}</td>
//         <td>${item.dataCobranca}</td>
//         <td>${item.dataPagamento}</td>
//         <td>${item.valorNota}</td>
//         <td>${item.docNota}</td>
//         <td>${item.docBoleto}</td>
//         <td class="status-${item.statusNotas
//           .toLowerCase()
//           .replace(" ", "-")}"><h4>${item.statusNotas}</h4></td>
//         <td><i class="bi bi-list"></i></td>
//       `;
//       tbody.appendChild(tr);
//     });

//     // Atualiza a referência das linhas após adicionar os novos dados
//     rows = Array.from(document.querySelectorAll("#tabela-linhas tr"));

//     // Atualiza a paginação após atualizar os dados da tabela
//     // update();
//   });
// }

// // Inicialização da paginação após obter os dados da tabela
// obterDadosTabela().then(() => {
//   updateTable();
//   // init();
// });

// obterDadosTabela().then((dados) => {
//   const data = dados.map((item, index) => item);
// });