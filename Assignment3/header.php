<?php require('config.php') ?>
<?php 


if($thisPage=='Home'){
	echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';    
 
	echo'<a href="index.php" class="nav-logo active"><img src="Assignment2/images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="index.php" class="on" >Home<span></span></a>';
	echo'<a href="Assignment3/discover.php">Discover<span></span></a>';
	echo'<a href="Assignment3/featured.php" class="">Featured<span></span></a>';
    echo'<a href="Assignment3/rated.php" class="">Top Rated<span></span></a>';
   echo'<a href="Assignment3/latest.php" class="">Latest<span></span></a>';
  echo'<a href="Assignment3/calendar.php" class="">Calendar<span></span></a>'; 
  echo'</div>';
 if($_SESSION['success'] == "logged in")
 {
 	echo'<div class="icon-bar1">';
 	echo'<a href="#" id="sign-up"><i class="fas fa-user fa-lg"></i>'.$_SESSION['username'].'</a>';
 	echo'<a href="#" id="log-in"><i class="fas fa-sign-out-alt fa-lg"></i> Log-out</a>';  
 	echo'</div>';
 }
 else{

 
echo'<div class="icon-bar1">';
echo'<a href="Assignment3/signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';
}
	
} 
if($thisPage=='Rated'){
	echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';
	echo'<a href="../index.php" class="nav-logo active"><img src="images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="../index.php">Home<span></span></a>';
	echo'<a href="discover.php">Discover<span></span></a>';
	echo'<a href="featured.php" >Featured<span></span></a>';
    echo'<a href="rated.php" class="on">Top Rated<span></span></a>';
   echo'<a href="latest.php">Latest<span></span></a>';
  echo'<a href="calendar.php">Calendar<span></span></a>'; 
  echo'</div>';
echo'<div class="icon-bar1">';
echo'<a href="signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';

}
if($thisPage=='Featured'){
	echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';
	echo'<a href="../index.php" class="nav-logo active"><img src="images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="../index.php">Home<span></span></a>';
	echo'<a href="discover.php">Discover<span></span></a>';
	echo'<a href="featured.php" class="on">Featured<span></span></a>';
    echo'<a href="rated.php">Top Rated<span></span></a>';
   echo'<a href="latest.php">Latest<span></span></a>';
  echo'<a href="calendar.php">Calendar<span></span></a>'; 
  echo'</div>';
echo'<div class="icon-bar1">';
echo'<a href="signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';

}
if($thisPage=='Discover'){
	echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';
	echo'<a href="../index.php" class="nav-logo active"><img src="images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="../index.php">Home<span></span></a>';
	echo'<a href="discover.php" class="on">Discover<span></span></a>';
	echo'<a href="featured.php" >Featured<span></span></a>';
    echo'<a href="rated.php">Top Rated<span></span></a>';
   echo'<a href="latest.php">Latest<span></span></a>';
  echo'<a href="calendar.php">Calendar<span></span></a>'; 
  echo'</div>';
echo'<div class="icon-bar1">';
echo'<a href="signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';

}
if($thisPage=='Latest'){
	echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';
	echo'<a href="../index.php" class="nav-logo active"><img src="images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="../index.php">Home<span></span></a>';
	echo'<a href="discover.php">Discover<span></span></a>';
	echo'<a href="featured.php" >Featured<span></span></a>';
    echo'<a href="rated.php">Top Rated<span></span></a>';
   echo'<a href="latest.php" class="on">Latest<span></span></a>';
  echo'<a href="calendar.php">Calendar<span></span></a>'; 
  echo'</div>';
echo'<div class="icon-bar1">';
echo'<a href="signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';

}
if($thisPage=='Calendar'){
	// echo'<div id="load_screen"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>';
echo'<div class="topnav fixed-top top-nav">';
	echo'<a href="../index.php" class="nav-logo active"><img src="images/Logo.png" id="nav-logo" alt="nav-logo" />Rogue Movies</a>';
	echo'<a href="../index.php">Home<span></span></a>';
	echo'<a href="discover.php">Discover<span></span></a>';
	echo'<a href="featured.php" >Featured<span></span></a>';
    echo'<a href="rated.php">Top Rated<span></span></a>';
   echo'<a href="latest.php">Latest<span></span></a>';
  echo'<a href="calendar.php" class="on">Calendar<span></span></a>';
  echo'</div>';
echo'<div class="icon-bar1">';
echo'<a href="signup.php" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
echo'</div>';
 
}


// echo'</div>';
// echo'<div class="icon-bar1">';
// echo'<a href="#" id="sign-up"><i class="fas fa-user-plus fa-lg"></i> Sign-up</a>'; 
// echo'<a href="#" id="log-in"><i class="fas fa-user-cog fa-lg"></i> Log-in</a>';             
// echo'</div>';





 ?>