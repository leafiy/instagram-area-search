<?php
$username = "root"; //mysql username
$password = "321320tmly"; //mysql password
$hostname = "localhost"; //hostname
$databasename = "instagram"; //databasename

$connecDB = mysql_connect($hostname, $username, $password)or die('could not connect to database');
mysql_select_db($databasename,$connecDB);
$id = $_POST['id'];
$locationname = $_POST['locationname'];
if($_POST['caption']){
	@$caption = $_POST['caption'];
}else {
	$caption= "no caption";
};

$tags = $_POST['tags'];
$time = $_POST['time'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$link = $_POST['link'];
if($_POST['id']){

$sql = "INSERT INTO `instagram-data` (`id`, `locationname`, `caption`, `tags`, `time`, `lat`, `lng`, `link`) VALUES ('$id', '$locationname', '$caption', '$tags', '$time', '$lat', '$lng', '$link');";
mysql_query($sql);
}
?>