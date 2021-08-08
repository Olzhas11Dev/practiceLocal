let btnPlus = document.querySelectorAll('.btnPlus');
let btnMinus = document.querySelectorAll('.btnMinus');
let display = document.querySelector('.display')
let names = document.querySelectorAll('.itemsName')
display.innerHTML = localStorage.getItem('myResult');
let result = +localStorage.getItem('myResult');

initialSettings()
checkButtons(btnPlus)
checkButtons(btnMinus)

function initialSettings (){

    
    if(result!==0){
        display.style.color = 'green'
    } else {
        display.style.color = 'red'
    }
    
}

function checkButtons (btns){
    for(let e of btns){
        e.addEventListener('click',function(e){
            if(btns===btnPlus){
                getTaskPlus(e,'Banana',3)
                getTaskPlus(e,'Apple',9)
                getTaskPlus(e,'Orange',5)
            } else{
                getTaskMinus(e,'Banana',3)
                getTaskMinus(e,'Apple',9)
                getTaskMinus(e,'Orange',5)
            }
        })
    }
}

function getTaskPlus (e,itemName,setPrice){
    if(e.target.parentNode.classList.contains(itemName)){
        result +=setPrice
        display.style.color = 'green'
        localStorage.setItem('myResult', result);
        showStore()
    }
}

function getTaskMinus (e,itemName,setPrice){
    if(e.target.parentNode.classList.contains(itemName)){
        result -=setPrice
        checkMinus(result)
        localStorage.setItem('myResult', result);
        showStore()
        } 
    }

function checkMinus (myResult){
    if(myResult<0){
        alert('Can not be ovedraft')
        result = 0
        myStore = 0
        display.style.color = 'red'
    }
}

function showStore (){ 
        let myStore = localStorage.getItem('myResult')
        console.log(myStore)
        display.innerHTML = myStore
}





///////////////////////////////////////// Simple version

// for(let e of btnPlus){
//     e.addEventListener('click', function(e){
//         if(e.target.parentNode.classList.contains('Banana')){
//             let price = 3
//             result +=price
//             display.innerHTML = result
//         }
//         else if(e.target.parentNode.classList.contains('Aple')){
//              let price = 9
//              result +=price
//              display.innerHTML = result
//          }
//          else if(e.target.parentNode.classList.contains('Orange')){
//              let price = 5
//              result +=price
//              display.innerHTML = result
//              }
//     })
//  }
 
// for(let e of btnMinus){
//     e.addEventListener('click', function(e){
//         if(e.target.parentNode.classList.contains('Banana')){
//             let price = 3
//             result -=price
//             display.innerHTML = result
//         }
//         else if(e.target.parentNode.classList.contains('Aple')){
//              let price = 9
//              result -=price
//              display.innerHTML = result
//          }
//          else if(e.target.parentNode.classList.contains('Orange')){
//              let price = 5
//              result -=price
//              display.innerHTML = result
//              }
//     })
//  }








