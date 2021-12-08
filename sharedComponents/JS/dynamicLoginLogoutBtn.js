const loginLogoutLtn = document.getElementById('login-logout-btn');
// console.log((localStorage.getItem('loggedInEmail'))
if(!(localStorage.getItem('loggedInEmail'))){
    loginLogoutLtn.innerHTML ='Login'
}
else{
    loginLogoutLtn.innerHTML ='Logout'
}
// console.log(localStorage.getItem('loggedInEmail'))
loginLogoutLtn.addEventListener('click',()=>{
    if(loginLogoutLtn.innerHTML === 'Login'){
        location.href = '/login';
    }
    else if(loginLogoutLtn.innerHTML === 'Logout'){
        localStorage.setItem('loggedInEmail', '');
        location.href = '/login';
    }
    console.log('object',loginLogoutLtn.innerHTML);
})