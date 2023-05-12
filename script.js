let count = 0;
const counter = () => {
    document.getElementById("clickCount").innerHTML = `Number of times clicked: ${++count}`;
}