/**
 *
 */

import {Observable} from 'rxjs'

let output = document.getElementById('output');
let button = document.getElementById('button');

let source = Observable.fromEvent(button, "click")

function load(url: string){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
       let data = JSON.parse(xhr.responseText);
       data.movies.forEach(e => {
           let div = document.createElement('div');
           div.textContent = e.title;
           output.appendChild(div);
       });
    });


    xhr.open('GET', url);
    xhr.send();
}


source.subscribe(
    e => load('data.json'),
    e => console.log(`error:  ${e}`),
    () => console.log('complete')
);