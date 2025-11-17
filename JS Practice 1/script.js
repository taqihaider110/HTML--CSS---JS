let count = 0;

function incrementCount() {
    count += 1;
    document.getElementById("count").innerText = count;
}

function saveCount() {
    let countStr = count + " - ";
    document.getElementById("save-el").innerText += countStr;
}