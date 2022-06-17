// LinedList.ts - Single Linked List implementation

import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.0.0/mod.ts"

export interface IListItem {
    key: string;
    data: any;
    next: IListItem | null;
}

export default class LinkedList {
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
        let [item,index] = this.find(key);

        if(item!=null) {
            item.data = data;
            return data;
        }

        return null;
    }

    public remove(key: string): boolean {
        if(this._first = null) 
            return false;
        else if(this._count==1) {
            this._first = this._last = null;
            this._count = 0;
            return true;
        } else {
            let [item, index] = this.find(key);

            if(item!=null) {
                if(item==this.first) {
                    this._first = item.next;
                } else if(item==this._last) {
                    this._last = this.findByIndex(this._count-1);

                    if(this._last!=null)
                        this._last.next = null;
                } else {
                    let prev = this.findByIndex(index-1);

                    if(prev!=null) {
                        prev.next = item.next;
                        item.next = null;
                        item = null;
                    }
                }

                return true;
            } else {
                return false;
            }
        }
    }

    public removeByIndex(index : number) : boolean {
        let item = this.findByIndex(index);

        if(item!=null) {
            return this.remove(item.key);
        }

        return false;
    }

    public find(key: string) : [IListItem | null,number] {
        let current = this._first;
        let index : number = 1;

        while(current!=null) {
            if(key == current.key) {
                return [current,index];
            } 
            current = current.next;
            index++;
        }

        return [null,0];
    }

    public findByIndex(index: number) : IListItem | null {
        let current : IListItem | null  = this._first;

        let i = 1;

        if(i > this._count) {
            throw new Deno.errors.InvalidData("index cannot be greater than count!")
        }

        while(i <= this._count) {
            if(i == index) {
                return current;
            }
            if(current!=null)
                current = current.next;
            i++;
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
}