const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const plus = document.getElementById("plus");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const minus = document.getElementById("minus");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const divide = document.getElementById("divide")
const multiply = document.getElementById("multi");
const zero = document.getElementById("zero");
const equal = document.getElementById("equals");
const scr = document.querySelector(".screen")
const otherActBtn = ["+", "-", "/", "*"]

const num = [nine, eight, seven, six, five, four, three, two, one, zero]
const actBtn = [plus, minus, divide, multiply, equal]

let total
let condition = false

num.forEach(e => {
    e.addEventListener('click', ()=> {
        for (let i = 0; i < otherActBtn.length; i++) {
            const element = otherActBtn[i];
            
            if (scr.innerText.slice(-1) !== element) {
                condition = false
            }else{
                condition = true
            }
        }

        console.log(condition)

        if (condition === true) {
            scr.innerText = `${scr.innerText}${e.innerText}`
        }else{
            scr.innerText = `${scr.innerText} ${e.innerText}`
        }
    })
});
actBtn.forEach(e => {
    e.addEventListener('click', f =>{
        for (let i = 0; i < otherActBtn.length; i++) {
            const element = otherActBtn[i];
            
            if (e.innerText !== "=" && !scr.innerText.includes(element)) {
                scr.innerText = `${scr.innerText} ${e.innerText}`
                break
            }else if (scr.innerText.includes(element)){
                let parts = scr.innerText.split(e.innerText)

                if (e.innerText === element) {
                    if (e.innerText === "+") {
                        total = parseInt(parseInt(parts[0]) + parseInt(parts[1]))
                    } else if (e.innerText === "-") {
                        total = parseInt(parseInt(parts[0]) - parseInt(parts[1]))
                    } if (e.innerText === "*") {
                        total = parseInt(parseInt(parts[0]) * parseInt(parts[1]))
                    } else if (e.innerText === "/") {
                        total = parseInt(parseInt(parts[0]) / parseInt(parts[1]))
                    }
                }
            }
        }
    })
});