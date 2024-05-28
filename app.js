const mysBtn = document.querySelector("#sBtn");
errorMsg.style.display = "none";


mysBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const name = document.getElementById("inputName").value;
    const surName = document.getElementById("inputSoyad").value;
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;
    const check = document.getElementById("gridCheck").checked;
    
});

function user() {
    const user = {
        name,
        surName,
        email,
        password,
        check
    };
}

if(password != "sea"){
    errorMsg.style.display = "block";        
}
else{
    user();
}

const usersFromLocalStorge = JSON.parse(localStorage.getItem("users") || "[]");

const isEmailExist = usersFromLocalStorge.some((user) => user.email)===email;
if(isEmailExist) {
    alert("Email already exists");
    return;
}
console.log(user);
    localStorage.setItem("user",JSON.stringify(user));