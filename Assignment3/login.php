<?php include 'php files/connect.php' ?>
<?php


	$email = $_POST["email"];
	$pass = $_POST["password"];

	$query = "SELECT * FROM tbusers WHERE email = '$email' AND password = '$pass'";

	$res = mysqli_query($mysqli, $query); 

	if($row = mysqli_fetch_array($res))
	{
		$_SESSION['user'] = $email;
		$_SESSION['password'] = $pass;
		$_SESSION['name'] = $row['name'];
		$_SESSION['surname'] = $row['surname'];
		$_SESSION['birth'] = $row['birthday'];
		$_SESSION['userID'] = $row['user_id'];
		$_SESSION['admin'] = $row['admin']; //ADMIN CHECK
		$_SESSION['alert'] = false;
		$_SESSION['blank'] = "no";
		header("Location: home.php");
		exit();
	
	}
	else
	{
		$_SESSION['alert'] = true;
		header("Location: index.php");
		exit();
	}
?>