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
        var innerHTML = document.createElement("div");
        innerHTML.style = "display: flex; justify-content: flex-start;";
        var name = element["name"];
        innerHTML.innerHTML = "<img src='https://minotar.net/helm/" + name + "/64.png'><h1>" + name + "</h1>";
        document.getElementById("member-container").appendChild(innerHTML);
        console.log("<img src='https://mintor.net/helm/" + name + "/64.png'>")
    })
});