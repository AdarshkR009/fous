function registration()
{
    var anum=document.myform.anum.value;
	var pword= document.myform.pword.value;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if(anum=='')
		{
			alert('Please enter your account number');
		}
		else if(!letters.test(anum))
		{
			alert('Name field required only numbers');
		}
        else if(pword=='')
		{
			alert('Please enter Password');
		}
        else
		{				                            
               alert('Thank You for Login & Welcome to focusbank');
		}
	
    
    
}

