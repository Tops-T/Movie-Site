
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

          
         
                 if(req1.readyState==4 && req1.status==200){
                  var data =JSON.parse(req1.responseText);
                  console.log(data);
                  $('#con').append(
                     $('<div>').addClass('cellphone-container').append(
                        $('<div>').addClass('feature').append(
                           $('<div>').addClass('feature-img')
                           .append('<img alt='+values.results[i].title+' width="220" height="278" src='+baseUrl+values.results[i].poster_path+' />')
                           .append($('<img  alt='+values.results[i].title+'  width="220" height="278" src='+baseUrl+values.results[i].backdrop_path+' />').addClass('img-top'))
                        ).append(
                           $('<div>').addClass('text-feature-cont').append(
                              $('<h3>').text(values.results[i].title)
                           ).append(
                           $('<ul>').addClass('feature-gen').append(
                              $('<li>').text('Age Ratings: '+data.Rated)
                           ).append($('<li>').text('IMDb Ratings: '+data.Ratings[0].Value))  


                           )



                        )
                     )
               

                     );
                  
                
                  
                }
                  $("#load_screen").hide(1000);
               };

            
            

         req1.open("GET", 'https://www.omdbapi.com/?t='+encodeURI(values.results[i].title)+'&apikey=ba1f4581', false);
         req1.send();
   
		}

		
		 
	}
};
req.open("GET", "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key="+APIKEY, false);
$("#load_screen").show();
req.send();
console.log("Outside");
