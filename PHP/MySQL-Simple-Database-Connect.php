<?php

// SIMPLE MYSQL DATABASE CONNECTION TEST SCRIPT

$db_user = "admin";
$db_pass = "password";
$db_host = "localhost"; 
$db_name = "wordpress";

$dbhandle = mysql_connect($db_host, $db_user, $db_pass) or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";

$selected = mysql_select_db( $db_name, $dbhandle ) or die("Could not select examples");