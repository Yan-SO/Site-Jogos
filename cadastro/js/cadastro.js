class Cadastro{
    constructor(){
        throw new Error('não pode estanciar a class Cadastro, ela é static');
    }

    

    static async cadastra(){
        if(this.verificaSenha()){
            let nomeUsuario= document.querySelector("#nomeUsuario").value;
            let email= document.querySelector("#Email").value;
            let senha= document.querySelector("#senha").value;
            const novoUser= new Usuario(nomeUsuario, email, senha);
            await  ConnectionFactory
                .getConnection()
                .then(connection => 
                    new UsuarioDao(connection)
                    .adiciona(novoUser));
                    swal("Cadastrado com Sucesso!", "", "success")
                        .then((value) => {
                            window.location.href = "../FF7r/FF7r.html";
                        });
        }else{
            let mensagem= new Mensagem('As senha não diferentes', '.form');
            mensagem.colocaElemento();
            console.log('As senha não diferentes');
        }
    }

    static verificaSenha(){
        let senha= document.querySelector("#senha").value;
        let senhaConfirma= document.querySelector("#senha-confirma").value;
        if(senha==senhaConfirma && senha!=""){
            return true;
        }else{
            return false;
        }
    }
    

}