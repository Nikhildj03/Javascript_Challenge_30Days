// Task 7 : Install a third party modules e.g Axios using npm. Import and use this module to make a network request in a script.

import axios from "axios";
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("User data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });
