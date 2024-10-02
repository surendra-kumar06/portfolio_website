
// toggle menu
const mobile_nav = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");

mobile_nav.addEventListener("click",()=>{
    navbar.classList.toggle('show-navbar')
});


// Form validetion

let errMessage = document.querySelector(".err-message");
const validateForm = ()=>{
    let name = document.forms['contactForm']["name"].value;
    let email = document.forms['contactForm']["email"].value;
    let message = document.forms['contactForm']["message"].value;
    const nameRegex = /^[A-Za-z\s'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    ;
    if(!nameRegex.test(name.trim())){
        errMessage.innerText = 'Please enter the name.'
        return false
    }
    if(!emailRegex.test(email.trim())){
        errMessage.innerText = 'Please enter a valid email.'
        return false
    }
    if(!message.trim()){
        errMessage.innerText = 'Please enter a Message.'
        return false
    }
    errMessage.innerText = '';
     return true
}