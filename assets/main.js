const rollbutton = document.querySelector('.roll-button')
let dieRolls = []
const userInputBox = document.querySelector('#userInputBox')
let totalsElement = document.querySelector('.total')
const allRollsElement = document.querySelector('.show-all-button')
const listElement = document.querySelector('ol')
const numberofSidesInputBox = document.querySelector('.numberofSidesInputBox')
const reset = document.querySelector('.reset')
const roll4 = document.querySelector('.roll4')
const enter4 = document.querySelector('#enter4')
const roll8 = document.querySelector('.roll8')
const enter8 = document.querySelector('#enter8')
const enter10 = document.querySelector('#enter10')
const roll10 = document.querySelector('.roll10')
const enter12 = document.querySelector('#enter12')
const roll12 = document.querySelector('.roll12')
const enter20 = document.querySelector('#enter20')
const roll20 = document.querySelector('.roll20')


rollbutton.addEventListener('click', function () {
    let diceRolled = document.querySelector('#userInputBox').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled) {

        let diceRoll = Math.floor(Math.random() * 6 + 1);
        console.log(diceRoll)
        dieRolls.push(diceRoll)

        total += diceRoll
        counter += 1
    }
    console.log(dieRolls)
    totalsElement.innerHTML = ' Total ' + total
})

allRollsElement.addEventListener('click', function () {
    let counter = 0
    let total = 0
    while (counter < dieRolls.length) {
        listElement.innerHTML += '<li>' + dieRolls[counter] + '</li>';

        counter += 1
    }

    console.log(total)
})

roll4.addEventListener('click', function () {
    let diceRolled4 = document.querySelector('#enter4').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled4) {

        let diceRoll4 = Math.floor(Math.random() * 4 + 1);
        console.log(diceRoll4)
        dieRolls.push(diceRoll4)

        total += diceRoll4
        counter += 1
    }
    totalsElement.innerHTML = ' Total ' + total
})


roll8.addEventListener('click', function () {
    let diceRolled8 = document.querySelector('#enter8').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled8) {

        let diceRoll8 = Math.floor(Math.random() * 8 + 1);
        console.log(diceRoll8)
        dieRolls.push(diceRoll8)

        total += diceRoll8
        counter += 1
    }
    totalsElement.innerHTML = ' Total ' + total
})


roll10.addEventListener('click', function () {
    let diceRolled10 = document.querySelector('#enter10').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled10) {

        let diceRoll10 = Math.floor(Math.random() * 10 + 1);
        console.log(diceRoll10)
        dieRolls.push(diceRoll10)

        total += diceRoll10
        counter += 1
    }
    totalsElement.innerHTML = ' Total ' + total
})

roll12.addEventListener('click', function () {
    let diceRolled12 = document.querySelector('#enter12').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled12) {

        let diceRoll12 = Math.floor(Math.random() * 20 + 1);
        console.log(diceRoll12)
        dieRolls.push(diceRoll12)

        total += diceRoll12
        counter += 1
    }
    totalsElement.innerHTML = ' Total ' + total
})

roll20.addEventListener('click', function () {
    let diceRolled20 = document.querySelector('#enter20').value;
    let counter = 0
    let total = 0
    while (counter < diceRolled20) {

        let diceRoll20 = Math.floor(Math.random() * 20 + 1);
        console.log(diceRoll20)
        dieRolls.push(diceRoll20)

        total += diceRoll20
        counter += 1
    }
    totalsElement.innerHTML = ' Total ' + total
})

reset.addEventListener('click', function () {
    let dieRolls = []
    dieRolls.innerHTML = ""
    listElement.innerHTML = ""
    totalsElement.innerHTML = "" + 'Total:'
    userInputBox.value = ""
    allRollsElement.innerHTML = "" + 'Show All Rolls'
    enter4.value = ""
    enter8.value = ""
    enter10.value = ""
    enter12.value = ""
    enter20.value = ""
})