/**
 *
 */

import {Observable} from 'rxjs'

let output = document.getElementById('output');
let button = document.getElementById('button');

let source = Observable.fromEvent(button, "click")

function load(url: string){
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });

        xhr.open('GET', url);
        xhr.send();
    })
}

function renderMovies(data){
    data.movies.forEach(e => {
        let div = document.createElement('div');
        div.textContent = e.title;
        output.appendChild(div);
    });
}



source.flatMap(e => load('data.json')).subscribe(
    renderMovies,
    e => console.log(`error:  ${e}`),
    () => console.log('complete')
);
