function tip(billAmount, percentage){
    return percentage*billAmount/100
}
function total(billAmount){
    return billAmount+tip(billAmount, percentage)
}
function update(input, model){

}

module.exports = {
    update
}