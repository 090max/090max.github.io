function sendEmail(sender) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "maxp3500@gmail.com",
    Password: "Saraswati123",
    To: "090max@gmail.com",
    From: "maxp3500@gmail.com",
    Subject: "",
    Body: "<email body>"
  }).then(message => alert("mail sent successfully"));
}
