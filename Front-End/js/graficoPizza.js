document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("chart-pizza").getContext("2d");

  var chartPizza = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Receita Recebida", "Inadimplência"],
      datasets: [
        {
          data: [600, 400],
          backgroundColor: ["#527853d8", "#ff0000a6"],
        },
      ],
    },
    options: {
      responsive: true,
      layout: {
        padding: 7,
      },
    },
  });
});