'use strict';

const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');
const removeButtons = ('.delete-btn');
console.log(removeButtons);
var tray = {};

Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () =>{    
    addButtonClickListener();
})


function addButtonClickListener(){
    for (const addButton of addButtons){        
        addButton.addEventListener('click', () =>{
            const boxItem = addButton.parentElement.parentElement;
            addItemToFoodTray(boxItem);
            displayItemsInTray();                      
            
        })
   
    } 
}  


function addItemToFoodTray(item){
    const itemName = item.querySelector('.name').innerHTML;
    const itemPrice = item.querySelector('.item-price').innerHTML;
    const itemImg = item.querySelector('.image').innerHTML;
    const itemQuantity = 1;
    const itemsInFoodTray = foodTray.querySelectorAll('item');

    

    if (itemName in tray){
        tray[itemName][1] += 1;
    }
    else{
        tray[itemName] = [itemImg, itemQuantity, itemPrice];
    }

function removeItemFromTray(name){
    console.log('name')
    tray.Remove(name);
}

`<div class="buttons">\
           <span class="delete-btn"><img src="../static/img/delete-icn.svg" alt=""></span>\                      
       </div>`
   
}

function displayItemsInTray(){
    foodTray.innerHTML = ""
    for (var name in tray){
        var totalPrice = parseInt(tray[name][1]) * parseInt(tray[name][2]);
        const orderDetails =  
       `<div class="cart-image">\
        ${tray[name][0]}                        
        </div>\
        <div class="description">\
            <span class="item-name">${name}</span>\
            </div>\
        <div class="quantity">\        
            <input type="text" class="qt" value="${tray[name][1]}">\                              
        </div>\
        <div class="total-price"><span>Kshs</span> <span>${totalPrice}</span></div>`;

        const elementToBeAdded = document.createElement('DIV');
        var button = document.createElement('BUTTON')
        button.className = 'delete-button';
        button.innerHTML = '<img src="../static/img/delete-icn.svg" alt=""></img>'
        button.addEventListener('click', ()=>{
            removeItemFromTray(name);
        })
        elementToBeAdded.className = 'item';
        elementToBeAdded.innerHTML = orderDetails;
        foodTray.appendChild(elementToBeAdded);
    }
}
