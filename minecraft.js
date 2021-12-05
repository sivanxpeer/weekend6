const gameBoard = document.querySelector(".game-board");

const gameBoardMatrix = [
    //18*18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

const materialObj = {
    sky: { className: "sky", id: 0 },
    tree: { className: "tree", id: 1 },
    leaves: { className: "leaves", id: 2 },
    rock: { className: "rock", id: 3 },
    ground: { className: "ground", id: 4 },
    grass: { className: "grass", id: 5 },
    cloud: { className: "cloud", id: 6 },
};

// const tools = document.querySelectorAll(".tool-image")

const pickaxeButton = document.querySelector(".button1");
const shovelButton = document.querySelector(".button2");
const axeButton = document.querySelector(".button3");
const inventory = document.querySelector(".inventory");

//creating game-board
gameBoardMatrix.forEach((row, yIndex) => {
    row.forEach((column, xIndex) => {
        const currentPositionId = gameBoardMatrix[yIndex][xIndex];
        const block = document.createElement("div");
        switch (currentPositionId) {
            case 0:
                block.classList.add(materialObj.sky.className);
                break;
            case 1:
                block.classList.add(materialObj.tree.className);
                break;
            case 2:
                block.classList.add(materialObj.leaves.className);
                break;
            case 3:
                block.classList.add(materialObj.rock.className);
                break;
            case 4:
                block.classList.add(materialObj.ground.className);
                break;
            case 5:
                block.classList.add(materialObj.grass.className);
                break;
            case 6:
                block.classList.add(materialObj.cloud.className);
                break;
            case 7:
                block.classList.add(materialObj.grassBlock.className);
                break;
        }
        gameBoard.appendChild(block);
    });
});


// a. Axe - for cutting trees
// b. Pickaxe - for mining rocks
// c. Shovel - for digging dirt

const toolsObj = {
    pickaxe: { className: "rock" },
    shovel: { className: ["ground", "grass", "leaves"] },
    axe: { className: ["tree", "leaves"] },
};

let currentTool = "";
pickaxeButton.addEventListener("click", () => {
    console.log("pickaxe clicked");
    currentTool = "pickaxe";
    console.dir(pickaxeButton);
    pickaxeButton.style.background = 'blue';
    axeButton.style.background = "";
    shovelButton.style.background = "";
})

shovelButton.addEventListener("click", () => {
    console.log("shovel clicked");
    currentTool = "shovel";
    shovelButton.style.background = 'blue';
    axeButton.style.background = "";
    pickaxeButton.style.background = "";
})

axeButton.addEventListener("click", () => {
    console.log("axe clicked");
    currentTool = "axe";
    shovelButton.style.background = '';
    axeButton.style.background = "blue";
    pickaxeButton.style.background = "";
})

inventory.addEventListener("click", (e) => {
    currentTool = "inventory";
})

gameBoard.addEventListener("click", (e) => {

    switch (currentTool) {
        case "pickaxe":
            if (toolsObj.pickaxe.className.includes(e.target.className)) {
                inventory.classList = e.target.className;
                e.target.classList = "sky";
            }
            else {
                pickaxeButton.style.background = 'red';
            }
            break;
        case "shovel":

            if (toolsObj.shovel.className.includes(e.target.className)) {
                inventory.classList = e.target.className;
                e.target.classList = "sky";
            }
            else {
                shovelButton.style.background = 'red';
            }
            break;
        case "axe":
            if (toolsObj.shovel.className.includes(e.target.className)) {
                inventory.classList = e.target.className;
                e.target.classList = "sky";
            }
            else {
                axeButton.style.background = 'red';
            }
            break;
        case "inventory":
            console.log(inventory.className);
            console.log(e.target.className);
            e.target.className = inventory.className;
            inventory.className = "";
    }
})


