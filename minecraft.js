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

const pickaxeButton = document.querySelector(".pickaxe");
const shovelButton = document.querySelector(".shovel");
const axeButton = document.querySelector(".axe");

pickaxeButton.addEventListener("click", () => {
    console.log("pickaxe clicked");
})

shovelButton.addEventListener("click",()=>{
    console.log("shovel clicked");
})

axeButton.addEventListener("click",()=>{
    console.log("axe clicked");
})


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
    shovel: { className: ["ground", "grass","leaves"] },
    axe: { className: ["tree", "leaves"] },
};

const currentTool = "";
gameBoard.addEventListener("click", (e) => {
    switch(currentTool){
        // console.dir(e.target.className);
        // console.log(toolsObj.pickaxe.className);
        case "pickaxe":
            if(toolsObj.pickaxe.className.includes(e.target.className)){
                console.log("siv");
            }
            break;
        case "shovel":
            if(toolsObj.shovel.className.contains(e.target.className)){
                console.log("HILA <3");
            }
            break;
        // if(tools.toolsObj.axe.includes(e.target.classList)){
        //     console.log("axe");
        // }
    }
})


