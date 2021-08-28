class Dice{
    throw(){
        return Math.ceil(Math.random()*6);
    }
}

let dice = new Dice;
let runner1=0,runner2=0;

while (runner1<100&&runner2<100) {
    let d1 = dice.throw();
    if (d1>=4) {
        runner1 += 2;
    }else if (d1==3) {
        runner1 += 3;
    }else{
        runner1 += 1;
    }
    let d2 = dice.throw();
    if (d2>=4) {
        runner2 += 2;
    }else if (d2==3) {
        runner2 += 3;
    }else{
        runner2 += 1;
    }
}
if (runner1>runner2) {
    console.log(`Runner 1 was the winner with: ${runner1}`);
    console.log(`Runner 2 was the loser with: ${runner2}`);
}else if (runner2>runner1) {
    console.log(`Runner 2 was the winner with: ${runner2}`);
    console.log(`Runner 1 was the loser with: ${runner1}`);
}else{
    console.log(`It was a tie: Runner 1 with: ${runner1}. Runner 2 with: ${runner2}`);
}