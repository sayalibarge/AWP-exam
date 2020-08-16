
//calling function

function validation() {
    let user = document.getElementByID("username").value;
    let pass = document.getElementByID("password").value;

    //validation checking

    if (user == "" || user == null) {
        alert("username can not be empty ");
        document.getElementById("username").focus();
        return false;

    }



    if (pass == "" || pass == null) {
        alert("password can not be empty ");
        document.getElementById("password").focus();
        return false;

    }


    //returning value
    document.getElementById("userinfo").innerHTML = `username:${user} password:${pass}`;

    document.getElementById("username").value = "";

    document.getElementById("password").value = "";

}

