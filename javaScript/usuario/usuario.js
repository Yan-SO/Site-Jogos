class Usuario{
    constructor(nomeUsuario, email, senha){
        this._nomeUsuario= nomeUsuario;
        this._email= email;
        this._senha= senha;
    };
    getNomeUsuario(){
        return this._nomeUsuario;
    };
    getEmail(){
        return this._email;
    };
    getSenha(){
        return this._senha;
    };
        
}