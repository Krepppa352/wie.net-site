var jsonData = {};
var currentIndex = 0;
async function fetchJson(path) {
    console.log("Fetching data...");
    const fetchResponse = await fetch(path);
    jsonData = await fetchResponse.json();
    console.log("Fetching finished.");
    return jsonData;
}
function swapImage(e) {
    if (e.code === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + jsonData.length) % jsonData.length;
    }
    else if (e.code === "ArrowRight") {
        currentIndex = (currentIndex + 1) % jsonData.length;
    }
    else {
        return;
    }
    document.body.style.backgroundImage = "url(" + jsonData[currentIndex]["path"] + ")";
}

window.addEventListener("keydown", swapImage);
fetchJson("../staticdata/gallery.json");