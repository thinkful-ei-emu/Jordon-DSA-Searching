//Linear Search
const indexOf = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}

const binarySearch = (array, value, strt, endV) => {
    let start = strt === undefined ? 0 : strt;
    let end = endV === undefined ? array.length : endV;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

//SEARCHING AND TRAVERSAL IN A TREE

//Depth-first search
//The algorithm will simply traverse the nodes adding them to a values array
/**
dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }
     */

//Breadth-first search

/**
 bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueu(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }
*/

let list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
binarySearch(list, 8);
binarySearch(list, 16);