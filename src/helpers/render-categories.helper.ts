import { Category } from "../types/types";

export const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, inputChangeCallback: (category: Category) => void) => {
    /*
        <li>
                <input
                    type="radio"
                    name="category"
                    value="work"
                    id="category-work"
                >
                <label for="category-work"></label>
            </li>
     */
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};