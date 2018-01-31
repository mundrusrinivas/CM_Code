$(document).ready(function () {


    var doughnutData = [
        {
            value: 30,
            color: "#F7464A"
        },
        {
            value: 50,
            color: "#46BFBD"
        },
        {
            value: 100,
            color: "#FDB45C"
        },
        {
            value: 40,
            color: "#949FB1"
        },
        {
            value: 120,
            color: "#4D5360"
        }

    ];
    var lineChartData = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]

    };
    var pieData = [
        {
            value: 22,
            color: "#F38630"
        },
        {
            value: 38,
            color: "#E0E4CC"
        },
        {
            value: 40,
            color: "#69D2E7"
        }

    ];
    var barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [284, 242, , 230, 227, 236, 254, 297, 301, 306, 308, 309, 310]
            },
            {
                fillColor: "rgba(100,150,190,0.5)",
                strokeColor: "rgba(100,150,190,1)",
                data: [55, 47, 44, 44, 45, 49, 57, 58, 59, 60, 60, 60]
            },
            {
                fillColor: "rgba(51,134,175,0.5)",
                strokeColor: "rgba(51,134,175,1)",
                data: [195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195]
            }
        ]

    };

    var bar1ChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [682, 1474, 1827, 1827, 1827, 1827, 1827, 1827, 1827, 1827, 1827, 1827]
            }
        ]

    };

    var chartData = [
        {
            value: Math.random(),
            color: "#D97041"
        },
        {
            value: Math.random(),
            color: "#C7604C"
        },
        {
            value: Math.random(),
            color: "#21323D"
        },
        {
            value: Math.random(),
            color: "#9D9B7F"
        },
        {
            value: Math.random(),
            color: "#7D4F6D"
        },
        {
            value: Math.random(),
            color: "#584A5E"
        }
    ];
    var radarChartData = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]

    };
    //new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(doughnutData);
   // new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);
    //new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData);
    //  new Chart(document.getElementById("polarArea").getContext("2d")).PolarArea(chartData);
    //new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);
    //new Chart(document.getElementById("bar1").getContext("2d")).Bar(bar1ChartData);
    //new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData);


});