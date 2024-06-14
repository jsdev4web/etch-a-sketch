let mainDiv = document.querySelector(".main");
console.log(mainDiv);


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