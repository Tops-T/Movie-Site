// $(window).load(function() {
//     $(".loader").fadeOut("slow");
// });
//$("#load_screen1").hide();


const APIKEY = "f2eb32d047cfe66ff08699de666cfe89";
const baseUrl = "https://image.tmdb.org/t/p/w500/";

var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log("Inside");
		
		for (let i = 0; i < 20; i++) {
		var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200" height="300" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.Ratings[0].Value+' --- Rating: '+data.Ratings[1].Value+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				// $("#load_screen").hide();
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				}
		}
		
		
	
};
req.open("GET", "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");












$("#load_screen1").hide();













////////////////////////////////////////////////////////////////////////////
document.getElementById("Trending").addEventListener("click", myFunction);

$("input").on("keydown", function(e) {
    if(e.keyCode == 13) {
    	
        //// alert($(this).val();
        //$("#load_screen1").show();
        	var id = document.getElementById('search').value;
        	//alert(id);
        	document.getElementById('search').value = '';
$("#search").empty();
$("#con4").empty();
 // $("#load_screen1").show();
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log(values.total_results);
		if(values.total_results != 0)
		{	
		for (let i = 0; i < values.results.length; i++) {	
			var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200" height="300" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.imdbRating+'/10'+'--- Rating: '+data.Metascore+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	
   				};

				//$("#load_screen1").hide();
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				
		}
		

		}
		else
		{
			console.log('Not Found');
			$('#con4').append($('<h1>').html("Not Found"));
		}
		$("#load_screen1").hide();
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/search/movie?query="+id+"&page=1&language=en-US&api_key="+APIKEY, false);
$("#load_screen1").show();
req.send();
console.log("Outside");
        
         
    }

    
});

$("#load_screen1").hide()

function myFunction() {
	$("#load_screen1").show();
	 $("#con4").empty();
  console.log("Open");
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log("Inside");
		
		for (let i = 0; i < 20; i++) {
		var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200px" height="300px" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.Ratings[0].Value+' --- Rating: '+data.Ratings[1].Value+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				}
		}
		
		
	
};
req.open("GET", "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
}

////////////////////////////////////////////////////////////////////////////////////////-----------------------------------------///////////////
function myFunction1() {
	// $("#con4").reset();
	//$("#load_screen1").show();
	var obj = document.getElementById('drop1');
	var jsObj = obj.options[obj.selectedIndex].text;
	 console.log(jsObj);
	 $("#con4").empty();
 
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log(values);
		
		for (let i = 0; i < 20; i++) {

			var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200px" height="300px" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.Ratings[0].Value+'--- Rating: '+data.Ratings[1].Value+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				
		}

		
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&primary_release_year="+jsObj+"&language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
}

////////////////////////////////////////////////////////////////////////////////////////-----------------------------------------///////////////
function myFunction2() {
	// $("#con4").reset();
	//$("#load_screen1").show();
	var obj = document.getElementById('drop').value;
	// var jsObj = obj.options[obj.selectedIndex].value;
	 console.log(obj);
	 $("#con4").empty();
 
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log(values);
		
		for (let i = 0; i < 20; i++) {

			var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200px" height="300px" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.Ratings[0].Value+'--- Rating: '+data.Ratings[1].Value+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				
		}

		
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&with_genres="+obj+"&language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
}




function myFunction3() {
	// $("#con4").reset();
	//$("#load_screen1").show();
	var obj = document.getElementById('drop').value;
	// var jsObj = obj.options[obj.selectedIndex].value;
	 console.log(obj);
	 $("#con4").empty();
 
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log(values);
		
		for (let i = 0; i < 20; i++) {

			var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200px" height="300px" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 					$('<p>').addClass("rated").html('IMDb: '+data.Ratings[0].Value+'--- Rating: '+data.Ratings[1].Value+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				
		}

		
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&with_genres="+obj+"&language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("myAnchor").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor1").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor1").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor2").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor2").text;
         console.log(id);
         lists(id);
});



document.getElementById("myAnchor3").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor3").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor4").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor4").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor5").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor5").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor6").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor6").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor7").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor7").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor8").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor8").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor9").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor9").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor10").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor10").text;
         console.log(id);
         lists(id);
});





document.getElementById("myAnchor11").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor11").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor12").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor12").text;
         console.log(id);
         lists(id);
});



document.getElementById("myAnchor13").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor13").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor14").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor14").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor15").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor15").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor16").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor16").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor17").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor17").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor18").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor18").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor19").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor19").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor20").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor20").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor21").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor21").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor22").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor22").text;
         console.log(id);
         lists(id);
});



document.getElementById("myAnchor23").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor23").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor24").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor24").text;
         console.log(id);
         lists(id);
});

document.getElementById("myAnchor25").addEventListener("click", function(e){
		e.preventDefault();
		var id = document.getElementById("myAnchor25").text;
         console.log(id);
         lists(id);
});


document.getElementById("myAnchor26").addEventListener("click", function(e){
		e.preventDefault();
	//	var id = document.getElementById("myAnchor26").text;
      //   console.log(id);
        // lists(id);
        myFunction();
});




function lists(work)
{

$("#load_screen").show('fast');
$("#con4").empty();
 
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		console.log(values);
		
		for (let i = 0; i < values.results.length; i++) {
			if(values.results[i].title.startsWith(work))
			{	
			var req1 = new XMLHttpRequest();
		req1.onreadystatechange=function()
		{
			 if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	$('#con4').append(
   				 		$('<div>').addClass('Movies_Poster')
   				 		.append($('<div>').addClass('Movies-img')
   				 		.append('<img alt="Not Working" width="200px" height="300px" src='+baseUrl+values.results[i].poster_path+' />')
			 			).append(
			 			$('<div>').addClass('Movies-info')
			 			.append(
			 				$('<div>').addClass('Movies-text')
			 				.append($('<h1>').html(values.results[i].title))
			 				.append($('<h2>').html(data.Released))
			 				.append($('<p>').text(data.Plot))
			 				.append(
			 				$('<p>').addClass("rated").html('IMDb: '+data.imdbRating+'/10'+'--- Rating: '+data.Metascore+'<br />Age Rating: '+data.Rated)
			 			)


			 			))

   				 		);
   				 	
   				 }
   				 	//$("#load_screen").show();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();	

			
				
		}

		}
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/search/movie?query="+work+"&page=1&language=en-US&api_key="+APIKEY, false);

req.send();
console.log("Outside");

$("#load_screen").hide();

}


