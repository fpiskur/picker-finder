import { skillsListData } from './db.js';
import { populateResults } from './populateResults.js';

export let filteredSkillsList = {
    music: [...skillsListData.music],
    dancing: [...skillsListData.dancing],
    acting: [...skillsListData.acting]
};

export let isExactTerm = false;

export let input = document.querySelector('.input input');
input.value = '';
input.addEventListener('input', updateSkillsResults);

function updateSkillsResults() {
    isExactTerm = false;
    filteredSkillsList = {};
    for(let category in skillsListData) {
        let filteredCategory = skillsListData[category].filter(skill => skill.toLowerCase().includes(input.value.toLowerCase()));
        filteredSkillsList = { ...filteredSkillsList, [category]: filteredCategory };
        for(let skill of skillsListData[category]) {
            isExactTerm = skill.toLowerCase() === input.value.toLowerCase() ? true : isExactTerm;
        }
    }
    populateResults(filteredSkillsList);
}