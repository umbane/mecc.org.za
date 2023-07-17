<?php

// Sanitize form inputs
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$surname = filter_input(INPUT_POST, 'surname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$issue = filter_input(INPUT_POST, 'issue', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);


// Validate the user input data
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die("Invalid email format");
}

// Connect to the MySQL database
$mysqli = new mysqli('localhost', 'sexthera_contact_form_user', 'R@ZqV4iD^!T-', 'sexthera_contact_form_db');

// Insert the user input data into the database
$query = "INSERT INTO contact_form (name, surname, email, issue, message) VALUES (?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($query);
$stmt->bind_param('sssss', $name, $surname, $email, $issue, $message);
$stmt->execute();

// Send an email to the webmaster
$to = "hello@mecc.co.za";
$subject = "New form submission";
$body = "Issue: $issue\n\nMessage:\n$message";
mail($to, $subject, $body);

// Redirect the user to a thank you page
header("Location: thank-you.html");
exit();
?>
