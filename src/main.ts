import "./style.css";

const helloWorld = "<div>Hello World!</div>";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = helloWorld;
