<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require("vendor/phpmailer/phpmailer/src/PHPMailer.php");
require("vendor/phpmailer/phpmailer/src/SMTP.php");
require("vendor/phpmailer/phpmailer/src/Exception.php");

require_once('vendor/autoload.php');

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $name = $request->name;
  $email = $request->email;
  $subject = $request->subject;
  $message = $request->message;

  $dotenv = \Dotenv\Dotenv::createImmutable(__DIR__.'/../');
  $dotenv->load();

  $mail = new PHPMailer(true);

  $debug = '';

  try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_CONNECTION;                      // Enable verbose debug output
        //$mail->Debugoutput = function($str, $level) {
        //  $GLOBALS['debug'] .= "$level: $str\n";
        //};


        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = $_ENV["HOST"];                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = $_ENV["EMAIL"];                     // SMTP username
        $mail->Password   = $_ENV["PASSWORD"];                               // SMTP password
        $mail->SMTPSecure = "ssl";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        //Recipients
        $mail->setFrom('jake@jakerussell.photography');
        $mail->addAddress('jake@jakerussell.photography');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = "Form Submission - " . htmlentities($subject);
        $mail->Body    = "<strong>Name: </strong>" . htmlentities($name) .
                        "<br><strong>Email: </strong>" . $email .
                        "<br><strong>Subject: </strong>" . htmlentities($subject) .
                        "<br><strong>Message: </strong>" . htmlentities($message);

        $mail->send();

        $response = array("title"=>"Message Sent!", "body"=>"Thank you for contacting me {$name}.");
        

    } catch (Exception $e) {
        $response = array("title"=>"Error", "body"=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
} else {
    $response = array("title"=>"Error", "body"=>"Message could not be sent - no data provided");
}

echo json_encode(['response'=>$response]);
?>