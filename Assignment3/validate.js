function validateForm() {

	var name = document.getElementById('fname');
  	var surname = document.getElementById('lname');
  	var email = document.getElementById('email1');
  	
  	var pass12 = document.getElementById('pass1');
  	var pass22 = document.getElementById('pass2');
  	var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  	if (name.value =="") {
  		document.getElementById('error').style.display = "block";
  		document.getElementById('error').innerHTML ="<p>Please enter your name</p>";
  		name.focus();
  		return false;
  	}
  	//return false;
  	if (surname.value =="") {
  		document.getElementById('error').style.display = "block";
  		document.getElementById('error').innerHTML ="<p>Please enter your surname</p>";
  		surname.focus();
  		return false;
  	}
  	if (email.value == "")                                   
    { 
    	document.getElementById('error').style.display = "block";
  		document.getElementById('error').innerHTML ="<p>Please enter e-mail address.</p>";
        
        email.focus(); 
        return false; 
    } 
  	 if (reg.test(email.value) == false)                 
    { 
       document.getElementById('error').style.display = "block";
  		document.getElementById('error').innerHTML ="<p>Please enter a valid e-mail address.</p>"; 
        email.focus(); 
        return false; 
    } 
   
  

    if (pass12.value == "")                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Please enter a password</p>";  
        pass12.focus(); 
        return false; 
    } 
    if (pass12.value.length < 8)                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Your password must be at 8 characters</p>";  
        pass12.focus(); 
        return false; 
    } 


     if (pass12.value.search(/[a-z]/) < 0)                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Your password must contain least one lowercase letter</p>";  
        pass12.focus(); 
        return false; 
    }


     if (pass12.value.search(/[A-Z]/) < 0)                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Your password must contain least one uppercase letter</p>";  
        pass12.focus(); 
        return false; 
    }


     if (pass12.value.search(/[0-9]/) < 0)                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Your password must contain least one digit</p>";  
        pass12.focus(); 
        return false; 
    }

     if (pass12.value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0)                        
    { 

       document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Your password must contain least one symbol</p>";  
        pass12.focus(); 
        return false; 
    }
     if (pass22.value == "")                        
    { 

        document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>Please enter a password</p>";
        pass22.focus(); 
        return false; 
    } 
     if (pass22.value != pass12.value)                        
    { 

        document.getElementById('error').style.display = "block";
      document.getElementById('error').innerHTML ="<p>The passwords don't match</p>";
        pass22.focus(); 
        return false; 
    } 


}