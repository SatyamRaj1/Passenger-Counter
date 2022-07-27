let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
let prev = document.getElementById("previous-val");
function save(){
    let str = " " + count + " -";
    prev.textContent += str;
    count = 0;
    countEl.textContent = 0;
}