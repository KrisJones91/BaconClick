let oinks = 0;
let modifier = 0;
let purchase = 0;

let clickUpgrades = {
    mud: {
        price: 5,
        quantity: 0,
        multiplier: 2,
        adder: 0
    },
    pens: {
        price: 10,
        quantity: 0,
        multiplier: 3,
        adder: 0
    },
    farmers: {
        price: 15,
        quantity: 0,
        multiplier: 2,
        adder: 0
    },
    factories: {
        price: 50,
        quantity: 0,
        multiplier: 2,
        adder: 0
    }
}

let autoUpgrades = {
    upOinks: {
        price: 5,
        quantity: 0,
        multiplier: 1
    },

}


function pig() {

    oinks += 1 + modifier
    document.getElementById("song").play()

    update()
}


function buyUpgrades(type) {


    // money if greater than upgrades price can use to purchase upgrades.. money decreases by amount of upgrade price
    if (oinks >= clickUpgrades[type].price) {
        oinks -= clickUpgrades[type].price
        //price multiplies
        clickUpgrades[type].price = clickUpgrades[type].price * clickUpgrades[type].multiplier
        //upgrades continue adding as you purchase
        clickUpgrades[type].quantity++
        clickUpgrades[type].quantity = clickUpgrades[type].quantity + clickUpgrades[type].adder
        //click counts stack with earth clicks
        modifier = clickUpgrades[type].quantity + modifier
        //autoupgrades

    }

    update()
}

function buyAuto() {
    autoUpgrades.upOinks.quantity++
    update()
}

function collectAuto() {
    oinks += autoUpgrades.upOinks.quantity * autoUpgrades.upOinks.multiplier
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAuto, 3000)
}




function update() {
    //update money count (+1) click of earth
    document.getElementById('oinks').innerHTML = oinks.toString()
    //updates price
    document.getElementById('mud').innerText = '$' + clickUpgrades.mud.price
    document.getElementById('pens').innerText = '$' + clickUpgrades.pens.price
    document.getElementById('farmers').innerText = '$' + clickUpgrades.farmers.price
    document.getElementById('factories').innerText = '$' + clickUpgrades.factories.price
    //updates quantity
    document.getElementById('mud-q').innerText = '+' + clickUpgrades.mud.quantity
    document.getElementById('pens-q').innerText = '+' + clickUpgrades.pens.quantity
    document.getElementById('farmers-q').innerText = '+' + clickUpgrades.farmers.quantity
    document.getElementById('factories-q').innerText = '+' + clickUpgrades.factories.quantity

    document.getElementById('addoinks').innerHTML = autoUpgrades.upOinks.quantity
}

startInterval()
update()