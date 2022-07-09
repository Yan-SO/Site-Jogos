class Mensagem{

    constructor(frase, ondeColoca){
        this._span = this._criaSpan(frase);
        this._ondeColoca= ondeColoca;

        this._existe= false;
        
    }

    getSpan(){
        return this._span;
    }

    _criaSpan(texto){
        let text = document.createTextNode(texto);
        let span = document.createElement('span');
        span.appendChild(text);
        this._colocaCSS(span);
        return span;
    }
    _colocaCSS(span){
        span.style.color= 'red';
        span.style.backgroundColor='#01264a99';
        span.style.padding= "0.5rem 5rem";
        span.style.borderRadius= '0.8rem';
        span.style.fontSize= '110%';
    }

    
    colocaElemento(){
        if(this._existe){this.remover()}
        
        let lugar = document.querySelector(this._ondeColoca);
        lugar.appendChild(this._span);
        this._existe= true;

        setTimeout(() => {
            this.remover()
        }, 3000);
    }
    
    
    trocarFrase(text){
        this._span.innerHTML= text;
    }

    remover(){
        if(this._existe){
            this._span.remove();
            this._existe= false;
        }else{
            console.log('não existe elemento')
        }
    }
}