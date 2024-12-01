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
import { Task, Category } from "./types/types";
import { render } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";

const tasknameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
    {name: "Zrobić coś", done: false},
    {name: "Pójść spać", done: false, category: "gym"}, 
    {name: "Wstać", done: true}];

const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({name: tasknameInputElement.value, done: false, category: selectedCategory});
    render(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
