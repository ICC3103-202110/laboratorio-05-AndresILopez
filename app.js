const {inputForm, listForm, view, initModel} = require('./view')
const {printTable} = require('console-table-printer')
const {update} = require('./update')

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


app(state, update, view)