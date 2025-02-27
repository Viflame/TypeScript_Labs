"use strict";
function getCurrentDate() {
    console.log(Date.now());
}
window.addEventListener('load', () => {
    setTimeout(getCurrentDate, 10000);
});
function myWriter(message) {
    return function logMessage() {
        console.log(message);
    };
}
let logger = myWriter('Hello, World!');
logger();
//# sourceMappingURL=app.js.map