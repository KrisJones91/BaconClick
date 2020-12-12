let money = 0;
let modifier = 0;
let purchase = 0;

let clickUpgrades = {
    food: {
        price: 5,
        quantity: 0,
        multiplier: 2,
        adder: 0
    },
    water: {
        price: 10,
        quantity: 0,
        multiplier: 3,
        adder: 0
    },
    jobs: {
        price: 15,
        quantity: 0,
        multiplier: 2,
        adder: 0
    },
    houses: {
        price: 50,
        quantity: 0,
        multiplier: 2,
        adder: 0
    }
}

let autoUpgrades = {
    money: {
        price: 150,
        quantity: 0,
        multiplier: 1
    },
    hospitals: {
        price: 2000,
        quantity: 0,
        multiplier: 2
    }

}


function earth() {
    money += 1 + modifier




    update()
}


function buyUpgrades(type) {


    // money if greater than upgrades price can use to purchase upgrades.. money decreases by amount of upgrade price
    if (money >= clickUpgrades[type].price) {
        money -= clickUpgrades[type].price
        //price multiplies
        clickUpgrades[type].price = clickUpgrades[type].price * clickUpgrades[type].multiplier
        //upgrades continue adding as you purchase
        clickUpgrades[type].quantity++
        clickUpgrades[type].quantity = clickUpgrades[type].quantity + clickUpgrades[type].adder
        //click counts stack with earth clicks
        modifier = clickUpgrades[type].quantity + modifier


    }


    update()
}





function update() {
    //update money count (+1) click of earth
    document.getElementById('money').innerHTML = money.toString()
    //updates price
    document.getElementById('food').innerText = '$' + clickUpgrades.food.price
    document.getElementById('water').innerText = '$' + clickUpgrades.water.price
    document.getElementById('jobs').innerText = '$' + clickUpgrades.jobs.price
    document.getElementById('houses').innerText = '$' + clickUpgrades.houses.price
    //updates quantity
    document.getElementById('food-q').innerText = '+' + clickUpgrades.food.quantity
    document.getElementById('water-q').innerText = '+' + clickUpgrades.water.quantity
    document.getElementById('jobs-q').innerText = '+' + clickUpgrades.jobs.quantity
    document.getElementById('houses-q').innerText = '+' + clickUpgrades.houses.quantity

}

update()
