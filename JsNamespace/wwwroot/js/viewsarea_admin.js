﻿import { JsNamespace as ns } from "/js/ns.js";
//
const admin = ns.admin;

admin.home.index = () => {
    document.body.innerHTML += ('<p>in admin>home>index custom custom</p>'); 
}