let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){
    
    let mobile = document.getElementById("mobile").value;

    let password = document.getElementById("pass").value;

   let count = 0;

     if(mobile.length !== 10)
     {
        alert("Mobile number should be of 10 digits")
     }
     else if(mobile.length == 0)
     {
        alert("Enter Mobile Number")
     }

     else{

     
    for(let i=0;i<getUsersdata.length;i++)
    {
        if(mobile == getUsersdata[i].mobile)
        {
            if(password == getUsersdata[i].password)
            {
               alert("Sign in Successful");
               window.location.href = "index.html"
            }
            else{
                alert("Invalid Password");
            }
        }
        else{
            count++;
        }

    }
     }
    if(count == getUsersdata.length)
    {
        alert("User is Not registered, Sign up to Continue")
        window.location.href = "signup.html"
    }

}