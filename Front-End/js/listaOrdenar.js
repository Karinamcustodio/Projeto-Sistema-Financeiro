let rows = Array.from(document.querySelectorAll("#tabela-linhas tr"));

function orderColumn(colIndex, element) {
  let order = element.dataset.order || "asc";

  rows.sort((a, b) => {
    let valueA = a.children[colIndex].textContent.trim();
    let valueB = b.children[colIndex].textContent.trim();

    if (colIndex === 2 || colIndex === 3 || colIndex === 4) {
      valueA = new Date(valueA.split("/").reverse().join("/"));
      valueB = new Date(valueB.split("/").reverse().join("/"));
    } else {
      if (!isNaN(valueA)) {
        valueA = parseFloat(valueA);
        valueB = parseFloat(valueB);
      }
    }

    if (order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  if (order === "asc") {
    element.dataset.order = "desc";
    element.innerHTML = "&#x25B2;";
  } else {
    element.dataset.order = "asc";
    element.innerHTML = "&#x25BC;";
  }

  rows.forEach((row) => row.parentNode.appendChild(row));
}