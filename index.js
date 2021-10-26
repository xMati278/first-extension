let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

console.log(myLeads)
inputBtn.addEventListener("click", function() {
        console.log("Button clicked from addEvent")
        myLeads.push(inputEl.value)
        console.log(myLeads)
    })
    //5:03:58