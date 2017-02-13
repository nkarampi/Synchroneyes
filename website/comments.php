<?php
include('config.php');
function show(){
         $rec_limit = 10;
         /* Get total number of records */
         $sql = "SELECT * FROM synchron";
         $retval = mysql_query( $sql);
 
         if(! $retval ) {
            die('Could not get data1: ' . mysql_error());
         }
         $row = mysqli_fetch_array($retval);
         $rec_count = $row[0];
         $numRows = mysql_num_rows($retval);
         $last = ceil($numRows / 10);
         $page=$_GET{'page'};  
         if( $page !=0) {
            /*$page = $page + 1;*/
            $offset=$rec_limit*$page;
         }else {
            /*$page=0;*/
            $offset=0;
         }
         $left_rec = $rec_count - ($page * $rec_limit);
         $sql = "SELECT * FROM synchron ORDER BY DATE DESC LIMIT $offset, $rec_limit";
            
         $retval = mysql_query( $sql);
         
         if(! $retval ) {
            die('Could not get data2: ' . mysql_error());
         }
         
        while($row = mysql_fetch_array($retval)) {
            echo "E-MAIL :{$row['EMAIL']}  <br> ".
               "COMMENT : {$row['COMMENT']} <br> ".
               "DATE : {$row['DATE']} <br> ".
               "--------------------------------<br>";
         }
         
 
		if($page == $last-1){
                       if ($page==0){ echo "$page";} 
                       else{
			$previous = $page-1;
			echo "<a href = \"$_PHP_SELF?page=$previous\">Previous</a> ";
                 }
		}
		else if( $page > 0 && $page!=$last-1){
			$previous=$page-1;
            $next=$page+1;
            echo "<a href = \"$_PHP_SELF?page=$previous\">Previous</a> |";
            echo "<a href = \"$_PHP_SELF?page=$next\">Next</a>";
        }
		else if( $page == 0 ){
             if ($last==0){}
             else{
            $page=$page+1;
            echo "<a href = \"$_PHP_SELF?page=$page\">Next</a>";
           }
         }
           
}
	if ($_POST){
			$email= htmlspecialchars($_POST["email"]);
			$comment= htmlspecialchars($_POST["comment"]);
			mysql_select_db("synchron",$connect);
			if(empty($email) ){ 
                        $email= 'Guest';
                        }
                         mysql_real_escape_string($email);
                         mysql_real_escape_string($comment);
			$query = "INSERT INTO synchron(EMAIL,COMMENT) VALUES (\"" . $email . "\",\"" . $comment . "\")";
			if (mysql_query($query)){
                        $page=$_GET{'page'};  
                        header("location:  $_PHP_SELF?page=$page");
                        exit;
			}
		else{
			die("Failed to connect: ".mysql_error());
		}
		}
		
include('comment.php');
?> 