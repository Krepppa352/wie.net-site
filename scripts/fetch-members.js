let jsonData;
async function fetchJson(path) {
    console.log("Fetching data...");
    const fetchResponse = await fetch(path);
    jsonData = await fetchResponse.json();
    console.log("Fetching finished.");
    console.log(jsonData);
    return jsonData;
}
fetchJson("../staticdata/members.json").then(() => {
    let index = 0;
    jsonData.forEach((element) => {
        var playerName = element["name"];
        var title = document.createElement("div");
        title.style = "display: flex; justify-content: flex-start;";
        title.innerHTML = "<img src='https://minotar.net/helm/" + playerName + "/64.png'><h1>" + playerName + "</h1>";
        document.getElementById("member-container").appendChild(title);

        var description = document.createElement("p");
        description.textContent = element["description"];
        document.getElementById("member-container").appendChild(description);
        var seperator = document.createElement("svg");
        seperator.poi
    })
});