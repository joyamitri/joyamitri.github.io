let inUser = document.querySelector('.username')
let labelUser = document.querySelector('.labeluser')
let inPass = document.querySelector('.password')
let labelPass = document.querySelector('.labelpass')
let showPass =  document.querySelector('.show-pass')
let btnLogin =  document.querySelector('.btn-login')


inUser.addEventListener('keypress',()=>{
    labelUser.classList.add('on')
})


