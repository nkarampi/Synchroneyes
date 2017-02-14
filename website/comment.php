<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="utf-8">
  <meta name="description" content="Test your colorblindness">
    <meta name="keywords" content="Synchoneyes, colorblindness, eyes, test">
    <meta name="author" content="Karampinas Nikolaos, Noulis Aristeidis">
    <link rel="icon" type="image/ico" href="/images/synchroneyes.ico">
    <link rel="stylesheet" type="text/css" media="all" href="style2.css">
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
     <script type='text/javascript' src='comscript.js'></script>
    <title>Synchroneyes - Comments</title>
  </head>
<body id="news_b">
<header>
<div class="top">
		<img id="logo"	src="images/logo.png" alt="Synchroneyes logo">
	</div>
 <nav>
          <ul>
           <li><a href="index.html">Home</a></li>
           <li><a href="PersonalTest.html">Personal Test</a></li>
           <li><a href="SupervisedTest.html">Supervised Test</a></li>
           <li><a class="active" href="comments.php">Comments</a></li>
          </ul>
</nav>
</header>
<div class="container">
     <div class="test">
		<h2>Comments from users</h2>
		<h3>Leave your results and experience from our test</h3>
<form action="comments.php" method="POST">
			Email: <input type="email" id="email" name="email">
				<div>
				<textarea name ="comment" id="comment" required></textarea>
				</div>
			<input type="submit" name="submit1" value="Post">
		</form>

  <div class="com_section">
                                  <?php show(0);  ?>
                </div>
	 </div>
</div>

<footer class="forcefooter">© 2016. This page was created for academic purposes on the subject of Software Technology at the Aristotle University of Thessaloniki.</footer>
</body>
</html>
