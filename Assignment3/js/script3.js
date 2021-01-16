

const APIKEY = "f2eb32d047cfe66ff08699de666cfe89";
const baseUrl = "https://image.tmdb.org/t/p/w500/";
const myUrl = "https://api.themoviedb.org/3/movie/";
const yb = "https://www.youtube.com/embed/";
console.log("Open");
var req = new XMLHttpRequest();
req.onreadystatechange=function()
{
	// console.log(values);
	if(req.readyState==4 && req.status==200)
	{
		var values =JSON.parse(req.responseText);
		
		//$("#load_screen").show();
		

		for (let i = 0; i < 10; i++) {

			var req1 = new XMLHttpRequest();
			req1.onreadystatechange=function()
			{

			
   				  if(req1.readyState==4 && req1.status==200){
   				  	var data =JSON.parse(req1.responseText);
   				  	console.log(data);
   				  	//for (let j = 0; j < 10; j++){
   				 	var req2 = new XMLHttpRequest();
					req2.onreadystatechange=function()
					{

   						  if(req2.readyState==4 && req2.status==200){
   				 		 	var work =JSON.parse(req2.responseText);
   				 		 	// console.log(data);
   				 		 	//for (let x = 0; x < 10; x++){
	   				 		$('#con3').append(
	   				 		$('<div>').addClass('movie_card').attr('id', 'bright')
	   				 		.append($('<div>').addClass('info_section')
				 			.append($('<div>').addClass('movie_header')
				 			.append($('<img  alt='+values.results[i].title+'   src='+baseUrl+values.results[i].poster_path+' />').addClass('locandina'))

			 				).append(
			 				$('<div>').addClass('movie_desc')
			 				.append($('<h2>').text(values.results[i].title))
			 				.append($('<h4>').text(values.results[i].release_date))
			 				.append($('<span>').addClass('minutes').text(data.Runtime))
			 				.append($('<p>').addClass('type').text("Country: "+data.Country))

			 				)
			 				

   				 			).append($('<div>').addClass('blur_back bright_back')
   				 			.append('<iframe src='+yb+work.results[0].key+' height="350" width="500" ></iframe>'))


   				 		);
	   				 		 $("#load_screen").hide();
   				 	 		//} 
   				 	
   				 		}
   				 		//$("#load_screen").hide();

   				};
					req2.open("GET", myUrl+values.results[i].id+'/videos?language=en-US&api_key='+APIKEY, false);
					$("#load_screen").show();
					req2.send();		
   				 	
   				//} 
   				 	
   				 }

   				};

				
				

			req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
			$("#load_screen").show();
			req1.send();		


				//$("#load_screen").hide();
				

				
		}

		
		//$("#load_screen").hide();
	}
};
req.open("GET", "https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
