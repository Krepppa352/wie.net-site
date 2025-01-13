let jsonData;
let currentIndex = 0;
async function fetchJson(path) {
    console.log("Fetching data...");
    const fetchResponse = await fetch(path);
    jsonData = await fetchResponse.json();
    console.log("Fetching finished.");
    return jsonData;
}
fetchJson("../staticdata/gallery.json");

function swapImage(e) {
    if (e.code == "ArrowLeft") {
        currentIndex--;
    }
    else if (e.code == "ArrowRight") {
        currentIndex++;
    }
    document.body.style.backgroundImage = "url(" + jsonData[currentIndex]["path"] + ")";
}

window.addEventListener("keydown", swapImage);