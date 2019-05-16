<?php
/*Hello <?php echo $_POST["name"]; ?>!<br>
Your mail is <?php echo $_POST["email"]; ?>*/
$msg=$_POST["message"];
$name=$_POST["name"];
$email=$_POST["email"];
$contact=$_POST["contact"];
$my_subject = "Mr/Ms.".$name." given his/her contact number as ".$contact." has sent the following message to enjen.in site throgh mail id: ".$email;
mail("enjentech@gmail.com",$my_subject,$msg);
echo "<script> alert('Thanks For Your Interest...We will contact you soon');</script>";
header("Location: contact.html");
?>
