let signup = () => {
   
    let signname = document.querySelector("#name").value;
    let signmobile = document.querySelector("#mob-num").value;
    let signemail = document.querySelector("#email").value;
    let signpassword = document.querySelector("#pass").value;
    let cpassword =document.querySelector("#cpass").value;

    let errorname = document.querySelector("#err-name");
    let errormobile = document.querySelector("#err-mob-num");
    let erroremail = document.querySelector("#err-email");
    let errorpassword = document.querySelector("#err-pass");
    let errorcpassword = document.querySelector("#err-cpass");

                       
    if (signname === "") {

        errorname.innerHTML="Please enter your name"
        errorname.style.color= "red";
        document.querySelector("#name").focus();
        return false;
    }


    
    if (signemail === "") {
        errorname.innerHTML="";
        erroremail.innerHTML="Please enter your email."
        erroremail.style.color= "red";
        document.querySelector("#email").focus();
        return false;
    }

    else if (!(signemail.includes('@') && signemail.includes('.com'))) {
        errorname.innerHTML="";
        erroremail.innerHTML="Please enter email only."
        erroremail.style.color= "red";
        document.querySelector("#email").focus();
        return false;
    }
    
    if (signmobile === "") {
        errorname.innerHTML="";
        erroremail.innerHTML="";
        errormobile.innerHTML="Please enter your mobile number."
        errormobile.style.color= "red";
        document.querySelector("#mob-num").focus();
        return false;
    } 
    
    else if (signmobile.length !== 10) {
        errorname.innerHTML="";
        erroremail.innerHTML="";
        errormobile.innerHTML="Please enter 10 digit mobile number."
        errormobile.style.color= "red";
        document.querySelector("#mob-num").focus();
        return false;
    }



    if (signpassword === "") {
        errorname.innerHTML="";
        erroremail.innerHTML="";
        errormobile.innerHTML="";
        errorpassword.innerHTML="Please enter your password."
        errorpassword.style.color= "red";
        document.querySelector("#pass").focus();
        return false;
    }

    else if (!(signpassword.match(/[1234567890]/) &&
        signpassword.match(/[!@#$%^&*()]/) &&
        signpassword.match(/[a-z]/) &&
        signpassword.match(/[A-Z]/)))
        {
            errorname.innerHTML="";
            erroremail.innerHTML="";
            errormobile.innerHTML="";
            errorpassword.innerHTML= "Password should have at least one uppercase, one lowercase, one digit and one special character."
            errorpassword.style.color="red"
            document.querySelector("#pass").focus();
            return false;
        } 
 

    if (cpassword === "" ) {
        errorname.innerHTML="";
        erroremail.innerHTML="";
        errormobile.innerHTML="";
        errorpassword.innerHTML="";
        errorcpassword.innerHTML="Please enter your password."
        errorcpassword.style.color= "red";
        document.querySelector("#cpass").focus();
        return false;
    }
    

    else if (!(cpassword.match(/[1234567890]/) &&
        cpassword.match(/[!@#$%^&*()]/) &&
        cpassword.match(/[a-z]/) &&
        cpassword.match(/[A-Z]/)))
        {
            errorname.innerHTML="";
            erroremail.innerHTML="";
            errormobile.innerHTML="";
            errorpassword.innerHTML="";
            errorcpassword.innerHTML= "Password should have at least one uppercase, one lowercase, one digit and one special character."
            document.querySelector("#cpass").focus();
            return false;
        } 


    if (cpassword !== signpassword){
        errorname.innerHTML="";
        erroremail.innerHTML="";
        errormobile.innerHTML="";
        errorpassword.innerHTML="";
        errorcpassword.innerHTML="Opps! password not matched."
        errorcpassword.style.color= "red";
        document.querySelector("#cpass").focus();
        return false;
    }

    else if (cpassword === signpassword){
        localStorage.setItem("name", signname);
        localStorage.setItem("email", signemail);
        localStorage.setItem("mob-num", signmobile);
        localStorage.setItem("pass", signpassword);

    
        location.href = "/login/login.html";
        return false;
    }
  
    return false; 
}




//  Login Local Storage 

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
  
    else if (!(loginemail.includes('@') && loginemail.includes('.com'))) {
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
    
  

    let storedemail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("pass");
  
  
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
  
