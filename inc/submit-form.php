<?php
// Sanitize the user input data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$surname = filter_input(INPUT_POST, 'surname', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$issue = filter_input(INPUT_POST, 'issue', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validate the user input data
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die("Invalid email format");
}

// Connect to the MySQL database
$mysqli = new mysqli('localhost', 'username', 'password', 'contact_form_db');

// Insert the user input data into the database
$query = "INSERT INTO form_submissions (name, surname, email, issue, message) VALUES (?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($query);
$stmt->bind_param('sssss', $name, $surname, $email, $issue, $message);
$stmt->execute();

// Send an email to the webmaster
$to = "webmaster@example.com";
$subject = "New form submission";
$body = "Issue: $issue\n\nMessage:\n$message";
mail($to, $subject, $body);

// Redirect the user to athank you page
header("Location: thank-you.html");
exit();
?>
