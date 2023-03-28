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

$idArray = array();
$nameArray = array();
$linkArray = array();
$imglinkArray = array();
$priceArray = array();

while ($row = mysqli_fetch_assoc($result)) {
    array_push($idArray, $row["id"]); 
    array_push($nameArray, $row["name"]); 
    array_push($linkArray, $row["link"]); 
    array_push($imglinkArray, $row["imglink"]); 
    array_push($priceArray, $row["price"]);  
}

mysqli_data_seek($result, 0);

while ($row = mysqli_fetch_assoc($result)) {

    $filename =  $filename = "pages/" . $row['link'];
    
    $id = $row['id'];
    $name = $row['name'];
    $link = $row['link'];
    $imglink = $row['imglink'];
    $price = $row['price'];

    ob_start();

    include("template.php");
    
    $page_content = ob_get_contents();
    
    ob_end_clean();
    
    file_put_contents($filename, $page_content);
}
mysqli_close($conn);
?>