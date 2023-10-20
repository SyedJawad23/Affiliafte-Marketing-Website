<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $issue = $_POST["issue"];

    $to = "syedjawaduddin99@gmail.com";
    $subject = "New Contact Form Submission";

    $message = "Name: $name\n";
    $message .= "Subject: $subject\n";
    $message .= "Issue: $issue\n";

    // You can add more headers as needed
    $headers = "From: webmaster@example.com";

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect to a thank you page or display a success message
    header("Location: thank_you.html");
    exit();
}
?>
