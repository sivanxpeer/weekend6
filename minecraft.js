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

const toolsPowersObj = {
    pickaxe: ["stone"],
    shovel: ["dirt", "grass"],
    axe: ["wood", "leaves"],
};

const tools = document.querySelectorAll(".tool-image")
// console.log(tools)
tools.forEach((tool) => tool.classList.contains(tool.className), addEventListener("click", (e) => { console.log(e.target) }, false));
// console.log(tools);

const pickaxeButton = document.querySelector(".pickaxe");
const shovelButton = document.querySelector(".shovel");
const axeButton = document.querySelector(".axe");

// let toolsInventory = "";
// gameBoard.addEventListener("click", (e) => {
//     switch (toolsInventory) {
//         case "pickaxe":
//             if (pickaxeButton.className.includes(e.target.className)) {
//                 e.target.classList = 'sky';
//             } else {
//                 shovelButton.style.background = 'red';
//             }
//     }
// })


pickaxeButton.addEventListener("click", () => {
    console.log("pickaxe clicked");
})




// runs on each row
gameBoardMatrix.forEach((row, yIndex) => {
    // runs on each column
    row.forEach((column, xIndex) => {
        // save current position id
        const currentPositionId = gameBoardMatrix[yIndex][xIndex];
        // create a block
        const block = document.createElement("div");
        // add style by id
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

gameBoard.addEventListener("click", (e) => {
    const currentTool ="pickaxeButton";

    const currentBoardMaterial = e.path[0].classList[0];
    console.dir(currentBoardMaterial);

    switch (currentTool) {
        case "pickaxeButton":
            if(currentBoardMaterial ==="rock"){
                console.log("ok to remove rock")
                currentBoardMaterial.className="sky";
                currentBoardMaterial.classList = "sky";

            }
    }
})


