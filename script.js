

function validation(){
    const name = document.querySelector("#name").value;

    const pwd = document.querySelector("#pwd").value;

    const cpwd = document.querySelector("#cpwd").value;

    const email = document.querySelector("#email").value;

    const checkBox = document.querySelector("#check-box");

    const nameSpan = document.querySelector(".name-span");

    const pwdSpan = document.querySelector(".pwd-span");

    const cpwdSpan = document.querySelector(".cpwd-span");

    const emailSpan = document.querySelector(".email-span");

    const checkSpan = document.querySelector(".check-span");

    const hidepwd = document.querySelector(".hidepwd");

    var status = false;

    if(name.length<3){
        nameSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter Correct Name`
        nameSpan.style.color = "red"
        status = false
    }
    else{
        nameSpan.innerHTML = ""
        status = false
    }

    if(email.length==0){
        emailSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter Correct Email`
        emailSpan.style.color = "red"
        status = false
    }
    else{
        emailSpan.innerHTML = ""
        status = false
    }
    if(pwd.length<6){
        pwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter 6 charecters`
        pwdSpan.style.color = "red"
        status =  false
    }
    else{
        pwdSpan.innerHTML = ""
        status = false
    }

    if(cpwd.length==0){
        cpwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Confirm-password not matched`
        cpwdSpan.style.color = "red"
        status = false
    }
    else if(pwd==cpwd){
        cpwdSpan.innerHTML = ""
        status = false
    }
    else{
        cpwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Confirm-password not matched`
        cpwdSpan.style.color = "red"
        status = false
    }

    if(checkBox.checked){
        checkSpan.innerHTML = ""
        status = true
    }
    else{
        checkSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please click on the Check Box`
        checkSpan.style.color = "red"
    }
    return status
}
function hidepassword(){
    const pwd = document.querySelector("#pwd")
    const cpwd = document.querySelector("#cpwd")

    if(pwd.type=="password"){
        pwd.type = "text"
        cpwd.type = "text"
        
    }
    else if(pwd.type = "text"){
        pwd.type = "password"
        cpwd.type = "password"
    }
}

function pwdStrengthFun(){

    const pwd1 = document.querySelector("#pwd").value;

    const pwdStrength = document.querySelector(".pwdstrength");

    if(pwd1.length<5){
        pwdStrength.innerHTML = "Strength : Week"
        pwdStrength.style.color = "red"
    }
    else if (pwd1.length<8 && pwd1.length>=5){
        pwdStrength.innerHTML = "Strength : Good"
        pwdStrength.style.color = "yellow"
    }
    else{
        pwdStrength.innerHTML = "Strength : Strong"
        pwdStrength.style.color = "green"
    }
}