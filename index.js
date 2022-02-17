

// get monthly income value 
function getMonthValue(monthInput){
    const monthlyIncome=document.getElementById(monthInput);
    const newMonthlyIncome=parseFloat(monthlyIncome.value);
    if(isNaN(newMonthlyIncome) || (newMonthlyIncome < 0)){
       return alert('Please enter your monthly income balance')
    }
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
    
    // validate all input value 
    console.log(typeof foodInput.value);
    if(isNaN(newFoodInput) && isNaN(newRentInput) && isNaN(newClothInput)){
        return alert('Please fill up the expense form');
    }
    if(isNaN(newFoodInput) || (newFoodInput < 0)){
      return document.querySelectorAll('.food')[0].setAttribute('id','food-validation');
    }
    else{
       document.querySelectorAll('.food')[0].removeAttribute('id');
       
    }
    if(isNaN(newRentInput) || (newRentInput < 0)){
      return  document.querySelectorAll('.food')[1].setAttribute('id','rent-validation');
    }
    else{
        document.querySelectorAll('.food')[1].removeAttribute('id');
    }
    if(isNaN(newClothInput) || (newClothInput < 0)){
      return  document.querySelectorAll('.food')[2].setAttribute('id','cloth-validation');
    }
    else{
        document.querySelectorAll('.food')[2].removeAttribute('id');
    }
    // set null all input value 
    foodInput.value=''
    rentInput.value=''
    clothInput.value=''
    
    const total=(newFoodInput + newRentInput + newClothInput)
    return total;
    // calculate expense input value 
    
}
// calculate month and expense input value 
function expensesInput(){
    // debugger;
        const input=getInput('food-input','rent-input','cloth-input');
        console.log(typeof input);
        if(typeof input == 'undefined'){
            return false;
        }
        const monthIncome=getMonthValue('month-input');
        if(typeof monthIncome == 'undefined'){
            return false;
        }
        const totalExpens=document.getElementById('total-expense');
        const totalBalance=document.getElementById('total-balance');
        // calculate total balance 
        const fullTotal=(monthIncome - input);
        // set extra cost here 
        const extraCost= document.getElementById('extra-cost');
        if(fullTotal < 0){    
            alert('Your extra cost is' + Math.abs(fullTotal))       
           // extraCost.setAttribute('class','extra-cost');
          // extraCost.innerText=Math.abs(fullTotal);      
        //    document.getElementById('extra-cost').innerText=Math.abs(fullTotal);
        //    document.getElementById('extra-cost').style.display='block'
        //     console.log('extra cost');
        // console.log(extraCost.innerText)
        // extraCost.classList.add("extra-cost");

        }else{
            // extraCost.innerText=00;
            // extraCost.removeAttribute('class');
            // extraCost.setAttribute('class','extrsa-cost2');
            // extraCost.style.display='none';
            
        }
        // console.log(fullTotal)
        totalExpens.innerText=input;
        if(fullTotal < 0){
            totalBalance.innerText=00;
        }
        else{
            totalBalance.innerText=fullTotal
        }
    

}

// calculate total cost 
document.getElementById('calculate').addEventListener('click',function(){
    expensesInput()
})

// calculate saving 
function calculateSaving(input){
    const saving=document.getElementById(input);
    const newSaving=parseFloat(saving.value);
    if(isNaN(newSaving)){
       return alert('Please enter a valid input');
    }else if(newSaving < 0){
        return alert('Please enter a positive value');
    }
    const montIncome=getMonthValue('month-input');
    // console.log(typeof montIncome)
    if(typeof montIncome == 'undefined'){
        return false;
    }
    const savingAmount=document.getElementById('saving-amount');
    // get total balance 
    const totalBalance=document.getElementById('total-balance'); 
    const newTotalBalance=parseFloat(totalBalance.innerText);
    const totalSaving=((montIncome / 100) * newSaving).toFixed(2);
    const remainingBalance=(newTotalBalance - totalSaving).toFixed(2)
     // calculate totalSaving value 
     if(newTotalBalance == 0 || remainingBalance < 0){
        document.getElementById('remaining-balance').innerText='00';
        savingAmount.innerText='00'
        return document.getElementById('saving-alert').style.display='block';
      }else{
          document.getElementById('saving-alert').style.display='none';
      }
      //  saving amount 
    savingAmount.innerText=totalSaving;
    //   remaing balance 
    document.getElementById('remaining-balance').innerText=remainingBalance;
    console.log(totalSaving)
}

document.getElementById('saving-btn').addEventListener('click',function(){
    calculateSaving('saving-input');
})
