<?php include('validate-signup.php');?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="Tobatsi Thamae" />
	<title>Rogue Movies :: Sign Up</title>
	<link rel="icon" type="images/image.png"  sizes="30x30"  href="images/Logo.png" />
	<link rel="stylesheet" type="text/css" href="css/style1.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script type="text/javascript" src="validate.js"></script>
</head>
<body class="body1">
	<div class="header">
		<h1 id="logo"><a href="../index.php"><img src="images/Logo.png" alt="website logo" class="logo" height="80px" width="100px" />Rogue Movies</a></h1>
	</div>	
	<div class="header1">
		<h1>Sign Up</h1>
	</div>
	
	<form method="post" action="signup.php" class="form" onsubmit="return(validateForm());">
		<?php include('errors.php');?>

		<div id="error"></div>

		<div class="input-group">
			<label for="fname">First name:</label>
			<input type="text" name="fname" id="fname" placeholder="Lionel" >
		</div>
		<div class="input-group">
			<label for="lname">Last name:</label>
			<input type="text" name="lname" id="lname" placeholder="Messi" >
		</div>
		<div class="input-group">
			<label for="email1">Email address:</label>
			<input type="email1" name="email1" id="email1"  placeholder="Messi@gmail.com">
		</div>
		<div class="input-group">
			<label for="pass1">Password:</label>
			<input type="password" name="pass1" id="pass1">
		</div>
		<div class="input-group">
			<label for="pass2">Confirm password:</label>
			<input type="password" name="pass2" id="pass2">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="reg_user1">Register</button>
		</div>
		<p id="link">
			Already a member? <a href="#">Sign in</a>
		</p>
	</form>
</body>
</html>