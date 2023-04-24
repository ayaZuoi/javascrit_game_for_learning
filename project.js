// 1 depost some money 
 //determine number of lines to bet on 
//3 collect  a bet money 
//4 spin the slot machin 
//5 check if user won 
//6 give the user thier winnings
//play again 
const prompt =require("prompt-sync")();
const ROWS =3;
const cols =3;
const SYMBOLS_COUNT={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMPOL_VALUES={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}
//1
const deposit =()=>{
    while(true){
        
    const depositAmount =prompt("Enter a deposit amount : ");
    const numberDepositeAmount =parseFloat(depositAmount);
    if (isNaN(numberDepositeAmount)|| numberDepositeAmount<=0){
console.log("invalid depoite amount ,try again ");

    }
    else {
        return numberDepositeAmount;
    }
    }


};
//get number of lines 


const getNumberofLines =()=>{
    while(true){
        
        const lines =prompt("Enter teh number of lines to bet on (1-3): ");
        const numberoflines  =parseFloat(lines);
        if (isNaN(numberoflines)|| numberoflines<=0 || numberoflines >3 ){
    console.log("invalid number of lines  ,try again ");
    
        }
        else {
            return numberoflines;
        }
        }

}
const getBet =(balance,lines )=>{
    while(true){
        
        const bet =prompt("Enter the bet per line : ");
        const numberBet  =parseFloat(bet);
        if (isNaN(numberBet)|| numberBet<=0 || numberBet > (balance/lines) ){
    console.log("invalid number bet in the price    ,try again ");
    
        }
        else {
            return numberBet;
        }
        }


};


const spin=()=>{
    const symbols =[];
    for (const [sympol , count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0;i<count;i++){
            symbols.push(sympol);

        }

    }
    const reels =[];
    for(let i=0; i<cols;i++){
        reels.push([]);
        const reelSymbols =[...symbols];
        for(let j =0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol =reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
 
        }
    }

return reels;
};
const transpose =(reels)=>{
const rows =[];
for (let i=0;i<ROWS;i++){
    rows.push([]);
    for(let j=0;j<cols;j++){
        rows[i].push(reels[j][i]);
    }
}
return reels;
}
const printROWS =(rows)=>{
    
for(const row of rows ){
    let rowString ="";
    for(const [i,sympol]of row.entries()){
          rowString +=sympol;
        if (i != row.length -1 ){
          
           rowString += " |  ";
            console.log(row);
        }
    }
}
};
const getWinnings =(rows,bet,lines)=>{
    let winnings=0;
    for(let row =0;row<lines;row++){
        const symbols =rows[row];
        let allsame =true;
        for(const sympol of symbols){
            if (sympol !=symbols[0]){
                allsame=false;
                break;
            }
        }
        if (allsame){
            winnings += bet*SYMPOL_VALUES[symbols[0]];

        }


    }
    return winnings;
};
const game =()=>{
    let balance = deposit();
    while(true){
        console.log("You have a balance of $" + balance);

const numberoflines= getNumberofLines();
const bet =getBet(balance ,numberoflines);
balance -= bet* numberoflines;
const reels =spin();
const rows = transpose(reels);
printROWS(rows);
const winnings =getWinnings(rows ,bet,numberoflines);
balance += winnings;
console.log("you won ,$" + winnings.toString());
if (balance <=0 ){
    console.log("you ran out of monay !:(")
    break;
}

const palAgain = prompt("Do You want to play agian ? (y/n)" );
if (palAgain != "y") break;

    
    

}
}
game();

