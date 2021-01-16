// $(window).load(function() {
//     $(".loader").fadeOut("slow");
// });




// window.addEventListener("load", function(){
// 	var load_screen = document.getElementById("load_screen");
// 	document.body.removeChild(load_screen);
// });

const APIKEY = "f2eb32d047cfe66ff08699de666cfe89";
const baseUrl = "https://image.tmdb.org/t/p/w500/"
console.log("Open");
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

			 //$("#load_screen").show();
			
   				  if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	//for (let j = 0; j < 20; j++){
   				 	$('#con2').append(
   				 		$('<div>').addClass('view view-eighth')
   				 		.append('<img alt="Not Working" width="250" height="350" src='+baseUrl+values.results[i].poster_path+' />')
   				 		.append($('<div>').addClass('mask')
			 			.append($('<h2>').html(values.results[i].title)

			 				).append('<p>IMDb Ratings:'+data.Ratings[0].Value+'<br /> Genre:'+data.Genre+'<br />Box Office: '+data.BoxOffice+'</p>')
			 				

   				 			)

   				 		);
   				 	
   				 	// } 
   				 	
   				 }
   				 	$("#load_screen").hide();
   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			req1.send();		
		}


		
		
	}
};
req.open("GET", "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key="+APIKEY,false);
$("#load_screen").show();
req.send();

console.log("Outside");


