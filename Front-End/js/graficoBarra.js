document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("chart-barra").getContext("2d");

  var chartBarra = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      datasets: [
        {
          label: "Evolução da Receita Recebida",
          data: chartData.receitaRecebida,
          backgroundColor: ["#527853d8"],
        },
        {
          label: "Evolução da Inadimplência",
          data: chartData.inadimplencia,
          backgroundColor: ["#ff0000a6"],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});