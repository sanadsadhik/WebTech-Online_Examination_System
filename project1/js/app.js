$(document).ready(function() {
    $.ajax({
        url: "http://localhost/project1/data.php",
        method: "GET",
        success: function(data) {
            console.log('Successful');
            var level = [];
            var level_value = [];
            // var levelno = 0;
            // for(var i in data) {
            var i = data[0];
            level.push("l1");
            level_value.push(data[0].l1);
            level.push("l2");
            level_value.push(data[0].l2);
            level.push("l3");
            level_value.push(data[0].l3);
            // levelno = 0;
            // }

            var chartdata = {
                labels: level,
                datasets: [{
                    label: 'No_of_questions',
                    backgroundColor: 'rgba(200, 200, 200, 0.75)',
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                    backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
                    data: level_value
                }]
            };

            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata,
                options: {

                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false

                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'No_of_questions',
                                fontStyle: "bold",
                                fontSize: 15
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Levels',
                                fontStyle: "bold",
                                fontSize: 15
                            }
                        }]
                    }
                }
            });
        },
        error: function(data) {
            console.log('unsuccessful');
        }
    });
});