import { date } from "./common";
console.log('date ch1', date);


export function render(container: HTMLElement) {
    console.log('date ch1 render', date);

    const elm = document.createElement('div');
    elm.innerHTML = 'chunk1 date:' + date;
    container.appendChild(elm);
}
