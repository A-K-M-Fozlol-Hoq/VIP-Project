const loginLeftPart = document.getElementById('login-left-part')
// const loginRightPart = document.getElementById('login-right-part')
const loginSignupForm = document.getElementById('login-signup-form')
const loginCreateAccount = document.getElementById('login-create-account')
loginCreateAccount.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
    loginLeftPart.style.visibility = 'hidden'
    // loginLeftPart.style.display = 'none'
    loginSignupForm.style.display = 'block'
    // loginSignupForm.style.marginRight = '300px'
})