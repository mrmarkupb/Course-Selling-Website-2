function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vidnim@outlook.com",
        Password : "DFAMingdrti.@%Falok.com",
        To : 'mrmarkupb@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone No: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully!")
    );
}