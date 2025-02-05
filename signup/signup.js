let signup = () => {
   
    let signname = document.querySelector("#name").value;
    let signmobile = document.querySelector("#mob-num").value;
    let signemail = document.querySelector("#email").value;
    let signpassword = document.querySelector("#pass").value;

    let errorname = document.querySelector("#err-name");
    let errormobile = document.querySelector("#err-mob-num");
    let erroremail = document.querySelector("#err-email");
    let errorpassword = document.querySelector("#err-pass");

    errorname.setAttribute("placeholder", "");
    errormobile.setAttribute("placeholder", "");
    erroremail.setAttribute("placeholder", "");
    errorpassword.setAttribute("placeholder", "");

   
    if (signname === "") {
        errorname.setAttribute("placeholder", "Please Enter your Name");
        errorname.style.borderColor = "red";
        document.querySelector("#name").focus();
        return false;
    }

    
    if (isNaN(signmobile)) {
        errormobile.setAttribute("placeholder", "Please Enter a valid Mobile Number");
        errormobile.style.borderColor = "red";
        document.querySelector("#mob-num").focus();
        return false;
    } else if (signmobile === "") {
        errormobile.setAttribute("placeholder", "Please Enter your Mobile");
        errormobile.style.borderColor = "red";
        document.querySelector("#mob-num").focus();
        return false;
    } else if (signmobile.length !== 10) {
        errormobile.setAttribute("placeholder", "Please Enter 10 digit Mobile Number");
        errormobile.style.borderColor = "red";
        document.querySelector("#mob-num").focus();
        return false;
    }

  
    if (!(signemail.includes('@') && signemail.includes('.com'))) {
        erroremail.setAttribute("placeholder", "Please Enter a Valid Email");
        erroremail.style.borderColor = "red";
        document.querySelector("#email").focus();
        return false;
    } else if (signemail === "") {
        erroremail.setAttribute("placeholder", "Please Enter your Email");
        erroremail.style.borderColor = "red";
        document.querySelector("#email").focus();
        return false;
    }

   
    if (!(signpassword.match(/[1234567890]/) &&
        signpassword.match(/[!@#$%^&*()]/) &&
        signpassword.match(/[a-z]/) &&
        signpassword.match(/[A-Z]/))) {
        document.querySelector("#pass").focus();
        // alert();
        Swal.fire({
          icon: "error",
          title: "Oops...",
        
          text: "Password should have at least one uppercase letter, one lowercase letter, one digit and one special character.",
         
        });
        return false;
    } else if (signpassword === "") {
        errorpassword.setAttribute("placeholder", "Please Enter your Password");
        errorpassword.style.borderColor = "red";
        document.querySelector("#pass").focus();
        return false;
    }

  
    localStorage.setItem("name", signname);
    localStorage.setItem("mob-num", signmobile);
    localStorage.setItem("email", signemail);
    localStorage.setItem("pass", signpassword);

   
    location.href = "signup.html";
    return false; 
}