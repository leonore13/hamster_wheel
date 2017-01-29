<?php

if (empty($_POST['submit']))
	{
		echo "Form is not submitted";
		exit;
	}
if (empty($_POST["email"]) || empty($_POST["time"]))
	{
		echo "Please fill the form"
		exit;
	}
	
$email = $_POST("email");
$time = $_POST("time");
?>