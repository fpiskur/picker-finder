let skillsListData = {
    music: ['guitar', 'drums', 'vocals', 'triangle'],
    dancing: ['salsa', 'tango', 'waltz', 'cha cha', 'samba'],
    acting: ['action', 'comedy', 'drama']
};

let chosenSkills = {
    music: [],
    dancing: [],
    acting: []
};

// Populate chosen skills list
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

// Search / Add skill
let filteredSkillsList = {
    music: [...skillsListData.music],
    dancing: [...skillsListData.dancing],
    acting: [...skillsListData.acting]
};

let input = document.querySelector('.input');
input.addEventListener('input', updateSkills);

function updateSkills(event) {
    filteredSkillsList = {};
    for(let category in skillsListData) {
        let filteredCategory = skillsListData[category].filter(skill => skill.toLowerCase().includes(event.target.value.toLowerCase()));
        filteredSkillsList = { ...filteredSkillsList, [category]: filteredCategory }
    }
    populateResults();
}

// Show / Hide Results
let toggleWrapper = document.querySelector('.toggle-wrapper');
let results = document.querySelector('.results');

let categoriesDiv = document.querySelector('.categories');

toggleWrapper.addEventListener('focusin', showResults);
document.addEventListener('click', hideResults);

function showResults() {
    results.style.display = 'block';
    // Set scroll position to top = 0
    categoriesDiv.scrollTop = 0;
}

function hideResults(event) {
    if(!toggleWrapper.contains(event.target)) {
        results.style.display = 'none';
    }
}

// Populate skills in results
// let musicBtn = document.getElementById('music-cat-btn');
// let dancingBtn = document.getElementById('dancing-cat-btn');
// let actingBtn = document.getElementById('acting-cat-btn');

let musicSkillsList = document.querySelector('.music-skills-list');
let dancingSkillsList = document.querySelector('.dancing-skills-list');
let actingSkillsList = document.querySelector('.acting-skills-list');

populateResults();

function populateResults() {
    // Clear lists
    while(musicSkillsList.firstChild) {
        musicSkillsList.removeChild(musicSkillsList.lastChild);
    }
    while(dancingSkillsList.firstChild) {
        dancingSkillsList.removeChild(dancingSkillsList.lastChild);
    }
    while(actingSkillsList.firstChild) {
        actingSkillsList.removeChild(actingSkillsList.lastChild);
    }

    // Create and append skills list (checkboxes)
    if (filteredSkillsList.music.length) {
        filteredSkillsList.music.forEach(skill => {
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
    
    if (filteredSkillsList.dancing.length) {
        filteredSkillsList.dancing.forEach(skill => {
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
    
    if (filteredSkillsList.acting.length) {
        filteredSkillsList.acting.forEach(skill => {
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
}

// Show / Hide category in results
let categoryBtns = document.getElementsByClassName('toggle-btn');

for(let button of categoryBtns) {
    button.addEventListener('click', function() {
        // this.classList.toggle('active');
        let arrow = this.querySelector('span');
        toggleContent = this.nextElementSibling;
        toggleContent.classList.toggle('hidden');
        if(toggleContent.classList.contains('hidden')) {
            arrow.innerText = '▶';
        } else {
            arrow.innerText = '▼';
        }
    });
}

// Add skill to list
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addSkillToList);

function addSkillToList() {
    
}