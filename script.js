function SendMail() {
    let parms = {
        fname1: document.getElementById("fname1").value,
        lname1: document.getElementById("lname1").value,
        email: document.getElementById("email").value,
        sub1: document.getElementById("sub1").value,
        mess1: document.getElementById("mess1").value,
    };

    emailjs.send("service_upfajk9", "template_jnw98mu", parms)
        .then(function(response) {
            alert("Email successfully sent!");
            // Reset the form fields
            document.getElementById("contact1").reset();
        }, function(error) {
            alert("Failed to send email. Error: " + error.text);
        });
}
