let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

let elements = document.querySelectorAll("#liste-soft-skills > h2");
console.log(elements);

for (const key in softSkills) {
    
    elements.forEach(element => {
        console.log(element);
        if(key == element.innerText){
            element.textContent += ` ${softSkills[key]}`;

            if (Number(softSkills[key].slice(0, -1))<50 && Number(softSkills[key].slice(0, -1))!=100) {
                element.style.backgroundColor = "red";

            } else if (Number(softSkills[key].slice(0, -1))>50){
                element.style.backgroundColor = "green";
                element.style.color ="white";

            } else if (Number(softSkills[key].slice(0, -1))==100){
                element.style.backgroundColor = "gold";
            }
        }
        
    });
}