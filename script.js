import { skillsListData } from './modules/db.js';
import { populateChosenSkills } from './modules/populateChosenSkills.js';
import { isExactTerm, filteredSkillsList, input } from './modules/search.js';
import { populateResults } from './modules/populateResults.js';

let chosenSkills = {
    music: [],
    dancing: [],
    acting: []
};

populateChosenSkills(skillsListData);

// // Search skills
// let filteredSkillsList = {
//     music: [...skillsListData.music],
//     dancing: [...skillsListData.dancing],
//     acting: [...skillsListData.acting]
// };

// let input = document.querySelector('.input input');
// input.value = '';
// input.addEventListener('input', (event) => updateSkillsResults(event, isExactTerm));

// function updateSkillsResults(event, isExactTerm) {
//     isExactTerm = false;
//     filteredSkillsList = {};
//     for(let category in skillsListData) {
//         let filteredCategory = skillsListData[category].filter(skill => skill.toLowerCase().includes(event.target.value.toLowerCase()));
//         filteredSkillsList = { ...filteredSkillsList, [category]: filteredCategory };
//         for(let skill of skillsListData[category]) {
//             isExactTerm = skill.toLowerCase() === event.target.value.toLowerCase() ? true : isExactTerm;
//         }
//     }
//     populateResults();
// }

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

// let musicSkillsList = document.querySelector('.music-skills-list');
// let dancingSkillsList = document.querySelector('.dancing-skills-list');
// let actingSkillsList = document.querySelector('.acting-skills-list');

populateResults(filteredSkillsList);

// function populateResults() {
//     // Clear lists
//     while(musicSkillsList.firstChild) {
//         musicSkillsList.removeChild(musicSkillsList.lastChild);
//     }
//     while(dancingSkillsList.firstChild) {
//         dancingSkillsList.removeChild(dancingSkillsList.lastChild);
//     }
//     while(actingSkillsList.firstChild) {
//         actingSkillsList.removeChild(actingSkillsList.lastChild);
//     }

//     // Create and append skills list (checkboxes)
//     if (filteredSkillsList.music.length) {
//         filteredSkillsList.music.forEach(skill => {
//             let listItem = document.createElement('li');
//             let listItemInput = document.createElement('input');
//             listItemInput.type = 'checkbox';
//             let listItemLabel = document.createElement('label');
    
//             listItemInput.id = skill;
//             listItemInput.name = skill;
//             listItemLabel.htmlFor = skill;
//             listItemLabel.innerText = ' ' + skill;
//             listItem.appendChild(listItemInput);
//             listItem.appendChild(listItemLabel);
//             musicSkillsList.appendChild(listItem);
//         });
//     }
    
//     if (filteredSkillsList.dancing.length) {
//         filteredSkillsList.dancing.forEach(skill => {
//             let listItem = document.createElement('li');
//             let listItemInput = document.createElement('input');
//             listItemInput.type = 'checkbox';
//             let listItemLabel = document.createElement('label');
    
//             listItemInput.id = skill;
//             listItemInput.name = skill;
//             listItemLabel.htmlFor = skill;
//             listItemLabel.innerText = ' ' + skill;
//             listItem.appendChild(listItemInput);
//             listItem.appendChild(listItemLabel);
//             dancingSkillsList.appendChild(listItem);
//         });
//     }
    
//     if (filteredSkillsList.acting.length) {
//         filteredSkillsList.acting.forEach(skill => {
//             let listItem = document.createElement('li');
//             let listItemInput = document.createElement('input');
//             listItemInput.type = 'checkbox';
//             let listItemLabel = document.createElement('label');
    
//             listItemInput.id = skill;
//             listItemInput.name = skill;
//             listItemLabel.htmlFor = skill;
//             listItemLabel.innerText = ' ' + skill;
//             listItem.appendChild(listItemInput);
//             listItem.appendChild(listItemLabel);
//             actingSkillsList.appendChild(listItem);
//         });
//     }
// }

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
let toggleContentWrappers = document.getElementsByClassName('toggle-content');
let categoryBtnsArrows = document.getElementsByClassName('arrow');
let pickCategoryInfo = document.querySelector('.pick-category');
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addSkillToList);

function addSkillToList() {
    if(input.value) {
        if(!isExactTerm) {
            pickCategoryInfo.classList.remove('hidden');
            input.disabled = true;
            for(let toggleContentWrapper of toggleContentWrappers) {
                toggleContentWrapper.classList.add('hidden');
            }
            for(let categoryBtnArrow of categoryBtnsArrows) {
                categoryBtnArrow.classList.add('hidden');
            }
        }
    }
}