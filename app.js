
const grossIncome = 1000;
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const state = "NH";

if( state === "MA"){
 //do MA stuff
    if( grossIncome >= 200 ){

        console.log(`Your gross income is ${grossIncome}`)

    } else {
        // do some stuff
        const taxDue = grossIncome * maTaxRate;
        const netIncome =  grossIncome - taxDue;

        console.log(netIncome);
    }
}

if(state === "NH" ){
 //do NH stuff
 if( grossIncome >= 200 ){

    console.log(`Your gross income is ${grossIncome}`)

} else {
    // do some stuff
    const taxDue = grossIncome * nhTaxRate;
    const netIncome =  grossIncome - taxDue;

    console.log(netIncome);
}   //do NH stuff
    // @TODO: make this work
    console.log(`NH Tax Rate is ${nhTaxRate}`)

}

if(state === "ME"){
 //do ME stuff
 if( grossIncome >= 200 ){

    console.log(`Your gross income is ${grossIncome}`)

} else {
    // do some stuff
    const taxDue = grossIncome * nhTaxRate;
    const netIncome =  grossIncome - taxDue;

    console.log(netIncome);
}   //do NH stuff
    // @TODO: make this work
    console.log(`NH Tax Rate is ${nhTaxRate}`)

}





