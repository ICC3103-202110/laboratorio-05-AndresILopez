const {inputForm, listForm, view, initModel} = require('./view')
const {printTable} = require('console-table-printer')
const {update} = require('./update')

function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {table} = currentView
        console.clear
        console.log
        printTable(table)
        const {input} = await listForm(model)
        const updatedModel = update(input, model)
        state = {
            state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, update, view)