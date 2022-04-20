import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';


@Component( {
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }} </li>
        </ul>
    `

        // nomeamos uma variável course, e courses é um atributo da classe que estamos iterando continuamente
        //o atributo courses vai ser iterado continuamente, e em cada iteração a variável course vai adquirir o valor de um course por vez
        // {{ course }} é interpolação de string; vai exibir dinamicamente o valor da variável aqui
} )

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor (service: CoursesService) {
        this.courses = service.getCourses();
    }
}