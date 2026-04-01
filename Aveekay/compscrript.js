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

let total


const num = [nine, eight, seven, six, five, four, three, two, one, zero]
const actBtn = [plus, minus, divide, multiply, equal]

num.forEach(e => {
    e.addEventListener('click', ()=> {
        scr.innerText = `${scr.innerText}${e.innerText}`
    })
});
actBtn.forEach(e => {
    e.addEventListener('click', f =>{
        let otherActBtn = ["+", "-", "/", "*"]
        for (let i = 0; i < otherActBtn.length; i++) {
            const element = otherActBtn[i];
            
            if (f.innerText !== "=" && !scr.innerText.includes(element)) {
                scr.innerText = `${scr.innerText}${e.innerText}`
                break
            }else if (scr.innerText.includes(element)){
                scr.innerText.split(f.innerText)

                if (e.innerText === f.innerText) {
                    if (e === "+") {
                        total = parseInt(parseInt(parts[0]) + parseInt(parts[1]))
                    } else if (e === "-") {
                        total = parseInt(parseInt(parts[0]) - parseInt(parts[1]))
                    } if (e === "*") {
                        total = parseInt(parseInt(parts[0]) * parseInt(parts[1]))
                    } else if (e === "/") {
                        total = parseInt(parseInt(parts[0]) / parseInt(parts[1]))
                    }
                }
            }
        }
    })
});