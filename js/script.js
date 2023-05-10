let count = 0;
document.getElementById("button").onclick = counter = () =>{
    console.log(count)
    document.getElementById("clickCount").innerHTML = `Number of times clicked: ${count++}`;
}