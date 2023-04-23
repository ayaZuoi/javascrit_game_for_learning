// 1 depost some money 
 //determine number of lines to bet on 
//3 collect  a bet money 
//4 spin the slot machin 
//5 check if user won 
//6 give the user thier winnings
//play again 
const prompt =require("prompt-sync")();
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


}
let balance = deposit();
const numberoflines= getNumberofLines();
const bet =getBet(balance ,numberoflines);