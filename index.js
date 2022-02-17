

// get monthly income value 
function getMonthValue(monthInput){
    const monthlyIncome=document.getElementById(monthInput);
    const newMonthlyIncome=parseFloat(monthlyIncome.value);
    // monthlyIncome.value='';
    return newMonthlyIncome;
}

// get expense input value 
function getInput(input1,input2,input3){
    // debugger;
    const foodInput=document.getElementById(input1);
    
    console.log(typeof isNaN(foodInput.value))
    const newFoodInput=parseFloat(foodInput.value);
    console.log(typeof newFoodInput)
    const rentInput=document.getElementById(input2);
    const newRentInput=parseFloat(rentInput.value);
    const clothInput=document.getElementById(input3);
    const newClothInput=parseFloat(clothInput.value);
    foodInput.value=''
    rentInput.value=''
    clothInput.value=''
    // validate all input value 
    console.log(typeof foodInput.value);
    if(isNaN(newFoodInput) && isNaN(newRentInput) && isNaN(newClothInput)){
        return alert('Please fill up the expense form');
    }
    if(isNaN(newFoodInput)){
        document.querySelectorAll('.food').setAttribute('id','food-validation');
        
    }
    if(isNaN(newRentInput)){
        document.querySelectorAll('.food')[1].setAttribute('id','rent-validation');
       
    }
    if(isNaN(newClothInput)){
        document.querySelectorAll('.food')[2].setAttribute('id','cloth-validation');
        
    }
    else{
        const total=(newFoodInput + newRentInput + newClothInput)
        return total;
    }
        
    
    // calculate expense input value 
    
}
// calculate month and expense input value 
function expensesInput(){
        const input=getInput('food-input','rent-input','cloth-input');
        console.log(typeof input);
        if(typeof input == 'undefined'){
            return false;
        }
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
