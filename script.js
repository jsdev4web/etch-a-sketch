let mainDiv = document.querySelector(".main");
console.log(mainDiv);

let addSquares = document.createElement("button");
addSquares.setAttribute("class", "addSquares");
document.body.insertBefore(addSquares, mainDiv)
addSquares.innerText = "Add Squares"


function makeRows(rowNum){
    rowNum = rowNum * rowNum
    for (let i = 0; i < rowNum; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "row");
        mainDiv.appendChild(row)
        
    };
};

makeRows(16)



let square = document.querySelectorAll(".row")
let squares = Array.prototype.slice.call(square)
console.log(square)
console.log(squares)

let j = typeof(squares)
console.log(j)


function skittles(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgba(${r}, ${g}, ${b}, 0.5)`
    return rgb
}

console.log(skittles())


square.forEach((cell) => {
    cell.addEventListener("mouseover", function(e) {
        console.log(e)
        e.target.style.backgroundColor = skittles()
        e.target.style.transition = "ease 1s all"
    })
})


let newSquares;

addSquares.addEventListener("click", function() {

    let moreSquares = prompt("What is the new number squared?")
    
    if (moreSquares <= 100){
        

    } else {
    alert("Too high of a number")
    };


    let main = document.querySelector(".main");
    let html = "";
    main.innerText += html;

    console.log(moreSquares)

    makeRows(moreSquares)

    let cell = document.querySelectorAll(".row");

    console.log(cell)

    cell.forEach((square) => {
        square.addEventListener("mouseover", function(e) {
            console.log(e)
            e.target.style.backgroundColor = skittles()
            e.target.style.animation = "mymove 4s 5"
            e.target.style.position = "relative"
            e.target.style.transformOrigin = "right bottom"
            e.target.style.transform = "scale(1.2)"
            e.target.style.transition = "background-color 1.5s";
            e.target.style.filter = "brightness(50%)"
        })

    })
})
