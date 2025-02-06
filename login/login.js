let login= ()=>{

    let loginemail= document.querySelector("#email").value;
    let loginpassword= document.querySelector("#password").value;
  
    let merror= document.querySelector("#merror")
 
    if (loginemail === "") {
        merror.innerHTML="Please enter your email."
        merror.style.color= "red";
      document.querySelector("#email").focus();
      return false;
    }
  
    else if (!(signemail.includes('@') && signemail.includes('.com'))) {
        merror.innerHTML="Please enter valid email."
        merror.style.color= "red";
        document.querySelector("#email").focus();
        return false;
    }

    if (loginpassword === "") {
        merror.innerHTML="Please enter your password."
        merror.style.color= "red";
      document.querySelector("#password").focus();
      return false;
    }

    else if (!(loginpassword.match(/[1234567890]/) &&
          loginpassword.match(/[!@#$%^&*()]/) &&
          loginpassword.match(/[a-z]/) &&
          loginpassword.match(/[A-Z]/))) 
            {
                merror.innerHTML= "Password should have at least one uppercase, one lowercase, one digit and one special character."
                merror.style.color= "red";
                document.querySelector("#password").focus();
                return false;
            }
    
  
    // Retrieve stored credentials
    let storedemail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
  
  
    if (loginemail === storedemail && loginpassword === storedPassword) {
     
      localStorage.setItem("isLoggedIn", "true");
     
      location.href = "/index.html"; 
      return false;
   
    } 
    
    else if (loginemail !== storedemail && loginpassword !== storedPassword) {
        merror.innerHTML= "Login credentials do not match!"
        merror.style.color= "red";
    }
  
    return false;
  };
  
