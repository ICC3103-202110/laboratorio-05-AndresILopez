const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {table} = currentView
        console.clear
        console.log
        if (view>3){
            break
        }
    }

module.exports = {
    app
}

app(state, update, view)