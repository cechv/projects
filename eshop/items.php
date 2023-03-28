<?php

$servername = "localhost";
$user = "root";
$pass = "";
$db = "shopitems";

$conn = mysqli_connect( $servername, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id, name, link, imglink, price FROM items";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $id = array();
    $name = array();
    $link = array();
    $imglink = array();
    $price = array();

    while($row = mysqli_fetch_assoc($result)) {
        array_push($id, $row["id"]); 
        array_push($name, $row["name"]); 
        array_push($link, $row["link"]); 
        array_push($imglink, $row["imglink"]); 
        array_push($price, $row["price"]);       
    }
} else {
    echo "0 results";
}
?>