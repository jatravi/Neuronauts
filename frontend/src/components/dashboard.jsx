import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../style.css'
const Dashboard = () => {
  useEffect(() => {
    // Mood Meter Chart
    new Chart(document.getElementById("moodChart"), {
      type: "pie",
      data: {
        labels: ["Happy", "Sad", "Fatigue"],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ["#4caf50", "#ff9800", "#f44336"]
        }]
      },
      options: {
        plugins: { legend: { labels: { color: "#fff" } } }
      }
    });

    // Heart Rate Doughnut with % 
    new Chart(document.getElementById("heartRateChart"), {
      type: "doughnut",
      data: {
        labels: ["Heart Rate", "Remaining"],
        datasets: [{
          data: [72, 150 - 72],
          backgroundColor: ["#03a9f4", "#1c3457"]
        }]
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: {
            color: "#fff",
            formatter: (value, ctx) => {
              let sum = ctx.chart.data.datasets[0].data.reduce((a,b) => a + b, 0);
              let percentage = (value / sum * 100).toFixed(0) + "%";
              return percentage;
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    // Blood Pressure Doughnut with %
    new Chart(document.getElementById("bpChart"), {
      type: "doughnut",
      data: {
        labels: ["Systolic/Diastolic", "Remaining"],
        datasets: [{
          data: [118, 200 - 118],
          backgroundColor: ["#ff5722", "#1c3457"]
        }]
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: {
            color: "#fff",
            formatter: (value, ctx) => {
              let sum = ctx.chart.data.datasets[0].data.reduce((a,b) => a + b, 0);
              let percentage = (value / sum * 100).toFixed(0) + "%";
              return percentage;
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>🚀 MAITRI</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="/reports">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </header>

      <div className="card emotion-detection">
        <h2>Emotion Detection</h2>
        <img src="https://imgs.search.brave.com/-U4OGHUNMgCBSQFRrLRw-0XGn3vnUyqeCsvTyWWGoRo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmFzYS5nb3Yvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTAv/aXNzMDcwZTAwMjAy/OS5qcGc_dz0xMDI0" alt="Astronaut" />
        <h2>Mood Meter</h2>
        <div className="mood-meter">
          <canvas id="moodChart"></canvas>
          <p style={{ marginTop: "30px" }}>VOICE DETECTION: HIGH</p>
        </div>
      </div>

      <div className="card health-monitor">
        <h2>Personalized Assistant</h2>
        <div id="chat-window" style={{ height: "480px", overflowY: "auto", border: "1px solid #444", padding: "10px", marginBottom: "10px", borderRadius: "5px", background: "rgba(0,0,0,0.4)", color: "#fff" }}>
          <div className="in"><b> 🤖🤔</b> Hello 👋 I’m your MAITRI assistant. How can I help?</div>
        </div>
        <input type="text" id="chat-input" placeholder="Type your message and press Enter..." style={{ width: "95%", padding: "10px", borderRadius: "5px", border: "none", outline: "none" }} />
      </div>

      <div className="card">
        <h2>Alert System</h2>
        <div className="alert">
          ⚠️<br />
          <h3>HIGH</h3>
          <p>Severe Anxiety</p>
        </div>

        <div className="metrics">
          <canvas id="heartRateChart"></canvas>
          <p>Heart Rate</p>
          <canvas id="bpChart"></canvas>
          <p>Blood Pressure</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
