let skillsListData = {
    music: ['guitar', 'drums', 'vocals', 'triangle'],
    dancing: ['salsa', 'tango', 'waltz', 'cha cha', 'samba'],
    acting: ['action', 'comedy', 'drama']
};

// let chosenSkills = [];

// Populate skills list
let musicList = document.querySelector('.music-list');
let dancingList = document.querySelector('.dancing-list');
let actingList = document.querySelector('.acting-list');

for(let item of skillsListData.music) {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    musicList.appendChild(listItem);
}

for(let item of skillsListData.dancing) {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    dancingList.appendChild(listItem);
}

for(let item of skillsListData.acting) {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    actingList.appendChild(listItem);
}

// Show / Hide Results
let toggleWrapper = document.querySelector('.toggle-wrapper');
let results = document.querySelector('.results');
// let input = document.querySelector('.input');

toggleWrapper.addEventListener('focusin', showResults);
document.addEventListener('click', hideResults);

function showResults() {
    results.style.display = 'block';
}

function hideResults(event) {
    if(!toggleWrapper.contains(event.target)) {
        results.style.display = 'none';
    }
}

// Populate skills in results
let musicBtn = document.getElementById('music-cat-btn');
let dancingBtn = document.getElementById('dancing-cat-btn');
let actingBtn = document.getElementById('acting-cat-btn');

let musicSkillsList = document.querySelector('.music-skills-list');
let dancingSkillsList = document.querySelector('.dancing-skills-list');
let actingSkillsList = document.querySelector('.acting-skills-list');

if (skillsListData.music.length) {
    skillsListData.music.forEach(skill => {
        let listItem = document.createElement('li');
        let listItemInput = document.createElement('input');
        listItemInput.type = 'checkbox';
        let listItemLabel = document.createElement('label');

        listItemInput.id = skill;
        listItemInput.name = skill;
        listItemLabel.htmlFor = skill;
        listItemLabel.innerText = ' ' + skill;
        listItem.appendChild(listItemInput);
        listItem.appendChild(listItemLabel);
        musicSkillsList.appendChild(listItem);
    });
}

if (skillsListData.dancing.length) {
    skillsListData.dancing.forEach(skill => {
        let listItem = document.createElement('li');
        let listItemInput = document.createElement('input');
        listItemInput.type = 'checkbox';
        let listItemLabel = document.createElement('label');

        listItemInput.id = skill;
        listItemInput.name = skill;
        listItemLabel.htmlFor = skill;
        listItemLabel.innerText = ' ' + skill;
        listItem.appendChild(listItemInput);
        listItem.appendChild(listItemLabel);
        dancingSkillsList.appendChild(listItem);
    });
}

if (skillsListData.acting.length) {
    skillsListData.acting.forEach(skill => {
        let listItem = document.createElement('li');
        let listItemInput = document.createElement('input');
        listItemInput.type = 'checkbox';
        let listItemLabel = document.createElement('label');

        listItemInput.id = skill;
        listItemInput.name = skill;
        listItemLabel.htmlFor = skill;
        listItemLabel.innerText = ' ' + skill;
        listItem.appendChild(listItemInput);
        listItem.appendChild(listItemLabel);
        actingSkillsList.appendChild(listItem);
    });
}