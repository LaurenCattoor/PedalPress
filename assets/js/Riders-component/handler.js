import {fetchFromServer} from "../utils/fetcher.js";
import * as RidersRenderer from "./renderer.js";


function loadRiders() {
    fetchFromServer("GET", "riders")
        .then(json => RidersRenderer.renderRiders(json.data));

}

export {loadRiders};