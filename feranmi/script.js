const nine = document.getElementById("nine");
const eight= document.getElementById("eight");
const seven = document.getElementById("seven");
const plus= document.getElementById("plus");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const minus = document.getElementById("minus");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multi");
const zero = document.getElementById("zero");
const equal = document.getElementById("equals");
const scr = document.querySelector(".screen")


nine.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}9`
})
eight.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}8`
})
seven.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}7`
})
plus.addEventListener('click',()=>{
    let curscr = scr.innerText
    if (curscr.includes("+")) {
        calc("+")
    }else{
        scr.innerText = `${scr.innerText} + `
    }
})
four.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}4`
})
five.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}5`
})
six.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}6`
})
minus.addEventListener('click',()=>{
    let cursur = scr.innerText
    if (cursur.includes("-")) {
        calc("-")
    }else{
        scr.innerText = `${scr.innerText} - `
    }
})
one.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}1`
})
two.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}2`
})
three.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}3`
})
divide.addEventListener('click', ()=>{
    let curscr = scr.innerText
     if (curscr.includes("/")) {
        calc("/")
    }else{
        scr.innerText = `${scr.innerText} / `
    }
})
zero.addEventListener('click',()=>{
    scr.innerText = `${scr.innerText}0`
})
multiply.addEventListener('click',()=>{
    let curscr = scr.innerText
     if (curscr.includes("*")) {
        calc("*")
    }else{
        scr.innerText = `${scr.innerText} * `
    }
})
equal.addEventListener('click',()=>{
    calc("=")
})


function calc(e) {
    let curscr = scr.innerText
    let total

    if (e !== "=") {
        let parts = curscr.split(e)

        if (e === "+") {
            total = parseInt(parseInt(parts[0]) + parseInt(parts[1]))
        }else if (e === "-") {
            total = parseInt(parseInt(parts[0]) - parseInt(parts[1]))
        }else if (e === "*") {
            total = parseInt(parseInt(parts[0]) * parseInt(parts[1]))
        }else if (e === "/") {
            total = parseInt(parseInt(parts[0]) / parseInt(parts[1]))
        }
    }else{
        let sig = ["+", "-", "*", "/"]

        sig.forEach(e => {
            if (curscr.includes(e)) {

                let parts = curscr.split(e)

                if (e === "+") {
                    total = parseInt(parseInt(parts[0]) + parseInt(parts[1]))
                }  else if (e === "-") {
                    total = parseInt(parseInt(parts[0]) - parseInt(parts[1]))
                } if (e === "*") {
                    total = parseInt(parseInt(parts[0]) * parseInt(parts[1]))
                } else if (e === "/") {
                    total = parseInt(parseInt(parts[0]) / parseInt(parts[1]))
                }
            }
        });
    }

    scr.innerText = total
}