import {fetchFromServer} from "../utils/fetcher.js";
import * as TeamsRenderer from "./renderer.js";

function loadTeams() {
    fetchFromServer("GET", "teams")
        .then(json => TeamsRenderer.renderTeams(json.data));

}

export {loadTeams}