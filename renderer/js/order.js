const Store = require('store2')
const local = Store.local
const session = Store.session

$(document).ready(() => {

    console.log(session.get('message'))
})