let user= new Login('123', '123');


let botaoLogin= document.querySelector('#botao-login');
botaoLogin.addEventListener('click',(event)=>{
    event.preventDefault()
    let n= document.querySelector("#nomeUsuario").value;
    let s= document.querySelector("#senha").value;

    user.validaLogin(n, s);
});

