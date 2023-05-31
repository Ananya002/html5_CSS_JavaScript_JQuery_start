function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    var c=document.getElementById("email_id").value;
    let emailformat =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@gmail+(?:\.[a-zA-Z0-9-]+)$/;
    var p=document.getElementById("phone").value;
    let phoneformat =/^\d{10}$/;

    if(phoneformat.test(p)  && emailformat.test(c)){
        emailjs.send("service_mg135d3", "template_t854sys", params).then(function (res) {
            alert("Success! " + res.status);
        })
    }
    else {
        if(!emailformat.test(c)){
            alert("Enter a valid mailid!!")
        }
        if(!phoneformat.test(p)){
            alert("Enter a valid phone number!!")
        }
    }
}