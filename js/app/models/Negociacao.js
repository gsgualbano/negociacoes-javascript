class Negociacao {
    constructor(data, quantidade, valor) {
        // _ é um convenção para programadores
        // dizendo que essas propriedades só podem
        // ser acessadas pelos proprios métodos da classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //congela as propriedades para que não seja possivel mudar
        // o valor de uma instancia depois de atribuido
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}