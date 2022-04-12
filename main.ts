//Criando uma classe e inicializando os atributos (variáveis) do objeto.
//Usar constructor simplifica o código pois evita ter de declarar atributo por atributo

class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number){
        this.x=x;
        this.y=y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point();
point.draw();


/*Setando valores para os atributos
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x=x;
        this.y=y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
*/
