<?php $thisPage='Discover'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Tobatsi Thamae" />
		<title>Rogue Movies :: Discover</title>
		<link rel="icon" type="images/image.png"  sizes="30x30"  href="images/Logo.png" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css"/>
		<link href="css/style1.css" type="text/css" rel="stylesheet" />
		
	</head>
	<body>
		<?php include('header.php') ?>
		
		<div class="filter">
			<h3>Genre: </h3>
			<div class="drop" >	
			  <select id="drop"  onchange="myFunction2()">
			    <option value="0">None</option>
			    <option value="28">Action</option>  
		      	<option value="12">Adventure</option>
		      <option value="16">Animation</option>
		      <option value="35">Comedy</option>
		      <option value="80">Crime</option>
		      <option value="99">Documentary</option>
		      <option value="18">Drama</option>
		      <option value="10751">Family</option>
		      <option value="14">Fantasy</option>
		      <option value="36">History</option>
		      <option value="27">Horror</option>
		      <option value="10402">Music</option>
		      <option value="9648">Mystery</option>
		      <option value="10749">Romance</option>
		      <option value="878">Science Fiction</option>
		      <option value="10770">TV Movie</option>
		      <option value="53">Thriller</option>
		      <option value="10752">War</option>
		      <option value="37">Western</option>
			  </select>
			</div>
			<div class="trend">
				<!-- <input class="button" type="button" name="Trending" value="Trending" id="Trending"> -->
				<!-- <input class="button" type="button" name="Year" value="Year" id="Year"> -->
				<h3>Year: </h3>
				<!-- <label for="pie">Year: </label> -->
				<div class="drop1" >
				
			  <select id="drop1"  onchange="myFunction1()">
			    <option value="0">None</option>
			    <option value="2019">2019</option>  
		      	<option value="2018">2018</option>
		      <option value="2017">2017</option>
		      <option value="2016">2016</option>
		      <option value="2015">2015</option>
		      <option value="2014">2014</option>
		      <option value="2013">2013</option>
		      <option value="2012">2012</option>
		      <option value="2011">2011</option>
		      <option value="2010">2010</option>
		      <option value="2009">2009</option>
		      <option value="2008">2008</option>
		      <option value="2007">2007</option>
		      <option value="2006">2006</option>
		      <option value="2005">2005</option>
		      <option value="2004">2004</option>
		      <option value="2003">2003</option>
		      <option value="2002">2002</option>
		      <option value="2000">2000</option>
		      <option value="1999">1999</option>
			  </select>
			</div>
				<input class="button" type="button" name="Trending" value="Trending" id="Trending">
			</div>
			<div class="letters" >
				<a id="myAnchor" href="#"><b>A</b></a>
				<a id="myAnchor1" href="#">B</a>
				<a id="myAnchor2" href="#">C</a>	
				<a id="myAnchor3" href="#">D</a>
				<a id="myAnchor4" href="#">E</a>
				<a id="myAnchor5" href="#">F</a>
				<a id="myAnchor6" href="#">G</a>
				<a id="myAnchor7" href="#">H</a>
				<a id="myAnchor8" href="#">I</a>
				<a id="myAnchor9" href="#">J</a>
				<a id="myAnchor10" href="#">K</a>
				<a id="myAnchor11" href="#">L</a>
				<a id="myAnchor12" href="#">N</a>
				<a id="myAnchor13" href="#">M</a>
				<a id="myAnchor14" href="#">O</a>
				<a id="myAnchor15" href="#">P</a>
				<a id="myAnchor16" href="#">Q</a>
				<a id="myAnchor17" href="#">R</a>
				<a id="myAnchor18" href="#">S</a>
				<a id="myAnchor19" href="#">T</a>
				<a id="myAnchor20" href="#">U</a>
				<a id="myAnchor21" href="#">V</a>
				<a id="myAnchor22" href="#">W</a>
				<a id="myAnchor23" href="#">X</a>
				<a id="myAnchor24" href="#">Y</a>
				<a id="myAnchor25" href="#">Z</a>
				<a id="myAnchor26" href="#">ALL</a>	
			</div>
			<div id="Search">
				 <input type="text" placeholder="Search.." id="search">
				 <!-- <img src="images/search-icon.png" width="30" height="30"> -->
				 <div class="search"></div>
			</div>

		</div>
		<div class="content">
							 <div id="load_screen1"><div id="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div></div>

			<div id="con4">
			</div>
			


		</div>
		<?php include_once('footer.php') ?>
		 <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script> 
		   	  <script  src="js/script4.js"></script>	
		
		   	
	</body>
</html>