console.log("script has loaded")

//get the user that is signed in by prompting
let userName = "Jonathon"

//get the welcome-message element by id
let welcomeMessageElement = document.getElementById("welcome-message")
console.log(welcomeMessageElement)

//change that elements displayed text content
welcomeMessageElement.textContent = `Welcome ${userName}`

//define a list of tickets so that we can display them
    //A ticket is an object
        // origin: Reykvik
        // destination: Sydney 
        // customer: caleb
        // flightTime: 9 hours
        // priceUSD: 1200
    //list of ticket objects

let tickets = [
    {
        origin: "houston",
        destination: "florida", 
        customer: "jonathon",
        flightTime: "2 hours",
        priceUSD: 500 
    },
    {
        origin: "Reykvik",
        destination: "Sydney" ,
        customer: "caleb",
        flightTime: "9 hours",
        priceUSD: 1200
    }
]


console.log("Tickets", tickets)

//calculate the total price of those tickets
let totalPrice = 0

//how to calculate tickets prices as a human
// totalPrice = totalPrice + 500 //jonathon
console.log(tickets[0].priceUSD)

// totalPrice = totalPrice + 1200 //calebs
console.log(tickets[1].priceUSD)

//use a for loop to go through my list of tickets
//initializer, condition, iterator
//tickets.length is 2
// go until index is not < 2
for(let index = 0; index < tickets.length; index++) {
    //body (thing that is repeated)
    let thisTicket = tickets[index]
    console.log("index", index, "ticket at index", thisTicket)

    console.log("Tickets price", thisTicket.priceUSD)
    //as I go through tickets add price to the total price
    totalPrice = totalPrice + thisTicket.priceUSD
}

console.log(`Total Price: $${totalPrice}`)

//display the total price on the html
let totalPriceElement = document.getElementById("total-price")
console.log(totalPriceElement)

//change the textContent to the total Price we calculated
totalPriceElement.textContent = `Total Price: $${totalPrice}`

//when we click submit payment say thank for your purchase
//when clicked hard-coded messages

//our function instructions don't excecute yet...
//takes 2 inputs
function success_payment(customerName, chargedPrice){
    window.alert(`Thank you ${customerName} for your $${chargedPrice} purchase`)
}


//get submit button reference
let submitButton = document.getElementById("submit-button")
console.log(submitButton)

//register a click listener -> that fires our success_payment when clicked
submitButton.addEventListener('click', function (){
    //passing 2 inputs to our function and executing
    success_payment(userName, totalPrice)
})