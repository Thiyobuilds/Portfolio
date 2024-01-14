const email = document.getElementById("email");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const messageOne = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];
const btn = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  let ebody = `
    <b>Email Address: </b> ${email.value}
    <br>
    <br>
    <b>Name: </b> ${name.value}
    <br>
    <br>
    <b>Phone.No: </b> ${phone.value}
    <br>
    <br>
    <b>Subject: </b> ${subject.value}
    <br>
    <br>
    <b>Message: </b> ${messageOne.value}
    <br>
    <br>
    <br>
    `;

  Email.send({
    SecureToken: "462bda2f-3363-4187-8c43-56f942d485c4",
    To: "thiyo80203@gmail.com",
    From: "stinnovationdev@gmail.com",
    Subject: "Your Portfolio Form Activity 🙌",
    Body: ebody,
  }).then((message) => alert("Message Sended Successfully ✔🎉"));
});

btn.addEventListener("click", () => {
  setTimeout(emptyInput, 1000);
  function emptyInput() {
    inputs.forEach((input) => (input.value = ""));
    textarea.forEach((textarea) => (textarea.value = ""));
  }
});
