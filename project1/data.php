
<?php
//setting header to json
header('Content-Type: application/json');
//database

include "connection.php";
$conn = mysqli_connect($server,$user,$pass,$dbname);
session_start();
$rid=$_SESSION['rid'];
// get connection

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);

}

//query to get data from the table

$query = sprintf("SELECT l1,l2,l3 FROM result WHERE r_id=$rid");




//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
echo json_encode($data);


?>




