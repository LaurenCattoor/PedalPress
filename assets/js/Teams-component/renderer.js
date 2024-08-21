import {fetchFromServer} from "../utils/fetcher.js";
import * as RidersRenderer from "../Riders-component/renderer.js";

function renderTeams(teams){
    const $teams = document.querySelector("#teams");
    $teams.innerHTML = "";

    teams.forEach(team => {
        $teams.insertAdjacentHTML("beforeend", `
            <div class="team-card">
                <h2>${team.name}</h2>
                <img src="./images/teams/${team.logo}" alt="${team.name}" title="${team.name}">
                <p class="riders" data-id="${team.id}">See the riders</p>
            </div>`
        );
    });

    const $riders = $teams.querySelectorAll(".riders");
    $riders.forEach(rider => {
        rider.addEventListener("click", getRidersFromTeam);
    });
}
function getRidersFromTeam(e){
    const teamId = e.target.dataset.id;
    fetchFromServer("GET", `teams/${teamId}/riders`)
        .then(json => RidersRenderer.renderRidersFromTeam(json.data));
}

export {renderTeams};