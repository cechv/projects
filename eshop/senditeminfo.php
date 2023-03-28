<?php
$servername = "localhost";
$user = "root";
$pass = "";
$db = "userinfo";

$conn = mysqli_connect( $servername, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT MAX(id) AS id FROM information";
$result = $conn-> query($sql);
$row = $result->fetch_assoc();
$id=$row['id'];

$data = json_decode(file_get_contents("php://input"));
$item_id = $data->item_id;
$quantity = $data->quantity;

// $item_id = "1";
// $quantity = "6";

// Insert data into 'iteminfo' table
$sql = "INSERT INTO itemsbought (user_id, item_id, quantity) VALUES ($id, $item_id, $quantity)";

if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$conn->close();
?>