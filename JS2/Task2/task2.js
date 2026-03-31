const numParticipant = parseInt(prompt("Enter the number of Participants"));

let nameList = [];
for (let i = 0; i < numParticipant; i++) {
    const names = prompt("Enter the Names of the Participants");
    nameList.push(names);
};

const listItem  = document.getElementById("list")
listItem.innerHTML = "";
for (const names of nameList) {
    listItem.innerHTML += `<li>${names}</li>` ;
}