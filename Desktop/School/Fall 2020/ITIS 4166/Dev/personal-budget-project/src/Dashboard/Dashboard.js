import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';

function Dashboard() {
  return (
    <main className="center" id="main">

        <div className="page-area">
             <article>
                <h1>Doughnut Chart</h1>
                <p>
                    <canvas id="myChart" width = "400" height = "400"></canvas>

                </p>
            </article>
            <article>
                <h1>Bar Graph</h1>
                <p>
                    <canvas id="myChart" width = "400" height = "400"></canvas>

                </p>
            </article>
            <article>
                <h1>Pie Chart</h1>
                <p>
                    <canvas id="myChart" width = "400" height = "400"></canvas>

                </p>
            </article>

        </div>

    </main>
  )

  var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [],
        }
    ],
    labels: []
};

/*function createBar() {
    var ctx = document.getElementById("myChart2").getContext("2d");
    var myBarGraph = new Chart(ctx, {
        type: 'bar',
        data: dataSource
    });
}


function createPie() {
    var ctx = document.getElementById("myChart3").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}*/

function createChart() {
    var ctx = document.getElementById("myChart1").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: dataSource
    });
}

function getBudget() {
    axios.get('/budget')
    .then(function (res) {
        console.log(res);
        for (var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
            dataSource.datasets[0].backgroundColor[i] = res.data.myBudget[i].background;
        }
        createChart();
        //createBar();
        //createPie();
    });
}

getBudget();
}

export default Dashboard;