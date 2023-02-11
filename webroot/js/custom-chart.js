const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
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
