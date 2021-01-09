import { ListNode } from "./list-node";

export class LinkedList<T> {
  private head: ListNode<T>;
  constructor(values: T[]) {
    this.head = this.fromArray(values);
    this.printList();
  }

  fromArray(values: T[]) {
    const [first, ...rest] = values;
    const head: ListNode<T> = new ListNode(first);
    let prev = head;
    rest.forEach(v => {
      const node = new ListNode<T>(v);
      prev.next = node;
      prev = node;
    });
    return head;
  }
  private printList() {
    console.log(JSON.stringify(this.head, null, 3));
  }

  clear() {
    this.head = null;
  }

  get size(): number {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  get last(): ListNode<T> {
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  get first(): ListNode<T> {
    return this.head;
  }

  has(value: T): boolean {
    let currentNode: ListNode<T> = this.head;
    let nodeFound = false;
    while (!nodeFound && currentNode?.next) {
      if (currentNode.value === value) {
        nodeFound = true;
      }
      currentNode = currentNode.next;
    }
    return nodeFound;
  }
  removeNode(value: T): boolean {
    let nodeRemoved = false;
    if (this.head.value === value) {
      this.head = this.head.next;
      nodeRemoved = true;
    } else {
      let prevNode: ListNode<T> = this.head;
      let currentNode: ListNode<T> = this.head;
      while (!nodeRemoved && currentNode?.next) {
        if (currentNode.value === value) {
          prevNode.next = currentNode.next;
          nodeRemoved = true;
          this.printList();
          return nodeRemoved;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    this.printList();
    return nodeRemoved;
  }
}
