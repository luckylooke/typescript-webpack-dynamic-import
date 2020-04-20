import { date } from "./common";
console.log('date ch2', date);


export function render(container: HTMLElement) {
    console.log('date ch2 render', date);

    const elm = document.createElement('div');
    elm.innerHTML = 'chunk2 date:' + date;
    container.appendChild(elm);
}
