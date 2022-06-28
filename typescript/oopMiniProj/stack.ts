{
    // readonly 불변성
    type StackNode = {
        readonly value: string,
        readonly next?: StackNode;
    }

    //규격
    interface stack {
        readonly size: number;

        push(value: string): void;

        pop(): string;
    }

    // @ts-ignore
    class StackImpl implements stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {}

        get size() {
            return this._size;
        }

        push(value: string): void {
            if (this.size === this.capacity) {
                throw new Error("stack is full");
            }

            const node: StackNode = {value: value, next: this.head};
            this.head = node;
            this._size++;
        }

        pop(): string {
            if (this.head == null) {
                throw new Error("Stack is empty");
            }

            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl(5);

    stack.push("hello world")
    stack.push("hello world1")
    stack.push("hello world2")
    stack.push("hello world3")

    while (!(stack.size <= 0)) {
        console.log(stack.pop())
    }

}
