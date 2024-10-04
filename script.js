

function BGcolor(color) {
    let text = document.getElementsByClassName("text");
    document.body.style.background = color;
    if (color == "black") {
        for (let i of text) {
            i.style.color = "white";
        }
    }
    else if (color == "blue") {
        for (let i of text) {
            i.style.color = "white";
        }
    }

    else {
        for (let i of text) {
            i.style.color = "white";
        }
    }
}
