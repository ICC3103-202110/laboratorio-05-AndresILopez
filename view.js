import inquirer from "inquirer"

initModel = {
    billAmount: 0,
    percentage: '+',
    tip:0,
    total:0
}

function getTable(model){
    return[
        {billAmount: billAmount},
        {"tip(%)": percentage},
        {tip: tip},
        {total: total}
    ]
}
function inputForm(model){
    const {input} = model
    const message = 'bill amount?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input
}
    ])
}
function listForm(model){

}
function view(model){
    return {
        table: getTable(model)
    }
}
module.exports = {
    getTable,
    inputForm,
    view,
    initModel,
    listform
}