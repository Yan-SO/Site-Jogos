var ConnectionFactory=(function (){
    const store=['usuario'];
    const version=4;
    const dbName='siteYan';

    var connection=null;
    
    var close= null;
    
    return class ConnectionFactory{
    
        constructor(){
            throw new Error('Não pode estaciar ConnectionFactory')
        }
    
        static getConnection(){
    
    
            return new Promise((resolve, reject)=>{
                let openRequest = window.indexedDB.open(dbName, version);
    
                openRequest.onupgradeneeded= (e) =>{
                    this._createStore(e.target.result);
                };
                
                openRequest.onsuccess=(e)=>{
                    if(!connection){
                        connection= e.target.result;
                        close= connection.close.bind(connection);
                        connection.close = function(){
                            throw new Error('voce nao pode fechar diretamento a connection')
                        }
                    }
                    resolve(connection);
                };
                
                openRequest.onerror=(e)=>{
                    console.log(e.target.error)
                    reject(e.target.error.name)
                };
            });
        }
    
        static _createStore(connection){
            store.forEach(store =>{
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store);
                }
            
                connection.createObjectStore(store, {autoIncrement: true});
                
            })
    
        }
        static closeConnection(){
            if(connection){
                close();
                connection = null;
            }
        }
    }
    
})();
