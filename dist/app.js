// let age: number = 29; 
// let ageString: string = `${30}`;
// const add = (v1: number, v2: number) => v1 + v2;
// console.log(add(10, 5));
// const input1Element: HTMLInputElement = document.querySelector("#input1");
// const input2Element: HTMLInputElement = document.querySelector("#input2");
// const addButtonElement = document.querySelector("button");
// const add = (v1: number, v2: number) => v1 + v2;
// addButtonElement.addEventListener("click", () => {
//     const sum = add(parseInt(input1Element.value), Number(input2Element.value));
//     console.log(sum);
// });
// const logAge = (age: number | string) => {
//     console.log(`Hej mam ${age} lat`);
// };
// logAge(28);
// const buyButton = document.querySelector(".Buy");
// const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
//     return hasDiscount ? originalPrice*0.8 : originalPrice;
// }
// buyButton.addEventListener("click", () => {
//     const originalPrice: number = 50;
//     const hasDiscount: boolean = new URLSearchParams(window.location.search).get("discount") === "true";
//     console.log(calculatePrice(originalPrice, hasDiscount));
// });
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
