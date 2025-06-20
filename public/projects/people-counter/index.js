let countEl = document.getElementById("count-el")

let count = 0



function increment() {

    count += 1
    countEl.textContent = count

}

let entryEl = document.getElementById("entry-el")



function save() {

    entryEl.textContent += " " + countEl.textContent + " - "
    count= 0
    countEl.textContent = count
    
}

















