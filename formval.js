let form = document.getElementById('planteriumform');
form.addEventListener("submit",function(event) {
    event.preventDefault();

    var username = document.getElementById('usrname').value
    console.log(username)

    var email = document.getElementById('usremail').value
    console.log(email)

    var password = document.getElementById('usrpassword').value
     console.log(password)
})
    