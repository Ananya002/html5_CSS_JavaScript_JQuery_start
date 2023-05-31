function myfun(){
    var a  = document.getElementById("usn-el").value;
    let usnformat=/[2SD]?[2sd]?[0-9][0-9][cs]?[CS]?[is]?[IS]?[ec]?[EC]?[ee]?[EE]?[cv]?[CV]?[me]?[ME]?[ch]?[CH]?[0-9][0-9][0-9]/
    var b=a.length  
    if(b===10 && usnformat.test(a)){ 
        //return true 
        alert(" valid usn!!")

    }
    else{
        alert("Enter a valid usn!!") 
    }

    var c=document.getElementById("email-el").value;
    let emailformat =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@gmail+(?:\.[a-zA-Z0-9-]+)$/;

    if(emailformat.test(c)){
        //return true
        alert("valid mailid!!")

    }
    else{
        alert("Enter a valid mailid!!")
    }

    var p=document.getElementById("phone-el").value;
    let phoneformat =/^\d{10}$/;
    if( phoneformat.test(p)){
        alert("valid phone number")
    }
    else{
        alert("Enter a valid phone number!!")
    }


    var password = document.getElementById("pass-el").value;
        //var minNumberofChars = 6;
        var maxNumberofChars = 6;
        var regularExpression  = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        
        if(password.length >= maxNumberofChars) {
            if(regularExpression.test(password)) {
                alert(" valid password");    
            } else {
                alert("Password must contain atleast one-digit,one-letter and one-special character");
            }
        } else{
            alert("Password should contain minimum of 6 characters");
        }        
 

 }