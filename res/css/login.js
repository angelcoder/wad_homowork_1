function inputcheck() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    else{
        window.open("index.html", "_self");
    }
}