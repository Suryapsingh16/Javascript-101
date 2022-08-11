

let count = 0

let counter = document.getElementById("count")
let saveEl = document.getElementById("save")





function increment() {

    count = count + 1

    counter.innerText = count
}

function decrement() {

    if (count > 0) { count = count - 1 }


    counter.innerText = count


}

function save() {
    //saveEl+= count
    
    saveEl.textContent += count + " - "
    count=0
    counter.innerText=count

}


//increment()
//console.log(count)