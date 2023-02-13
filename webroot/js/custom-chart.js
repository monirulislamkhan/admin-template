const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sales", "Visits", "Apointments"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3],
        backgroundColor: ["#86d3e3", "#b9b9b9", "#faae47"],
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
