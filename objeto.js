
class Calebe {
    constructor (site) {
        this.site = site;
    }

    exibirSite () {
        window.open(this.site);
    }
}

var novoCalebe = new Calebe ("https://poki.com/br");
novoCalebe.exibirSite();