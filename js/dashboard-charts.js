
(function () {
  const grid = {
    color: "rgba(148, 163, 184, 0.12)",
  };
  const ticks = {
    color: "#94a3b8",
    font: { size: 11 },
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#cbd5e1", font: { size: 12 } },
      },
    },
  };

  const el = (id) => document.getElementById(id);

  if (el("adminRevenueChart")) {
    new Chart(el("adminRevenueChart"), {
      type: "line",
      data: {
        labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        datasets: [
          {
            label: "Revenue ($K)",
            data: [28, 31, 29, 34, 36, 38],
            borderColor: "#22d3ee",
            backgroundColor: "rgba(34, 211, 238, 0.12)",
            fill: true,
            tension: 0.35,
            borderWidth: 2,
          },
          {
            label: "Target ($K)",
            data: [26, 28, 30, 32, 34, 36],
            borderColor: "#a78bfa",
            borderDash: [6, 4],
            fill: false,
            tension: 0.35,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          x: { grid, ticks },
          y: { grid, ticks, beginAtZero: true },
        },
      },
    });
  }

  if (el("adminRequestsChart")) {
    new Chart(el("adminRequestsChart"), {
      type: "bar",
      data: {
        labels: ["New", "Triaged", "In progress", "Review", "Closed"],
        datasets: [
          {
            label: "Tickets",
            data: [18, 24, 42, 15, 156],
            backgroundColor: [
              "rgba(34, 211, 238, 0.65)",
              "rgba(129, 140, 248, 0.65)",
              "rgba(251, 191, 36, 0.55)",
              "rgba(244, 114, 182, 0.55)",
              "rgba(52, 211, 153, 0.55)",
            ],
            borderWidth: 0,
            borderRadius: 6,
          },
        ],
      },
      options: {
        ...commonOptions,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks },
          y: { grid, ticks, beginAtZero: true },
        },
      },
    });
  }

  if (el("adminRolesChart")) {
    new Chart(el("adminRolesChart"), {
      type: "doughnut",
      data: {
        labels: ["Customers", "Admins", "Partners", "Suspended"],
        datasets: [
          {
            data: [1082, 24, 118, 21],
            backgroundColor: [
              "rgba(34, 211, 238, 0.85)",
              "rgba(129, 140, 248, 0.85)",
              "rgba(251, 191, 36, 0.75)",
              "rgba(148, 163, 184, 0.45)",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        ...commonOptions,
        cutout: "62%",
        plugins: {
          legend: { position: "bottom", labels: { color: "#cbd5e1", padding: 14 } },
        },
      },
    });
  }

  if (el("adminResponseChart")) {
    new Chart(el("adminResponseChart"), {
      type: "radar",
      data: {
        labels: ["API", "Web", "Data", "Mobile", "DevOps", "Support"],
        datasets: [
          {
            label: "Avg. first response (min)",
            data: [12, 18, 22, 28, 15, 9],
            borderColor: "#22d3ee",
            backgroundColor: "rgba(34, 211, 238, 0.2)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          r: {
            angleLines: { color: "rgba(148,163,184,0.15)" },
            grid: { color: "rgba(148,163,184,0.12)" },
            pointLabels: { color: "#94a3b8", font: { size: 11 } },
            ticks: { color: "#64748b", backdropColor: "transparent" },
            suggestedMin: 0,
            suggestedMax: 35,
          },
        },
      },
    });
  }

  if (el("customerMilestoneChart")) {
    new Chart(el("customerMilestoneChart"), {
      type: "line",
      data: {
        labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
        datasets: [
          {
            label: "Planned %",
            data: [10, 22, 35, 48, 58, 70, 82, 100],
            borderColor: "#64748b",
            borderDash: [4, 4],
            fill: false,
            tension: 0.25,
            borderWidth: 2,
          },
          {
            label: "Actual %",
            data: [12, 24, 38, 52, 61, 73, 88, 92],
            borderColor: "#34d399",
            backgroundColor: "rgba(52, 211, 153, 0.15)",
            fill: true,
            tension: 0.35,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          x: { grid, ticks },
          y: {
            grid,
            ticks,
            min: 0,
            max: 100,
            ticks: { callback: (v) => `${v}%` },
          },
        },
      },
    });
  }

  if (el("customerBudgetChart")) {
    new Chart(el("customerBudgetChart"), {
      type: "doughnut",
      data: {
        labels: ["Engineering", "Design", "DevOps", "Contingency"],
        datasets: [
          {
            data: [58, 14, 18, 10],
            backgroundColor: [
              "rgba(34, 211, 238, 0.8)",
              "rgba(167, 139, 250, 0.8)",
              "rgba(251, 191, 36, 0.75)",
              "rgba(148, 163, 184, 0.4)",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        ...commonOptions,
        cutout: "58%",
        plugins: {
          legend: { position: "bottom", labels: { color: "#cbd5e1", padding: 12 } },
        },
      },
    });
  }

  if (el("customerHoursChart")) {
    new Chart(el("customerHoursChart"), {
      type: "bar",
      data: {
        labels: ["Backend", "Frontend", "QA", "Infra", "PM"],
        datasets: [
          {
            label: "Hours (rolling 30d)",
            data: [118, 86, 42, 28, 36],
            backgroundColor: "rgba(99, 102, 241, 0.65)",
            borderRadius: 6,
          },
        ],
      },
      options: {
        ...commonOptions,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks },
          y: { grid, ticks, beginAtZero: true },
        },
      },
    });
  }
})();
