import greenBeanCassImage from './assets/greenbeancass.png';
import macnCheeseImage from './assets/macncheese.png';

export function menu() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Jaybees Tech Talk Restaurant And Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for greenBeanCass
    const greenBeanCass = document.createElement("img");
    greenBeanCass.classList.add("image");
    greenBeanCass.src = greenBeanCassImage;
    greenBeanCass.alt = "Image of Green Bean Casserole";
    contentDiv.appendChild(greenBeanCass);

    // DOM for p tag for greenBeanCass
    const para1GreenBeanCass = document.createElement("p");
    para1GreenBeanCass.classList.add("menu-copy");
    para1GreenBeanCass.textContent = "An amazing Green Bean Casserole that's a fan favorite.  This is a side dish you can't go without!";
    contentDiv.appendChild(para1GreenBeanCass);

    // DOM for macnCheese
    const macnCheese = document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src = macnCheeseImage;
    macnCheese.alt = "Image of Mac and Cheese Dish";
    contentDiv.appendChild(macnCheese);

    // DOM for p tag for macnCheese
    const para1macnCheese = document.createElement("p");
    para1macnCheese.classList.add("menu-copy");
    para1macnCheese.textContent = "This simple Mac and Chesse dish will satisify any taste bud out there!";
    contentDiv.appendChild(para1macnCheese);
}