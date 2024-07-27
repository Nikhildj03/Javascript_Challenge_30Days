// Activity 4: Module Pattern

// Task 6 : Use Closures to create simple modules for managing a collection of items. Implement methods to add,remove and list items.

const itemModule = (() => {
  // Private varaible to store the collections of items
  const items = [];

  //public methods

  return {
    // method to add an item in collection
    addItem: (item) => {
      items.push(item);
    },

    // methods to remove an item from the collection

    removeItem: (item) => {
      const index = items.indexOf(item);
      if (index != -1) {
        items.splice(index, 1);
      }
    },

    // method to list all the items in the collection
    listItems: () => {
      return [...items];
    },
  };
})();

// Ex usage

itemModule.addItem("Mobile");
itemModule.addItem("Laptop");
itemModule.addItem("PC");

console.log(itemModule.listItems());

itemModule.removeItem("PC");

console.log(itemModule.listItems());
