const startApp = ()=>{
    const loginForm = document.getElementById('login')
const singUpForm = document.getElementById('sign-up')
const newUser = document.getElementById('new-user')
console.log(loginForm)
const toggleLogin =()=>{
    loginForm.classList.toggle('hidden')
    loginForm.classList.toString('flex')
    toggleSignUp();
}
const toggleSignUp =()=>{
    singUpForm.classList.toggle('hidden')
    singUpForm.classList.toString('flex')
    toggleLogin();
}
loginForm.addEventListener('click', toggleLogin )
singUpForm.addEventListener('click', toggleSignUp)
}
document.addEventListener('DOMContentLoaded', startApp)