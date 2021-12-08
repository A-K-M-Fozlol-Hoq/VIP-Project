// localStorage.setItem('loggedInEmail', signupObject.email);
                    // localStorage.getItem('loggedInEmail')
                    // location.href = '/login';
if(!(localStorage.getItem('loggedInEmail'))){
    location.href = '/login';
}