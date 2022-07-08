class Login{
    constructor(){
        this._nomeUInf=document.querySelector("#nomeUsuario").value;
        this._senhaInf = document.querySelector("#senha").value;
        this._UsuarioCerto= false;
        this._senhaCerto= false;
        
        this._verifica()
    }
    _verifica(){
        ConnectionFactory
            .getConnection()
            .then(connection => 
                new UsuarioDao(connection)
                .verificaUser(this._nomeUInf))
                .then(usuario=>this.loga(usuario));
    }

    _valida(usuario){
        if(usuario == null){
            console.log('Usuario não esiste')
        }else{
            this._UsuarioCerto= true;
            if(usuario.getSenha()==this._senhaInf){
                this._senhaCerto= true;
            }else{
                console.log('senha errada')
            }
        }
    }

    loga(usuario){
        this._valida(usuario);
        if(this._UsuarioCerto && this._senhaCerto){
            window.location.href="../Home/Home.html"
        }
    }

    // campoErrado(fonteVermelho, bordaVermelha) {
        
    //         bordaVermelha.style.borderStyle= "solid";
    //         bordaVermelha.style.borderColor= "red";
           
        
        
    //     if (fonteVermelho != null) {
    //         fonteVermelho.style.color= "#4a1212";
    //     }
    // }
}