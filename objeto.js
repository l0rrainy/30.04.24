class Objeto {
    constructor (parametro1, parametro2) {
        this.parametro1 = parametro1; //variavel de interface
        this.parametro2 = parametro2; //variavel de interface
        //ações
    }

    metodo1 () {
        //ações
    }

    metodo2 () {
        //ações
    }
}




class Calebe {
    constructor (site) {
        this.site = site;
    }

    exibirSite () {
        window.open(this.site);
    }
}