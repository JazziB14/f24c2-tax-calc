// You're a JS developer, and you've been asked to build a a tax calculation engine
// v4 features:
// - if income greater than 200$, ask them to show proof (ask more questions )
// and show the proof in addition to their net income display
// - for everybody else, show just the net income

// v5: @todo
// - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.

// v6: dele
// - if the state is ME or NH make the taxRate 0.05


const grossIncome = 1000;
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const state = "ME";

if( state === "MA"){
 //do MA stuff
    if( grossIncome >= 200 ){

        const maTaxRate = 0.0423;
        const taxesDue = grossIncome * maTaxRate;
        const netIncome = (grossIncome - 20) - taxesDue;
        console.log(`Your gross income is ${grossIncome}`)

    } else {
        // do some stuff
        const maTaxRate = 0.0423;
        const taxDue = grossIncome * maTaxRate;
        const netIncome =  grossIncome - taxDue;
        console.log(netIncome);
    }
}

if(state === "NH" ){
    //do NH stuff
    if( grossIncome >= 200 ){

        const nhTaxRate = 0.05;
        const taxesDue = grossIncome * nhTaxRate;
        const netIncome = (grossIncome - 20) - taxesDue;
        console.log(`Your gross income is ${grossIncome}`)

    } else {
        // do some stuff
        const nhTaxRate = 0.05;
        const taxDue = grossIncome * nhTaxRate;
        const netIncome =  grossIncome - taxDue;

        console.log(netIncome);
    }

}

if(state === "ME"){
    // do ME suff;
    if( grossIncome >= 200 ){
        
        const meTaxRate = 0.05;
        const taxesDue = grossIncome * meTaxRate;
        const netIncome = (grossIncome - 20) - taxesDue;
        console.log(`Your gross income is ${grossIncome}`)

    } else {
        // do some stuff

        const meTaxRate = 0.05;
        const taxDue = grossIncome * nhTaxRate;
        const netIncome =  grossIncome - taxDue;

        console.log(netIncome);
    } 
}
// if( grossIncome >= 200 ){

//     console.log(`Your gross income is ${grossIncome}`)

// } else {
//     // do some stuff
//     const taxDue = grossIncome * taxRate;
//     const netIncome =  grossIncome - taxDue;

//     console.log(netIncome);
// }




