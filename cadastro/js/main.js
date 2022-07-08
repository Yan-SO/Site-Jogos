let botaoLogin= document.querySelector('form');
botaoLogin.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('poha')
    Cadastro.cadastra()
});
