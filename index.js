//calculator
const promt = require("prompt-sync")();
function calculator(){
  while (true){
    let userinput1=promt("enter the number:");
    userinput1=Number.parseFloat(userinput1)
    // let type1=typeof(userinput1)
    // console.log(type1)
    if (isNaN(userinput1)){
        console.log("it is not a number");
        break;
    }
    let userinput2=promt("enter the number:");
    userinput2=Number.parseFloat(userinput2)
    // let type2=typeof(userinput2);
    // console.log(type2)
    if (isNaN(userinput2)){
      console.log("it is not a number ")
      break;
    }
    let useropertor=promt("enter the opertor:");
    if (useropertor=="+"){
    console.log( userinput1+userinput2);
    }
      if (useropertor=="-"){
        console.log(userinput1-userinput2)
      }
      if (useropertor=="*"){
        console.log(userinput1*userinput2)
      }
      if (useropertor=="%"){
        console.log(userinput1%userinput2);
      }
      if (useropertor=="/"){
        console.log(userinput1/userinput2);
      }
      if (useropertor=="**"){
        console.log(userinput1**userinput2);
    }
    else{
      console.log("invalid opertor");
    }
    break;
  }
}

calculator.call()



