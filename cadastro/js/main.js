let botaoLogin= document.querySelector('form');
botaoLogin.addEventListener('submit',(event)=>{
    event.preventDefault()
    Cadastro.cadastra()
});
