// Random Group Maker Project By Aarush

//HTML VARIABLES
let firstBtn = document.getElementById('btn-1');
let secondBtn = document.getElementById('btn-2');
let thirdBtn = document.getElementById('btn-3');
let restartBtn = document.getElementById("restart-btn");
let finishBtn = document.getElementById('finish-btn');
let randBtn = document.getElementById('randomize-btn');
let outputEl = document.getElementById('group-output');

//JS VARIABLES
let groups = [];

//Convert the string to a number using the Number() function.
let numGroups = Number(prompt("Enter the total number of groups you wish to make:"));

//Load function groupNumber as soon as the page loads.
window.onload = groupNumber();

//BUTTON CLICKED EVENT
firstBtn.addEventListener('click', addMember);
secondBtn.addEventListener('click', addRandomMember);
thirdBtn.addEventListener('click', addxMember);
restartBtn.addEventListener('click', reload);
finishBtn.addEventListener("click", finishButton);
randBtn.addEventListener("click", randomizeGroups);

//FUNCTIONS
function groupNumber() {
    for (let i = 0; i < numGroups; i++) {
        //Create a empty array inside the main array for each group the user wants.
        groups.push([])
    }
}
//Add 1 member to a group of your choice.
function addMember() {
    let memberName = prompt("Enter the name of the group member you wish to add:");
    let groupNum = prompt("Enter the number of the group you wish to add this person in (Stars at 0) :");
    //Check for group availibility
    if (groupNum < 0 || groupNum > numGroups) {
        alert("Invalid Group Number, Please Try Again.");
    } else {
        groups[groupNum - 1].push(memberName);
        alert(`${memberName} has been added to group number ${groupNum}`);

    }

}
//Add 1 member randomly to a group
function addRandomMember() {
    let memberName = prompt("Enter the name of the group member you wish to add:");
    let randGroup = Math.floor(Math.random() * numGroups);
    groups[randGroup].push(memberName);
    alert(`${memberName} has been added to group number ${randGroup}`);
}

//Add "x" people to a random group.
function addxMember() {
    let randGroup = Math.floor(Math.random() * numGroups);
    let numMembers = prompt("How many members would you like to randomly place in the same group?");
    if (numMembers < 0) {
        alert("Invalid Entry. Please Try Again.");
    } else {
        for (let i = 0; i < numMembers; i++) {
            let allMembers = prompt(`Enter the name of the next member (Member: ${i})`);
            groups[randGroup].push(allMembers);
        }
        alert(`Group members have been added to group number ${randGroup}`);
    }
}

//When clicked, all members of existing groups will be randomized into another group.
function randomizeGroups() {
    let randArray = [];
    for (let i = 0; i < numGroups; i++) {
        //Creates a group inside randArray to match groups array.
        randArray.push([])
    }
    //Traverses through every element in the groups array.
    for (let i = 0; i < numGroups; i++) {
        for (let j = 0; j < groups[i].length; j++) {
            let randGroup = Math.floor(Math.random() * numGroups);
            randArray[randGroup].push(groups[i][j]);
        }
    }
    //Replaces the groups array to randArray.
    groups = randArray;
    //Prints the changed groups to the output element.
    finishButton();
}

//Display all groups to the output element.
function finishButton() {
    //Checks if outputEl is empty before printing.
    if (outputEl.innerHTML === '') {
        for (let i = 0; i < numGroups; i++) {
            outputEl.innerHTML += `Group ${i}: ${groups[i].join(", ")}<hr>`;
        }
    } else {
        outputEl.innerHTML = '';
        for (let i = 0; i < numGroups; i++) {
            outputEl.innerHTML += `Group ${i}: ${groups[i].join(", ")}<hr>`;
        }
    }
}

//Reloads the page.
function reload() {
    location.reload();
}