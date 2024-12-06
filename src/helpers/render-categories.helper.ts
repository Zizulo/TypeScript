import { Category } from "../types/types";

const handleCategoryChange = (category: Category) => {
    if (category === Category.GENERAL) {console.log("Zmiana na general");}
    else if (category === Category.GYM) {alert("Lecisz na siłke");}
    else if (category === Category.HOBBY) {document.body.style.background = "red";}
    else if (category === Category.WORK) {
        console.log("Zmiana na work");
        alert("Praca popłaca");
        document.body.style.background = "green";
    }
    else if (category === Category.SOCIAL) {document.body.style.background = "yellow";}
    else {
        const never: never = category;
        console.log(never);
    }
}

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
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};

