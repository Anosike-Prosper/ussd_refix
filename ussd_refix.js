

let balance = 10000
const yourName= prompt(`What is your name?`) || 'Siri'
alert(`Hello ${yourName}. Welcome to UBA`)
let selectOption = prompt(`Please Select an option
1.Airtime-self
2.Airtime-others
3.Transfer-UBA
4.Transfer-Other Banks
`)

while(!selectOption){
    selectOption = prompt(`Please Select an option
1.Airtime-self
2.Airtime-others
3.Transfer-UBA
4.Transfer-Other Banks
`)
}



while(true){

    if(selectOption === '1'){
        
        const enterPin = prompt('Please enter your PIN')
        
        if (enterPin.length !== 4){
            alert('Invalid pin. Pin must be four numbers')
        }else if(enterPin.length === 4){
    
            const enterAmt= prompt('Enter Amount')
            if (Number(enterAmt) <= 0 || !enterAmt){
                alert('Invalid Amount. Amount must be greater than zero')
            }else{
                balance = balance - enterAmt
                alert(`Successful sent ${enterAmt} and your balance is ${balance}`)
            }
        }else{
            alert('Transaction Cancelled. Thank you')
        }

       
        
    
        
    }else if(selectOption === '2'){
       
        const enterPin = prompt('Please enter your PIN')
    
        if (enterPin.length !== 4){
            alert('Invalid pin. Pin must be four numbers')
        }else{
    
            const enterNumber= prompt('Please your phone number')
            
    
            if(enterNumber.length !==11){
                alert('Invalid phone number. Phone number must be eleven numbers')
            }else{
                const enterAmt= prompt('Enter Amount')
               if (Number(enterAmt) <= 0 || !enterAmt){
                alert('Invalid amount. Amount must be greater than zero')
               }else{
                balance = balance - enterAmt
                alert(`Successful sent ${enterAmt} and your balance is ${balance}`)
                
               }
            }

           
    
            
        }   
    
    }else if(selectOption === '3'){
    
        const enterPin = prompt('Please enter your PIN')
    
        if (enterPin.length !== 4){
            alert('Invalid pin. Pin must be four numbers')
        }else{
    
            let acctNum= prompt('Please enter your account number')
            
            if(acctNum.length !== 10 || acctNum.length > 10){
                alert('Invalid account number. Account Number must be 11 numbers')
            }else{
    
                const entAmt= prompt('Please enter an amount')
                if(!entAmt || Number(entAmt) <=0){
                    alert('Invalid amount. Amount must be greater than zero')
                }else{
                    balance = balance - entAmt
                alert(`Successful sent ${entAmt} and your balance is ${balance}`)
                    
                }
            }

            
    
          
            }
    
    }else if(selectOption === '4'){
    
    
        const enterPin = prompt('Please enter your PIN')
    
        if (enterPin.length !==4){
            alert(`Invalid pin. Pin must be four numbers`)
        }else{
            const selectBank= prompt(`Please Select a Bank
            1. ZENITH BANK
            2.GTB BANK
            3.FIRST BANK
            4.STERLING BANK
            5.ECO BANK
            `)
    
            if (!selectBank){
                
                alert(`Invalid Request. Please select a bank from the list of options`)
            }else{
    
                const acctNum= prompt('Please enter your account number')
            
                if(acctNum.length !== 10 || acctNum.length > 10){
                alert('Invalid account number. Account Number must be 11 numbers')
                }else{
    
                const entAmt= prompt('Please enter an amount')
                if(!entAmt || Number(entAmt) <=0){
                    alert('Invalid amount. Amount must be greater than zero')
                }else{
                    balance = balance - entAmt
                alert(`Successful sent ${entAmt} and your balance is ${balance}`)
                    
                }
            }
                
            }

          
        }
    
        
    
    }else{
        alert('Invalid option. Select a valid option from the list provided.')

        
    
    }

    break
}
