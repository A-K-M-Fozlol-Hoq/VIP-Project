const loginLeftPart = document.getElementById('login-left-part')
const loginSignupForm = document.getElementById('login-signup-form')
const loginCreateAccount = document.getElementById('login-create-account')
const loginForm = document.getElementById('login-form')

const loginRightPart = document.getElementById('login-right-part')
const loginInstead = document.getElementById('login-instead')


loginCreateAccount.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
    loginSignupForm.style.display = 'block';
    loginRightPart.style.background = 'none';

    loginLeftPart.style.backgroundImage = "url('./images/loginBG\ \(1\).jpg')";
    loginLeftPart.style.backgroundSize = "700px 100%";

    loginForm.style.visibility = "hidden"

});

loginInstead.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event.target);

    loginSignupForm.style.display = 'none';
    loginRightPart.style.backgroundImage = "url('./images/loginBG\ \(2\).jpg')";
    loginRightPart.style.backgroundSize = "700px 100%";

    loginLeftPart.style.background = 'none';

    loginForm.style.visibility = "visible"


})