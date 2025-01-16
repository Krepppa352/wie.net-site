var jsonData = {};
var currentIndex = 0;
async function fetchJson(path) {
    console.log("Fetching data...");
    const fetchResponse = await fetch(path);
    jsonData = await fetchResponse.json();
    console.log("Fetching finished.");
    return jsonData;
}
function swapImage(direction) {
    if (direction === "left") {
        currentIndex = (currentIndex - 1 + jsonData.length) % jsonData.length;
    }
    else if (direction === "right") {
        currentIndex = (currentIndex + 1) % jsonData.length;
    }
    else {
        return;
    }
    document.body.style.backgroundImage = "url(" + jsonData[currentIndex]["path"] + ")";
    document.getElementById("description").innerHTML = jsonData[currentIndex]["description"]
}
function swapImageKeyDown(e) {
    if (e.code === "ArrowLeft") {
        swapImage("left");
    }
    else if (e.code === "ArrowRight") {
        swapImage("right");
    }
    else {return;}
}
fetchJson("../staticdata/gallery.json").then(() => {
    window.addEventListener("keydown", swapImageKeyDown);
    const hammerObj = new Hammer(document.body);
    hammerObj.on("swipeleft", swapImage("left"));
    hammerObj.on("swiperight", swapImage("right"));
});
