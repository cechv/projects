<?php
$servername = "localhost";
$user = "root";
$pass = "";
$db = "userinfo";

$conn = mysqli_connect( $servername, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO information (email, phone, name, lastname, street, town, postcode) VALUES (?, ?, ?, ?, ?, ?, ?)";

// Prepare statement
$stmt = $conn->prepare($sql);

// Bind parameters to placeholders
$stmt->bind_param("sssssss", $email, $phone, $name, $lastname, $street, $town, $postcode);

// Set parameter values
$email = $_POST["email"];
$phone = $_POST["phone"];
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$street = $_POST["street"];
$town = $_POST["town"];
$postcode = $_POST["postcode"];

// Execute statement
if ($stmt->execute()) {
  echo "Data inserted successfully.";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>