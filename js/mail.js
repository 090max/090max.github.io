window.onload = function() {
  form = document.forms.contactForm;
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    name = form.contactName.value;
    email = form.contactEmail.value;
    subject = form.contactSubject.value;
    body = form.contactMessage.value;
    message_body =
      "Name :" +
      name +
      "\n" +
      "sender's Email :" +
      email +
      "\n" +
      "subject :" +
      subject +
      "\n" +
      "message :" +
      body;

    Email.send({
      SecureToken: "5af6ff15-6f21-43ef-9a16-e556895b0d8e",
      To: "090max@gmail.com",
      From: "maxp3500@gmail.com",
      Subject: "Enquiry message kapil",
      Body: message_body
    }).then(message => alert("mail sent successfully"));
  });
};
