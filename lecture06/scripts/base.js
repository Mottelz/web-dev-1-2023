function getGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = async function () {
        console.log(this.response.name);
        addGameToTable(this.response.name, this.response.designer, this.response.playerCount);
    };
    xhttp.open("GET", "http://localhost:3030/games/game");
    xhttp.send();
}

function addGameToTable(name, designer, playerCount) {
    let row = document.createElement("tr")
    row.appendChild(createCell(name))
    row.appendChild(createCell(designer))
    row.appendChild(createCell(playerCount))

    let destination = document.getElementById("gamesList");
    destination.appendChild(row);
}

function createCell(data) {
    let cell = document.createElement("td");
    cell.innerHTML = data;
    return cell;
}