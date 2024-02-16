let rows = Array.from(document.querySelectorAll("#tabela-linhas tr"));

function orderColumn(colIndex, element) {
  let order = element.dataset.order || 'asc';

  rows.sort((a, b) => {
    let valueA = a.children[colIndex].textContent.trim();
    let valueB = b.children[colIndex].textContent.trim();

    if (colIndex === 2 || colIndex === 3 || colIndex === 4) { // Se for uma coluna de data
      valueA = new Date(valueA.split('/').reverse().join('/'));
      valueB = new Date(valueB.split('/').reverse().join('/'));
    }

    if (order === 'asc') {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  if (order === 'asc') {
    element.dataset.order = 'desc';
    element.innerHTML = '&#x25B2;';
  } else {
    element.dataset.order = 'asc';
    element.innerHTML = '&#x25BC;';
  }

  rows.forEach(row => row.parentNode.appendChild(row));
}
