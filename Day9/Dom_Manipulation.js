// Activity 1: Selecting and Manipulating Elements

// Task 1 : Select an HTML element by its ID and change its text content
const elementById = document.getElementById("activity1");
console.log(elementById.querySelector("h1").innerText);
elementById.querySelector("h1").innerText =
  "Activity 1: Elements Selected and Manipulated";
const elementsByClass = document.getElementsByClassName("t2activity1");

// Task 2 : Select an HTML element by its class and change its background color
for (let element of elementsByClass) {
  element.style.backgroundColor = "lightblue";
}

//   Activity 2 : Creating and Appending ELements

// Task 3:  creating a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.innerText = "This is a new div element";
document.body.appendChild(newDiv);

// task 4:  create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.innerText = "This is a new li element";
const existingUl = document.querySelector("ul");
existingUl.appendChild(newLi);

//   Activity 3 : Removing ELements

// task 5:  select an html element using tag and remove it from the DOM
const elementByTag = document.getElementsByTagName("h2");
for (let element of elementByTag) {
  element.remove();
}

//task 6: remove the last child of a specific HTML element
const ulElement = document.querySelector("ul"); // IF querySelectorAll('ul') then get list of ul, here only one ul
ulElement.lastElementChild.remove();

// Activity 4 : Modifying Attributes and Classess

// Task 7:  select an html element and change one of its attribute
const elementToChange = document.querySelector(".t2activity1");
elementToChange.style.backgroundColor = "#aa00a0";

// Task 8:  add and remove a css clss to/from an HTML element
elementToChange.classList.add("whitetext");
elementToChange.classList.remove("t2activity1");

//   Activity 5 : Event Handling

// Task 9:  add a click event listener to a button that changes the text countent of a paragraph.
const button = document.querySelector("button");
const paragraph = document.querySelector("p");
button.addEventListener("click", () => {
  paragraph.innerText = "Clicked , its new content";
});

// Task 10:  add a mouseover event listener to an element that changes its border color.

const elementToChangeBorderColor = document.querySelector(".t1activity1");
elementToChangeBorderColor.addEventListener("mouseover", () => {
  elementToChangeBorderColor.style.border = "2px solid black";
});
