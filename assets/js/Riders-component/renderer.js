function getAge(birthdate) {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const month = today.getMonth() - birthdateDate.getMonth();
    const day = today.getDate() - birthdateDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    return age;
}

function renderRiders(riders) {
    const $riders = document.querySelector("#riders");
    $riders.innerHTML = "";

    riders.forEach(rider => {

        const age = getAge(rider.birth_date);
        const birthdate = new Date(rider.birth_date);
        const year = birthdate.getFullYear();
        const month = birthdate.getMonth() + 1;
        const day = birthdate.getDate();
        $riders.insertAdjacentHTML("beforeend", `
            <div class="rider-card">
                <h2>${rider.name}</h2>
                <img src="./images/riders/${_TEAMS[(rider.team_id) - 1]}/${rider.image}" alt="${rider.name}" title="${rider.name}">
                <p>Team: ${_TEAMS[(rider.team_id) - 1]}</p>
                <p>Nationality: ${rider.country}</p>
                <p>Birthdate: ${day}-${month}-${year}</p>
                <p>Age: ${age}</p>
                
                </div>`)});
}

function renderRidersFromTeam(riders) {
    const $teams = document.querySelector("#teams");
    $teams.innerHTML = "";
    const $riders = document.querySelector("#ridersFromTeam");
    $riders.innerHTML = "";

    riders.forEach(rider => {
        const age = getAge(rider.birth_date);
        const birthdate = new Date(rider.birth_date);
        const year = birthdate.getFullYear();
        const month = birthdate.getMonth() + 1;
        const day = birthdate.getDate();
        $riders.insertAdjacentHTML("beforeend", `
            <div class="rider-card">
                <h2>${rider.name}</h2>
                <img src="./images/riders/${_TEAMS[(rider.team_id) - 1]}/${rider.image}" alt="${rider.name}" title="${rider.name}">
                <p>Team: ${_TEAMS[(rider.team_id) - 1]}</p>
                <p>Nationality: ${rider.country}</p>
                <p>Birthdate: ${day}-${month}-${year}</p>
                <p>Age: ${age}</p>
                
                </div>`)});

}

const _TEAMS =["Alpecin - Deceuninck", "Arkéa - B&B Hotels","Astana Qazaqstan Team", "Bahrain - Victorious", "Red Bull - BORA - Hansgrohe", "Cofidis", "Decathlon AG2R La Mondiale Team", "EF Education - EasyPost", "Groupama - FDJ", "INEOS Grenadiers", "Intermarché - Wanty" , "Lidl - Trek", "Movistar Team", "Soudal Quick-Step", "Team dsm-firmenich PostNL", "Team Jayco AlUla", "Team Visma  Lease a Bike", "UAE Team Emirates"];
export {renderRiders, renderRidersFromTeam};