

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

    var status = false

    if(name.length<3){
        nameSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter Correct Name`
        nameSpan.style.color = "red"
        status = false
    }
    else{
        nameSpan.innerHTML = `<i class="fa-solid fa-circle-check"></i> You Enter Correct Name`
        nameSpan.style.color = "green"
        status = false
    }

    if(email.length==0){
        emailSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter Correct Email`
        emailSpan.style.color = "red"
        status = false
    }
    else{
        emailSpan.innerHTML = `<i class="fa-solid fa-circle-check"></i> You Enter Correct Email`
        emailSpan.style.color = "green"
        status = false
    }
    if(pwd.length<6){
        pwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Please Enter 6 charecters`
        pwdSpan.style.color = "red"
        status =  false
    }
    else{
        pwdSpan.innerHTML = `<i class="fa-solid fa-circle-check"></i> You Enter Correct Password`
        pwdSpan.style.color = "green"
        status = false
    }

    if(cpwd.length==0){
        cpwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Confirm-password not matched`
        cpwdSpan.style.color = "red"
        status = false
    }
    else if(pwd==cpwd){
        cpwdSpan.innerHTML = `<i class="fa-solid fa-circle-check"></i> You Enter Correct Confirm-Password`
        cpwdSpan.style.color = "green"
        status = false
    }
    else{
        cpwdSpan.innerHTML = `<i class="fa-solid fa-circle-info"></i> Confirm-password not matched`
        cpwdSpan.style.color = "red"
        status = false
    }

    if(checkBox.checked){
        checkSpan.innerHTML = `<i class="fa-solid fa-circle-check"></i> You Clicked Checkbox`
        checkSpan.style.color = "green"
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