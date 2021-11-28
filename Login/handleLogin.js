const loginCreateAccountID = document.getElementById('login-create-account');
const loginInsteadID = document.getElementById('login-instead');
const loginEmailID = document.getElementById('login-email');
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

function changeLoginInfo(event){
    console.log(event.target.value);
}