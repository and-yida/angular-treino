# Exercício

## Instruções
* Criar uma página com um heading que inclui o número de autores.
* Abaixo, deve constar uma lista de autores usando `ul` e `li`.
* Usar Angular CLI para criar um component e um service, e criar todo o código necessário para gerar uma interface como a da imagem.

![Image](/exercicio/exercicio.jpg)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

***

## Passo a passo

> Criar component no terminal: `ng g c authors`.
Alterar o html de /app.component. Colocar o elemento atrelado ao componente authors (declarado em "selector"). Isso renderizará o template associado a ele.
```
<h1>Angular</h1>
<app-authors></app-authors>
``` 
> Criar service no terminal: `ng g s`.
No arquivo do service, há a declaração da classe que atua como service. Aqui, declarar a função que retorna os autores.
```
  getAuthors() {
    return ['author1', 'author2', 'author3']
```
> Em /authors.component, alterar o template para incluir a lista de autores presente no service.
```
    template: `
        <h2> {{ authors.length }} {{ title }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }} </li>
        </ul>
        `
```

> Usar `*ngFor="let course of courses"` para criar um loop de variáveis. A cada iteração do atributo "authors", a variável "author" retorna um valor. Com "{{ author }}" indicamos que essa string retornada muda dinamicamente.
O "*" indica um directive para manipular o dom.

> Nessa classe, declarar a variável "authors". Para tanto, usar o constructor, que é um método de classe. Os objetos são retornados consumindo o service - a injeção de dependência cria uma instância da classe "AuthorsService", fornecendo os objetos para a classe "AuthorsComponent".
```
export class AuthorsComponent implements OnInit {
  title = "authors"
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors(); 
  }
```

