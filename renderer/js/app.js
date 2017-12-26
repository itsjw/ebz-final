
const Store = require('store2')
const local = Store.local
const session = Store.session
const icecream = require('./icecream')
const ICECREAM = {
    
}
$(document).ready(() => {

    new OrderSet()
    session.set('message', 'hello')

    // attach listener to all delete 
})

class Order {
    constructor(id, table, items) {
        this.id = Math.random().toString(),
        this.table = name

    }
}

class Item {
    constructor(type) {
        this.type = type
        this.quantity = 1
    }

    getType() {
        return this.type
    }

    increase() {
        this.quantity += 1
    }

    decrease() {
        this.quantity -= 1
    }

    cost() {
        return this.type.price * quantity
    }
}

class OrderSet {
    constructor() {
        this.orders = session.get('orders')
    }
}