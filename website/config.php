<?php
$connect= mysql_connect("webpagesdb.it.auth.gr:3306","sync_guest","12341234");
	if ($connect){
		mysql_select_db("synchroneyes",$connect);
	}
	else{	 
		die("Failed to connect: " .mysql_error());
	}
?>