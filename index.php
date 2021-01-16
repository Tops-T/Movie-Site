<?php $thisPage='Home'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Tobatsi Thamae" />
		<title>Rogue Movies :: Home</title>
		<link rel="icon" type="images/image.png"  sizes="30x30"  href="Assignment3/images/Logo.png" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
		<link href="Assignment3/css/style1.css" type="text/css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css"/>
       <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
        <script  src="Assignment3/js/script.js"></script>
		
	</head>
	<body>
        <!-- <div class="loader"></div> -->
        <!-- <div id="load_screen"><div id="loading"><img src="Assignment2/images/Gear-1.1s-67px.svg" alt="nav-logo"/></div></div> -->
       <?php include('Assignment3/header.php') ?>
		
		<div class="content">
			<div class="filter1">
				
			</div>
            <div class="container">
    <div id="content-slider">
        <div id="slider">
            <div id="mask">
            <ul>
            <li id="first" class="firstanimation">
            <a href="#">
            <img src="Assignment2/images/alita.jpg"  width="110%" height="450" alt="alita" />
            </a>
            <div class="tooltip">
            <h1>Alita</h1>
            </div>
            </li>

            <li id="second" class="secondanimation">
            <a href="#">
            <img src="Assignment2/images/doctor.jpg"   width="110%" height="450"  alt="alita"/>
            </a>
            <div class="tooltip">
            <h1>Doctor Strange</h1>
            </div>
            </li>
            
            <li id="third" class="thirdanimation">
            <a href="#">
            <img src="Assignment2/images/mary.jpg"   width="110%" height="450" alt="alita"/>
            </a>
            <div class="tooltip">
            <h1>Mary Queen of Scots</h1>
            </div>
            </li>
                        
            <li id="fourth" class="fourthanimation">
            <a href="#">
            <img src="Assignment2/images/spider.jpg"  width="110%" height="450" alt="alita"/>
            </a>
            <div class="tooltip">
            <h1>Spider Man</h1>
            </div>
            </li>
                        
            <li id="fifth" class="fifthanimation">
            <a href="#">
            <img src="Assignment2/images/tomb.jpg"  width="110%" height="450" alt="alita"/>
            </a>
            <div class="tooltip">
            <h1>Tomb Raider</h1>
            </div>
            </li>
            </ul>
            </div>
            <div class="progress-bar"></div>
        </div>
    </div>
    
</div>




		<?php include 'Assignment3/footer.php' ?>
		</div>
		
		   	
	</body>
</html>