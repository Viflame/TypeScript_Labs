function getCurrentDate(): void {
    console.log(Date.now());
}

window.addEventListener('load', () => {
    setTimeout(getCurrentDate, 10000);
});

function myWriter(message: string): () => void {
    return function logMessage(): void {
        console.log(message);
    };
}

let logger = myWriter('Hello, World!');
logger();