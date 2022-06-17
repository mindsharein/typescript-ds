import { assert, assertThrows } from  "https://deno.land/std/testing/asserts.ts";
import LinkedList from '../LinkedList.ts'


Deno.test('TestCount',()=> {
    let list = new LinkedList();
    
    list.add("Red");
    list.add("Blue");
    list.add("Green");

    assert(list.count == 3);
});

Deno.test('TestFindByIndex',()=> {
    let list = new LinkedList();

    list.add("Red");
    list.add("Blue");
    list.add("Green");

    assert(list.findByIndex(2)?.data=="Blue");
    assertThrows(() => list.findByIndex(4),"index cannot be greater than count!");
});

Deno.test('TestRemove',()=> {
    let list = new LinkedList();

    list.add("Red");
    list.add("Blue");
    list.add("Green");

    list.removeByIndex(2);
    assert(list.count == 2);
});

