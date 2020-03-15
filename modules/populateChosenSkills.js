// Populate chosen skills list
export function populateChosenSkills(skillsListData) {
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
}