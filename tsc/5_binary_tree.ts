type TreeNode<T> = {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
};

class BinaryTree<T> {
    private root: TreeNode<T> | null = null;

    // Вставка элемента
    insert(value: T): void {
        const newNode: TreeNode<T> = { value, left: null, right: null };
        
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                // Если значение уже существует, не вставляем дубликат
                return;
            }
        }
    }

    // Поиск элемента
    search(value: T): boolean {
        let current = this.root;
        
        while (current !== null) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return false;
    }

    // Удаление элемента
    remove(value: T): void {
        this.root = this.removeNode(this.root, value);
    }

    private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // Узел с одним потомком или без потомков
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Узел с двумя потомками
            const minRight = this.findMin(node.right);
            node.value = minRight.value;
            node.right = this.removeNode(node.right, minRight.value);
            return node;
        }
    }

    private findMin(node: TreeNode<T>): TreeNode<T> {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // Изменение элемента
    update(oldValue: T, newValue: T): void {
        if (this.search(oldValue)) {
            this.remove(oldValue);
            this.insert(newValue);
        }
    }

    // Определение высоты дерева
    getHeight(): number {
        return this.calculateHeight(this.root);
    }

    private calculateHeight(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }
        
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Обход дерева (для тестирования)
    inOrderTraversal(): T[] {
        const result: T[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    private inOrder(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
    }
}



const tree = new BinaryTree<number>();

// Вставка элементов
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.inOrderTraversal()); // [3, 5, 7, 10, 15]

// Поиск элементов
console.log(tree.search(7)); // true
console.log(tree.search(12)); // false

// Изменение элемента
tree.update(5, 6);
console.log(tree.inOrderTraversal()); // [3, 6, 7, 10, 15]

// Удаление элемента
tree.remove(10);
console.log(tree.inOrderTraversal()); // [3, 6, 7, 15]

// Высота дерева
console.log(tree.getHeight()); // 3