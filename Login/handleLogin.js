const loginCreateAccountID = document.getElementById('login-create-account');
const loginInsteadID = document.getElementById('login-instead');
const loginEmailID = document.getElementById('login-email');
const loginBtnID = document.getElementById('login-btn');
const createAccountBtnID = document.getElementById('create-account-btn');
let isLogging = true;
const loginObject ={
    email:'',
    password:''
}
const signupObject ={
    firstName:'',
    lastName:' ',
    role:'user',
    email:'',
    password:'',
    confirmPassword:'',
}

loginCreateAccountID.addEventListener('click', () => {
    isLogging = !isLogging;
    console.log('loginCreateAccountID',isLogging);
})

loginInsteadID.addEventListener('click', () => {
    isLogging = !isLogging;
    console.log('loginInsteadID',isLogging);
})

//update login data
function changeLoginInfo(event){
    console.log(event.target.name, event.target.value);
    if(event.target.name === 'email'){
        loginObject.email = event.target.value;
    }
    else if(event.target.name === 'password'){
        loginObject.password = event.target.value;
    }
}
//update signup data
function changeSignupInfo(event){
    console.log(event.target.name, event.target.value);
    if(event.target.name === 'first-name'){
        signupObject.firstName = event.target.value;
    }
    else if(event.target.name === 'last-name'){
        signupObject.lastName = event.target.value;
    }
    else if(event.target.name === 'email'){
        signupObject.email = event.target.value;
    }
    else if(event.target.name === 'password'){
        signupObject.password = event.target.value;
    }
    else if(event.target.name === 'confirm-password'){
        signupObject.confirmPassword = event.target.value;
    }
}

//handle login button
loginBtnID.addEventListener('click', (e)=>{
    e.preventDefault();
    if(! loginObject.email){
        alert('Please enter email first!')
    }
    else if(! loginObject.password){
        alert('Please enter password first!')
    }
    if(loginObject.email && loginObject.password){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginObject.email)){
            if(loginObject.password.trim().length>5){
                let isLoginSuccess = false;
                isLoginSuccess = true;
                if(isLoginSuccess){
                    alert('logged in successfully');
                    localStorage.setItem('loggedInEmail', loginObject.email);
                    // localStorage.getItem('loggedInEmail')
                    location.href = '/';
                }
                else{
                    alert('login failed');
                }
            }
            else{
                alert('email or password is not matching 2');
            }
        }
        else{
            alert('email or password is not matching 1');
        }
    }
})

//handle signup button
createAccountBtnID.addEventListener('click', (e)=>{
    e.preventDefault();
    if(! signupObject.firstName){
        alert('Please first name first!')
    }
    else if(! signupObject.lastName){
        alert('Please last name first!')
    }
    else if(! signupObject.email){
        alert('Please enter email first!')
    }
    else if(! signupObject.password){
        alert('Please enter password first!')
    }
    else if(! signupObject.confirmPassword){
        alert('Please enter confirm password first!')
    }
    if(signupObject.firstName && signupObject.lastName && signupObject.email 
        && signupObject.password && signupObject.confirmPassword){
            if(signupObject.password === signupObject.confirmPassword){
                //storing all errors at error array
                const errors =[];
                if(!(/^([a-zA-Z ]){2,30}$/.test(signupObject.firstName))){
                    errors.push('please enter a valid firstName');
                }
                if(!(/^([a-zA-Z ]){2,30}$/.test(signupObject.lastName))){
                    errors.push('please enter a valid lastName');
                }
                if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupObject.email))){
                    errors.push('please enter a valid email address');
                }
                if(signupObject.password.trim().length < 6){
                    errors.push('password must be at least 6 characters');
                }

                //giving final output
                if(errors.length >=1){
                    alert(errors[0])
                }
                else{
                    let isSignupSuccess = false;
                    isSignupSuccess = true;
                    if(isSignupSuccess){
                        alert('signed up successfully');
                        localStorage.setItem('loggedInEmail', signupObject.email);
                        location.href = '/';
                        // fetch("http://localhost/circleUp/APIs/user/adduser.php", {
                        //     method: "POST",
                        //     headers: { "content-type": "application/json" },
                        //     body: JSON.stringify({
                        //     firstName: signupObject.firstName,
                        //     lastName: signupObject.lastName,
                        //     email: signupObject.email,
                        //     role: signupObject.email.role,
                        //     __password: signupObject.password,
                        //     }),
                        // })
                        //     .then((response) => response.json())
                        //     .then((data) => {
                        //     console.log(data, 'from backend');
                        //     })
                        //     .catch((error) => {
                        //     console.error(error, 'error, fozlollll');
                        //     });
                    }
                    else{
                        alert('signed failed');
                    }
                }
            }
            else{
                alert('Password does not match with confirm password!')
            }
    }
})