<?php include 'php files/connect.php';

	unset($_SESSION['user']);
	unset($_SESSION['password']);
	unset($_SESSION['name']);
	unset($_SESSION['surname']);
	unset($_SESSION['birth']);
	unset($_SESSION['userID']);
	unset($_SESSION['alert']);
	unset($_SESSION['blank']);
	session_destroy();
	header("Location: index.php");
	exit();
?>
