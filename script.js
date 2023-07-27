let playerState = 'walk down';
const drowpdown = document.getElementById('animations');
const canvasFrame = document

var i = 0;
canvasFrame.addEventListener('keydown', function(){
    if (i === 8){i = 0;}
    playerState = animationStates[i].name
    i++

});
drowpdown.addEventListener('change', function(e){
    playerState = e.target.value;
})
 
console.log("hello")

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'link.png';
const spriteWidth = 120;
const spriteHeight = 130;



let gameFrame = 0;
const staggerFrames = 18;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle down",
        frames: 3

    },
    {
        name: "idle left",
        frames: 3
        
    },
    {
        name: "idle up",
        frames: 1
    },
    {
        name: "idle right",
        frames: 3
    },
    {
        name: "walk down",
        frames: 10
    },
    {
        name: "walk left",
        frames: 10
    },
    {
        name: "walk up",
        frames: 10
    },
    {
        name: "walk right",
        frames: 10
    }
];

animationStates.forEach(((state,index)=> {
    let frames = {
        loc:[],
    }
    for(let j = 0; j < state.frames;j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimations[state.name] = frames;
}));

console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
  
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY , spriteWidth,spriteHeight, 200, 200, spriteWidth, spriteHeight);

    
    gameFrame++;
    
    requestAnimationFrame(animate);



};
animate();