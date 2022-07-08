class Login{
    constructor(nomeUsuario, senha){
        this._nomeUsuario= nomeUsuario
        this._senha = senha
        this._UsuarioCerto= false;
        this._senhaCerto= false;
        
    }
    getNomeUsuario(){
        return this._nomeUsuario
    }
     
    getSenha(){
        return this._senha
    }
    setNomeUsuario(nomeUsuario){
        this._nomeUsuario= nomeUsuario
    }
    
    setSenha(senha){
        this._senha = senha
    }
    
    verifica(nomeUsuario, senha){

        if(nomeUsuario==user.getNomeUsuario()){
            this._UsuarioCerto= true;
        }else{
            this._UsuarioCerto=false;
            console.log('Usuario errado');
        };
        if(senha==user.getSenha()){
            this._senhaCerto= true;
        }else{
            this._senhaCerto= false;
            console.log('senha errada');
        }
    }
    validaLogin(n, s){
        this.verifica(n, s);
        if(this._UsuarioCerto && this._senhaCerto){
            window.location.href = "./FF7r/FF7r.html";
        }else{
            alert('Senha ou usuario incorretas')
            this.nomeUsuarioSenhaErrados(this.procuraTexto("#nomeUsuarioSenhaErrados"),[this.procuraTexto("#nomeUsuario"),this.procuraTexto("#senha")] );
        }
    }

    procuraTexto(ondePegar){
        return document.querySelector(ondePegar);
    }
    
    nomeUsuarioSenhaErrados(fonteVermelho, bordaVermelha) {
        for (let i = 0; i < bordaVermelha.length; i++) {
            bordaVermelha[i].style.borderStyle= "solid";
            bordaVermelha[i].style.borderColor= "red";
           
        }
        
        if (fonteVermelho != null) {
            fonteVermelho.style.color= "#4a1212";
        }
    }
   
}