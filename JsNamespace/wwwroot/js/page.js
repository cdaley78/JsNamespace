import { JsNamespace as ns } from "/js/app.js";
//
const page = (function () {

    const exec = (area, controller, action) => {
        const areaName = (area === "") ? undefined : area.toLowerCase();
        const controllerName = (controller === "") ? "home" : controller.toLowerCase();
        const actionName = (action === undefined) ? "init" : action.toLowerCase();

        const controllerMap = areaName !== undefined ? ns[areaName][controllerName] : ns[controllerName];
        const actionMap = controllerMap[actionName];

        if (actionMap !== undefined && typeof actionMap == "function") {
            actionMap();
        }
    }

    const init = () => {
        const renderBody = document.querySelector("#renderBody");
        const area = renderBody.dataset.area;
        const controller = renderBody.dataset.controller;
        const action = renderBody.dataset.action;

        exec("", "common");
        exec(area !== "" ? area : "", "home");
        exec(area, controller, action);
    }

    return { init: init }
})();

page.init();