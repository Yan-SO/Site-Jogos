class UsuarioDao{
    constructor(connection){
        this._connection = connection;
        this._store= 'usuario';

    }

    adiciona(usuario){

        return new Promise((resulve, reject)=>{
            let request = this._connection
                .transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .add(usuario);
            
            request.onsuccess= (e)=> {
                resulve();
            };
            
            request.onerror= (e)=>{
                console.log(e.target.error);
                reject('Não add o usuario')
            };
        });
    };

    verificaUser( nome){

        return new Promise((resulve, reject)=>{
            let cursor= this._connection
                .transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsuccess= e =>{
                let atual= e.target.result;

                if(atual){
                    let dado = atual.value
                    if(dado._nomeUsuario==nome){
                        let usuario= new Usuario(dado._nomeUsuario, dado._email, dado._senha);
                        resulve(usuario)
                    }
                    atual.continue();
                }else{
                    resulve()
                }
                
            }

            cursor.onerror= e =>{
                console.log(e.target.error);
                reject('Não foi possível listar os usuarios');
            }
        })
    }

    
    
}