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
    email:'',
    password:'',
    confirmPassword:'',
}
console.log('object');

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
}
//update signup data
function changeSignupInfo(event){
    console.log(event.target.name, event.target.value);
}

//handle login button
loginBtnID.addEventListener('click', ()=>{
    console.log('loginBtnID');
})

//handle signup button
createAccountBtnID.addEventListener('click', ()=>{
    console.log('createAccountBtnID');
})