<?php
$username = "username"; //mysql username
$password = "password"; //mysql password
$hostname = "localhost"; //hostname
$databasename = "instagram"; //databasename

$connecDB = mysql_connect($hostname, $username, $password)or die('could not connect to database');
mysql_select_db($databasename,$connecDB);
$id = $_POST['id'];
$locationname = $_POST['locationname'];
$id_hash = md5($id);
if($_POST['caption']){
	@$caption = $_POST['caption'];
}else {
	$caption= "no caption";
};

$tags = $_POST['tags'];
$time = date ('Y-m-d H:i',$_POST['time']);
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$link = $_POST['link'];
$filter = $_POST['filter'];
$likes = $_POST['likes'];
$username = $_POST['username'];
$profile_picture = $_POST['profile_picture'];
$comments_count = $_POST['comments_count'];
$insta_link = $_POST['insta_link'];




if($_POST['id']){

	$sql = "INSERT INTO `instagram_beijing_new` (`id_hash`,`id`, `locationname`, `caption`, `tags`, `time`, `lat`, `lng`,`link`, `filter`,`likes`,`username`,`profile_picture`,`comments_count`,`insta_link`) VALUES ('$id_hash','$id', '$locationname', '$caption', '$tags', '$time', '$lat', '$lng', '$link', '$filter', '$likes', '$username', '$profile_picture', '$comments_count', '$insta_link');";

	mysql_query($sql);
}





?>