<?php
    
    session_start();
    $rid=$_GET['rid'];
    $_SESSION['rid']=$rid;
    ?>

<!DOCTYPE html>
<html>

<head>
    <title>ChartJS - BarGraph</title>
    <style type="text/css">
        #chart-container {
            width: 640px;
            height: auto;
        }
    </style>
</head>

<body><br><br>
  <br><br><br><br>
    <center>

        <div id="chart-container">
            <canvas id="mycanvas" style="height:500px;width: content-box;"></canvas>
        </div>
    </center>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>

    <script type="text/javascript" src="js/app.js"></script>
    
    
    
    
    
    
    
    
    
</body>

</html>