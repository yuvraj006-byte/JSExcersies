const candidateNum = parseInt(prompt("Enter the Number of the Candidates"));

function candidates() {
  const candidateList = [];

  for (let i = 0; i < candidateNum; i++) {
    const candidateName = prompt(`Enter the name of Candidate ${i + 1}`);

    candidateList.push({
      name: candidateName,
      vote: 0,
    });
  }

  return candidateList;
}

const candidateList = candidates();

const voterNum = parseInt(prompt("Enter the Number of the Voters"));

function getVotes() {
  for (let i = 0; i < voterNum; i++) {
    const voteTo = prompt(
      `Voter ${i + 1}, enter the name of your preferred candidate:`,
    );

    const candidate = candidateList.find((NAMES) => NAMES.name === voteTo);

    if (candidate) {
      candidate.vote++;
    } else {
      console.log("Candidate not found");
    }
  }
}

getVotes();

function getWinner() {
  let winner = candidateList[0];

  for (let i = 1; i < candidateList.length; i++) {
    if (candidateList[i].vote > winner.vote) {
      winner = candidateList[i];
    }
  }

  return winner;
}

const winner = getWinner();
const resultList = document.getElementById("print");

console.log(`Winner: ${winner.name} with ${winner.vote} votes`);

let output = `<li>Winner: ${winner.name} with ${winner.vote} votes</li>`;

candidateList.forEach((NAMES) => {
  output += `<li>${NAMES.name}: ${NAMES.vote} votes</li>`;
});

resultList.innerHTML = output;

candidateList.forEach((candidate) => {
  console.log(`${candidate.name}: ${candidate.vote} votes`);
});
