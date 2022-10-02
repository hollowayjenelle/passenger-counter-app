//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let count = 0

function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
}

function save(){
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    count = 0
    document.getElementById("count-el").textContent = count
}