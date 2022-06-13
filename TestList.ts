import { LinkedList, IListItem } from "./LinkedList.ts";

console.log("Creating List and adding items....");
let list : LinkedList = new LinkedList();

// Add items to the List
list.add({ id: 1, name:'ABB' });
list.add({ id: 2, name:'CSC' });
list.add({ id: 3, name:'IBM' });
list.add({ id: 4, name:'CTS' });

// Traverse the list
let current : IListItem | null = null;

current = list.first;

console.log("Printing SLL....")
console.log("KEY            PAYLOAD");
console.log("-----------------------------------------------")
while(current != undefined) {
    console.log(`${current.key} : ${ JSON.stringify(current.data)}`);
    current = current.next;
}