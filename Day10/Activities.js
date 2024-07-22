// ACTIVITY - 1 Basic Event Handling

// Task 1 Add a click event listener to a button that changes the text content of a patagraph.

const clickEvent = () => {
  const changeText = document.querySelector(".changeText");
  const para = document.querySelector(".para");

  const handleChange = () => {
    para.textContent = "Para 2";
  };

  changeText.addEventListener("click", handleChange);
};

clickEvent();

// Task 2 : Add a doule-click event listener to an image that toggles its visibility.

const changeVisibilityBtn = document.querySelector(".changeVisibilityBtn");
const bulb = document.querySelector(".bulb");

const toggleVisibility = () => {
  if (bulb.classList.contains("visible")) {
    changeVisibilityBtn.textContent = "Show Image";
    bulb.classList.remove("visible");
    bulb.classList.add("hide");
    bulb.style.display = "none";
  } else {
    bulb.classList.remove("hide");
    bulb.classList.add("visible");
    bulb.style.display = "block";
    changeVisibilityBtn.textContent = "Hide Image";
  }
};

changeVisibilityBtn.addEventListener("click", toggleVisibility);

// ACTIVITY - 2 Mouse Events

// task 3 : Add a mouseover event listener to an element that changes its background color.

const mouseEvent = () => {
  const box = document.querySelector(".box");

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
  });

  //   task 4 : Add a mouse event listener to an element that resets its background color.

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
  });
};

mouseEvent();

// ACTIVITY - 3 Keyboard Events

// task 5 : Add a keydown event listener to an input field that logs the key pressed to the console.

const keyEvent = () => {
  const inputBox = document.querySelector(".inputBox");

  inputBox.addEventListener("keydown", (e) => {
    // console.log(e.key);
  });

  //  Task 6:  Add a keyUp event listener to an input field that displays the current value in a paragraph.

  inputBox.addEventListener("keyup", (e) => {
    // console.log(inputBox.value);
  });
};

keyEvent();

// ACTIVITY - 4  Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and log the form data to the console.

const formEvent = () => {
  const formSubmit = document.querySelector(".formSubmit");

  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector(".name");
    console.log(name.value);
    name.value = "";
  });

  //   Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

  const fruits = document.querySelector("#Fruits");
  const checkFruit = document.querySelector(".checkFruit");
  const fruit = document.querySelector(".fruit");

  checkFruit.addEventListener("click", () => {
    if (fruits.value == "Select Fruit") return;
    fruit.textContent = fruits.value;
    // console.log(fruits.value);
  });
};

formEvent();

// ACTIVITY - 5 Event Delegation

// Task 9: Add a  click event listener to a list that logs the tect content of the clicked list item using event delegation.

const eventDelegation = () => {
  const mobiles = document.querySelector(".mobiles");

  mobiles.addEventListener("click", (e) => {
    if (event.target && event.target.nodeName === "LI") {
      // Log the text content of the clicked list item
      console.log(event.target.textContent);
    }
  });

  //   task 10: Add an event listener to a parent element that listens for events from dyanamically added child elements.

  const parent = document.querySelector(".parent");

  const child = document.createElement("div");
  child.textContent = "Child";
  parent.append(child);

  parent.addEventListener("click", () => {
    console.log("Bubbling...");
  });

  child.addEventListener("click", () => {
    console.log("Child...");
  });
};

eventDelegation();
