export function populateResults(filteredSkillsList) {
    let musicSkillsList = document.querySelector('.music-skills-list');
    let dancingSkillsList = document.querySelector('.dancing-skills-list');
    let actingSkillsList = document.querySelector('.acting-skills-list');

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