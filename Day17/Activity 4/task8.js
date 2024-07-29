// Task 8 : Implement a BinaryTree class with methods for inserting values and performing in order traversal to display nodes

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertValue(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

function inOrderTraversal(root, ans = []) {
  if (root == null) return ans;
  inOrderTraversal(root.left, ans);
  ans.push(root.value);
  inOrderTraversal(root.right, ans);
  return ans;
}

let tree = new BinaryTree();
tree.insertValue(1);
tree.insertValue(20);
tree.insertValue(3);
tree.insertValue(4);
tree.insertValue(5);
console.log(inOrderTraversal(tree.root));
