<?php

	//$username = "";
	//$email    = "";
	include('config.php');
	$errors = array(); 
	$_SESSION['success'] = "";
	// REGISTER USER
	if (isset($_POST["reg_user1"])) {
		
		$name = $_POST["fname"];
		$surname = $_POST["lname"];
		$email1 = $_POST["email1"];
		$pass1 =  $_POST["pass1"];
		$pass2 =  $_POST["pass2"];

		// form validation: ensure that the form is correctly filled
		if (empty($name)) { array_push($errors, "First name is required"); }
		if (empty($surname)) { array_push($errors, "Last name is required"); }
		if (empty($email1)) { array_push($errors, "Email is required"); }
		if (empty($pass1)) { array_push($errors, "Password is required"); }
		if (empty($pass2)) { array_push($errors, "Password is required"); }
		if(!preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/",$email1)) {
	        array_push($errors, "Please enter a valid e-mail address");
    		}
		if (strlen($pass1) < 8) { array_push($errors, "Password must be at 8 characters"); }
		if(!preg_match("#[0-9]+#",$pass1)) {
	        array_push($errors, "Password Must Contain At Least 1 Number");
    		}
    	if(!preg_match("#[a-z]+#",$pass1)) {
	        array_push($errors, "Password Must Contain At Least one lowercase");
    		}
    	if(!preg_match("#[A-Z]+#",$pass1)) {
	        array_push($errors, "Password Must Contain At Least one uppercase");
    		}	

    		if(!preg_match("#[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]+#",$pass1)) {
	        array_push($errors, "Password Must Contain At Least one symbol");
    		}

		if ($pass1 != $pass2) {
			array_push($errors, "The two passwords do not match");
		}

		// register user if there are no errors in the form
		if (count($errors) == 0) {

			$res = "SELECT * FROM `Myusers` WHERE email = '$email1' ";
			$res_u= $conn->query($res);
			if ($res_u->num_rows > 0) {
				array_push($errors, "Sorry... the email already taken");		
			}
			else{
				$password = $pass1;
				$salt = "p@55W0rdlolo";
				$hashed = sha1($password.$salt);
				$token = bin2hex(random_bytes(15));
				//$conn = new mysqli($host, $username, $password, "u16269200");
				$query = "INSERT INTO `Myusers` (firstname, lastname, email, password, API_key) 
						  VALUES('$name', '$surname', '$email1', '$hashed','$token')";
				if ($conn->query($query) === TRUE) {
	    				//echo "Table MyGuests created successfully";
	    				$_SESSION['username'] = $name;
				$_SESSION['userEmail'] = $email1;
				$_SESSION['success'] = "logged in";
				header('location: ../index.php');
				}
				else {
				    echo "Error creating table: " . $conn->error;
				}
			}
		}
	

	}
?>	