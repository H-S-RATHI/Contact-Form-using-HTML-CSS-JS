function send(){
    var name = document.getElementById("Name").value
    var email = document.getElementById("Email").value
    var contact = document.getElementById("Contact").value
    var message = document.getElementById("Message").value

    if (!name || !email || !message) {
        // You can display an error message here
        swal("Error", "Please fill out all required fields.", "error");
        return;
    }else{
        var body = "Name: " + name + "<br/>"
        + "Email: "+ email + "<br/>" 
        + "Contact Number: " +  contact + "<br/>"
        + "Message: " + message
   
       console.log("function call")
       Email.send({
           SecureToken : '18e8db56-1709-4e7c-85e3-7e1fa0545fb7',
           To : 'golusingh.70881@gmail.com',
           From : "golusingh.70881@gmail.com",
           Subject : "Contact Form",
           Body : body
       }).then(
         message => {
           if(message=='OK'){
               swal("Successfull", "Your Response Recived Successfully", "success");
           }else{
               swal("Unsuccessfull", "Fill the Form Correctly", "error");
           }
         }
       );
    }


}