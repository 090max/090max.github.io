window.onload = function() {
  form = document.forms.contactForm;
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    name1 = form.contactName;
    email = form.contactEmail;
    subject = form.contactSubject;
    body = form.contactMessage;
    message_body =
      "Name :" +
      name1.value +
      "\n" +
      "sender's Email :" +
      email.value +
      "\n" +
      "subject :" +
      subject.value +
      "\n" +
      "message :" +
      body.value;

    Email.send({
      SecureToken: "5af6ff15-6f21-43ef-9a16-e556895b0d8e",
      To: "kapilisrani820@gmail.com",
      From: "maxp3500@gmail.com",
      Subject: "Enquiry message kapil",
      Body: message_body
    }).then(message => {
      alert("mail sent successfully");
      name1.value = email.value = subject.value = body.value = "";
    });
  });
};
