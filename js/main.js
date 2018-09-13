'use strict';

const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');
var tray = {};

tray.prototype.isEmpty = function() {
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
        console.log(addButton)
        addButton.addEventListener('click', () =>{
            const boxItem = addButton.parentElement.parentElement;
            addItemToFoodTray(boxItem);
            displayItemsInTray(tray);                         
            
        })
    }        
}

function addItemToFoodTray(item){
    const itemName = item.querySelector('.name').innerHTML;
    const itemPrice = item.querySelector('.item-price').innerHTML;
    const itemImg = item.querySelector('.image').innerHTML;
    const itemQuantity = 1;
    var totalPrice = parseInt(itemPrice) * itemQuantity;
    const itemsInFoodTray = foodTray.querySelectorAll('item');
    console.log(itemsInFoodTray)

    

    totalPrice = parseInt(itemPrice) * itemQuantity;

    tray[itemName] = [itemImg, itemQuantity, itemPrice];
}

function displayItemsInTray(){
    
    for (var name in tray){
        totalPrice = tray[name][1] * tray[name][2];
        const orderDetails =  
       `<div class="buttons">\
           <span class="delete-btn"><img src="../static/img/delete-icn.svg" alt=""></span>\                      
       </div>\
       <div class="cart-image">\
        ${tray[name][0]}                        
        </div>\
        <div class="description">\
            <span class="item-name">${name}</span>\
            </div>\
        <div class="quantity">\        
            <input type="text" class="qt" value="${tray[name][2]}">\                              
        </div>\
        <div class="total-price"><span>Kshs</span> <span>${totalPrice}</span></div>`;

        const elementToBeAdded = document.createElement('DIV');
        elementToBeAdded.className = 'item';
        elementToBeAdded.innerHTML = orderDetails;
        foodTray.appendChild(elementToBeAdded);
    }
}
