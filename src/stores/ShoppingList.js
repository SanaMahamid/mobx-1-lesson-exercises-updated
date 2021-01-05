/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })
    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        const item = new Item(name)
        this.list.push(item)
    }
    editItem = (name, location) => {
        let item = this.list.find(i => i.name === name)
        item.location = location
    }
    deleteItem = (name) => {
        const index = this.list.findIndex(i => i.name === name)
        this.list.splice(index, 1)
    }
}

