const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sales", "Visits", "Apointments"],
    datasets: [
      {
        label: "Sales",
        data: [27, 33, 45],
        backgroundColor: ["#86d3e3", "#b9b9b9", "#86d3e3"],
      },
      {
        backgroundColor: ["#b9b9b9", "#86d3e3", "#b9b9b9"],
        label: "Visits",
        data: [32, 37, 47],
      },
      {
        backgroundColor: ["#faae47", "#faae47", "#faae47"],
        label: "Apointments",
        data: [65, 31, 41],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

$(".button-controls").on("click", function () {
  $(".side-content, .side-content__last").toggleClass("active");
  $("i", this).toggleClass("fa-solid fa-chevron-left fa-solid fa-chevron-right");
  if ($(".side-content").hasClass("active")) {
    $("body").append("<div class='overlay'></div>");
  } else {
    $(".overlay").remove();
  }
});

$(".weather-control").hover(function () {
  $(".weather-content").slideToggle(0);
});
