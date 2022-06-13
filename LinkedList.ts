// LinedList.ts - Single Linked List implementation

import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.0.0/mod.ts"

interface IList {
    add(item: string) : string;
    update(key: string, item: any) : void;
    remove(key: string) : boolean;
    find(key: string) : IListItem;
}

export interface IListItem {
    key: string;
    data: any;
    next: IListItem;
}

export class LinkedList implements IList {
    private _first : IListItem | null;
    private _last : IListItem | null;
    private _count : number = 0;

    constructor() {
        this._first = this._last = null;
    }

    public get first() : IListItem | null {
        return this._first;
    } 

    public get last() : IListItem | null {
        return this._last;
    }

    public get count() : number {
        return this._count;
    }

    public add(data: any): string {
        let newItem : IListItem | null =  {
            key: cryptoRandomString({ length: 10 }),
            data: data,
        } as IListItem;

        if(this._first==null) {
            this._first = newItem;
            this._last = newItem;
        } else {
            if(this._last != null) {
                this._last.next = newItem;
                this._last = newItem;
            } 
        }
        this._count++;

        return newItem.key;
    }

    public update(key: string, data: any): void {
        throw new Error("Method not implemented.");
    }

    public remove(key: string): boolean {
        throw new Error("Method not implemented.");
    }

    public find(key: string) : IListItem {
        throw new Error("Method not implemented.");
    }
}