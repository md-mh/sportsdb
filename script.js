const team = document.getElementById('team');
const error = document.getElementById('error');
const spinner = document.getElementById('spinner');

const search = () => {
    const searchBox = document.getElementById('search-field');
    const searchValue = searchBox.value
    team.textContent = '';
    error.style.display = 'none';
    spinner.style.display = 'block';
    if (searchValue.length == 0) {
        error.style.display = 'block';
    } else {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`)
            .then(response => response.json())
            .then(data => teammembers(data.teams));
    }
}


const teammembers = members => {
    console.log(members)
    if (members.length == 0) {
        error.style.display = 'block';
        spinner.style.display = 'none';
    } else {
        for (const member of members) {
            console.log(member)
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
            <img src="${member.strTeamBadge}" class="img-fluid p-3">
            <h1>${member.strCountry}</h1>
            <p>${member.strDescriptionEN.slice(0, 250)} ....</p>
        `;
            team.appendChild(div);
            spinner.style.display = 'none';
        }
    }

}
