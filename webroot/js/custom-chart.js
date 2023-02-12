const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sales", "Visits", "Apointments"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
      },
    ],
  },
  options: {
    // responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const mediaQuery = window.matchMedia("(max-width: 768px)");
$(".dummy-btn").on("click", function () {
  $(".header, .side-content, .layout").toggleClass("active", 300);
  $("i", this).toggleClass("fa-solid fa-arrow-left fa-solid fa-arrow-right", 300);
});
