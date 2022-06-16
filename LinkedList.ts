// LinedList.ts - Single Linked List implementation

import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.0.0/mod.ts"

export interface IListItem {
    key: string;
    data: any;
    next: IListItem;
}

export class LinkedList {
    private _first : IListItem | null = null;
    private _last : IListItem | null = null;
    private _count : number = 0;

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
        let newItem : IListItem =  {
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

    public update(key: string, data: any): any {
        let item : IListItem | null = this.find(key);

        if(item!=null) {
            item.data = data;
            return data;
        }

        return null;
    }

    public remove(key: string): boolean {
        throw new Error("Method not implemented.");
    }

    public find(key: string) : IListItem | null {
        let current = this._first;

        while(current!=null) {
            if(key == current.key) {
                return current;
            } 
            current = current.next;
        }

        return current;
    }

    public getKeys() : string[] {
        let keys : string[] = [];

        let current : IListItem | null = this.first;

        if(current!=null) {
            while(current!=null) {
                keys.push(current.key);
                current = current.next;
            }
        }

        return keys;
    }

    /*public findByIndex(index: number) : IListItem | null {
        let count = 0;

        let current = this._first;

        if(this._first) {
            for(count=0; count <= index; count++) {
                if(count == index) {
                    return current;
                }
                current = current.next;
            }
        }

        return this._first;
    }*/
}