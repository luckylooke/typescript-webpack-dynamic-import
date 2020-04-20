// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import * as ES6Promise from "es6-promise";
ES6Promise.polyfill();

async function renderWidget() {
    // Locate the widget container
    const container = document.getElementById("widget");

    // If we found the container, import the widget and render it into the container
    if (container !== null) {
        const widget = await import(/* webpackChunkName: "widget" */ "./widget");
        widget.render(container);
    }
}

setTimeout(() => {
    renderWidget();
}, 2000);

const chunk1btn = document.getElementById('chunk1');
const chunk2btn = document.getElementById('chunk2');

if(chunk1btn) {
   chunk1btn.onclick = () => {
    loadChunk1();
}
}
if(chunk2btn) {
   chunk2btn.onclick = () => {
    loadChunk2();
}
}


async function loadChunk1() {
    // Locate the widget container
    const container = document.getElementById("content");

    // If we found the container, import the chunk and render it into the container
    if (container !== null) {
        const widget = await import(/* webpackChunkName: "chunk1" */ "./chunk1component");
        widget.render(container);
    }
}

async function loadChunk2() {
    // Locate the widget container
    const container = document.getElementById("content");

    // If we found the container, import the chunk and render it into the container
    if (container !== null) {
        const widget = await import(/* webpackChunkName: "chunk2" */ "./chunk2component");
        widget.render(container);
    }
}