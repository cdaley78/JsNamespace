﻿import { JsNamespace as root } from "/js/ns.js";

root.home.index = () => {
    document.body.innerHTML += '<p>in home>index!</p>';
}

root.home.contact = () => {
    document.body.innerHTML += ('<p>in home>contact!</p>');
}

root.home.about = () => {
    document.body.innerHTML += ('<p>in about from views.js!</p>');
}
