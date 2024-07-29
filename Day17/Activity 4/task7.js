// Activity 4 : Binary Tree

// Task 7 Implement a TreeNode class to represent a node in a binary tree with properties value, left and right



class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function printTree(root,ans= []){
    if(root == null) return ans;
    ans.push(root.value);
    printTree(root.left,ans);
    printTree(root.right,ans);
    return ans;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


const result = printTree(root);
console.log(`Tree is : ${result}`);
