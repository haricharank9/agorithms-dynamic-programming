export class ListNode<T> {
  value: T;
  next: ListNode<T> = null;
  constructor(nodeValue: T) {
    this.value = nodeValue;
  }
}
