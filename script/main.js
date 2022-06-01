// import data from "./data/data.js";

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Max-Expence",
        data: [
          {
            day: "mon",
            amount: 17.45,
          },
          {
            day: "tue",
            amount: 34.91,
          },
          {
            day: "wed",
            amount: 52.36,
          },
          {
            day: "thu",
            amount: 31.07,
          },
          {
            day: "fri",
            amount: 23.39,
          },
          {
            day: "sat",
            amount: 43.28,
          },
          {
            day: "sun",
            amount: 25.48,
          },
        ],
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "rhsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderRadius: "12px",
      },
    ],
  },
  options: {
    parsing: {
      xAxisKey: "day",
      yAxisKey: "amount",
    },
  },
});
