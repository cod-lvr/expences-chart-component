// import data from "./data/data.json";

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "reguler",
        data: [17.45, 34.91, 3, 5, 2, 3],
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "rhsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
      },
    ],
  },
  options: {},
});
