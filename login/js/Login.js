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
            this._campoEmVermelho(document.querySelector("#nomeUsuario"));
            let mensagem= new Mensagem('Usuario não esiste', '.form');
            mensagem.colocaElemento();
            console.log('Usuario não esiste');
        }else{
            this._campoCerto(document.querySelector("#nomeUsuario"));
            this._UsuarioCerto= true;
            if(usuario.getSenha()==this._senhaInf){
                this._campoCerto(document.querySelector("#senha"));
                this._senhaCerto= true;
            }else{
                this._campoEmVermelho(document.querySelector("#senha"));
                let mensagem= new Mensagem('senha errada', '.form');
                mensagem.colocaElemento();
                console.log('senha errada');
            }
        }
    }

    loga(usuario){
        this._valida(usuario);
        if(this._UsuarioCerto && this._senhaCerto){
            window.location.href="../Home/Home.html"
        }
    }

    _campoEmVermelho(bordaVermelha) {
        
            bordaVermelha.style.borderStyle= "solid";
            bordaVermelha.style.borderColor= "red";
    }

    _campoCerto(campo){
        campo.style.borderStyle= "none";
    }
}