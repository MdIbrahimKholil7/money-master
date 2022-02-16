

// get monthly income value 
function getMonthValue(monthInput){
    const monthlyIncome=document.getElementById(monthInput);
    const newMonthlyIncome=parseFloat(monthlyIncome.value);
    // monthlyIncome.value='';
    return newMonthlyIncome;
}

// get expense input value 
function getInput(input1,input2,input3){
    const foodInput=document.getElementById(input1);
    const newFoodInput=parseFloat(foodInput.value);
    const rentInput=document.getElementById(input2);
    const newRentInput=parseFloat(rentInput.value);
    const clothInput=document.getElementById(input3);
    const newClothInput=parseFloat(clothInput.value);
    foodInput.value=''
    rentInput.value=''
    clothInput.value=''
    // calculate expense input value 
    const total=(newFoodInput + newRentInput + newClothInput)
    return total;
}
// calculate month and expense input value 
function expensesInput(){
    const input=getInput('food-input','rent-input','cloth-input')
    const monthIncome=getMonthValue('month-input');
    const totalExpens=document.getElementById('total-expense');
    const totalBalance=document.getElementById('total-balance');
    // calculate total balance 
    const fullTotal=(monthIncome - input);
   
    console.log(fullTotal)
    totalExpens.innerText=input;
    totalBalance.innerText=fullTotal

}

// calculate total cost 
document.getElementById('calculate').addEventListener('click',function(){
    expensesInput()
})

// calculate saving 
function calculateSaving(input){
    const saving=document.getElementById(input);
    const newSaving=parseFloat(saving.value);
    const montIncome=getMonthValue('month-input');
    const savingAmount=document.getElementById('saving-amount');
    // get total balance 
    const totalBalance=document.getElementById('total-balance'); 
    const newTotalBalance=parseFloat(totalBalance.innerText);
    // calculate totalSaving value 
    const totalSaving=((montIncome / 100) * newSaving);
    savingAmount.innerText=totalSaving;
    document.getElementById('remaining-balance').innerText=(newTotalBalance - totalSaving)
    console.log(totalSaving)
}

document.getElementById('saving-btn').addEventListener('click',function(){
    calculateSaving('saving-input');
})
