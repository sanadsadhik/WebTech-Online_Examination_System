$(document).ready(function() {
    $.ajax({
        url: "http://localhost/project1/data.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            // var id = data.length;
            // console.log(id);
            var level = [];
            var level_value = [];
            var levelusr = [];
            var leval_usr = [];
            // var levelno = 0;
            var users = [];
            for (var i in data) {
                // var i = data[0];
                level.push("l1");
                level_value.push(data[i].l1);
                level.push("l2");
                level_value.push(data[i].l2);
                level.push("l3");
                level_value.push(data[i].l3);
                levelusr[i] = level;
                leval_usr[i] = level_value;
                level = [];
                level_value = [];
                // levelno = 0;
            }

            console.log(levelusr);
            var ctx = $("#mycanvas");
            var chartdata = [];
            var barGraph = [];

            for (var j = 0; j < data.length; j++) {
                chartdata[j] = {
                    labels: levelusr[j],
                    datasets: [{
                        label: 'No_of_questions',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: leval_usr[j]
                    }]
                };

                barGraph[j] = new Chart(ctx, {
                    type: 'bar',
                    data: chartdata,
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
            console.log(barGraph);
            // var obj = [];
            // obj[0] = barGraph;
            // console.log(obj[0]);
        },
        error: function(data) {
            console.log('unsuccessful');
        }
    });
});