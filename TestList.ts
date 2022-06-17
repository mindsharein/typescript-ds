import LinkedList, { IListItem } from "./LinkedList.ts";

console.log("Creating List and adding items....");
let list : LinkedList = new LinkedList();

const print = () => {
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
}

// Test Empty Types
console.log("First node is : " + list.first);

// Add items to the List
list.add({ id: 1, name:'ABB' });
list.add({ id: 2, name:'CSC' });
list.add({ id: 3, name:'IBM' });
list.add({ id: 4, name:'CTS' });

print();

console.log("Test Find....");
let allKeys : string[] = list.getKeys();

console.log("All Keys: " + allKeys);

// Find by Key
let fkey = allKeys[2];
let [item,i] = list.find(fkey);
console.log("Finding by key " + fkey);
console.log("Found : "  + JSON.stringify((item ? item.data : "")));

// Delete
console.log("Deleting 3rd tiem);")
list.removeByIndex(3);

print();



