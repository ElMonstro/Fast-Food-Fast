'use strict';

// Global constants and variables
const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');
const removeButtons = document.querySelectorAll('.delete-btn');

var tray = {};

// Fuction to check if tray is empty
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

// Add listeners to add button
function addButtonClickListener(){
    for (const addButton of addButtons){        
        addButton.addEventListener('click', () =>{
            const boxItem = addButton.parentElement.parentElement;
            addItemToFoodTray(boxItem);
            displayItemsInTray();                      
            
        })
    if (!tray.isEmpty()){
    for (const removeButton in removeButtons){
        const itemName = removeButton.parentElement.parentElement.querySelector('.item-name').innerHTML
        removeButton.addEventListener('click', ()=>{
            removeItemFromTray(itemName);
            displayItemsInTray();
        })                
    } 
}   
    }        
}


// Add Items to tray object
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
}

function removeItemFromTray(name){
    console.log(name);
    delete tray[name];
    displayItemsInTray();
}

`<div class="buttons">\
           <span class="delete-btn"><img src="../static/img/delete-icn.svg" alt=""></span>\                      
       </div>`

// Display current items in the tray object 
function displayItemsInTray(){
    foodTray.innerHTML = ""
    for (var name in tray){
        var totalPrice = parseInt(tray[name][1]) * parseInt(tray[name][2]);
        const orderDetails =  
       `<div class="buttons">\
            <span class="delete-btn" onclick="removeItemFromTray('${name}');"><img src="../static/img/delete-icn.svg" alt=""></span>\                      
        </div>\
       <div class="cart-image">\
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
        elementToBeAdded.className = 'item';
        elementToBeAdded.innerHTML = orderDetails;
        elementToBeAdded.querySelector('.delete-button')        
        foodTray.appendChild(elementToBeAdded);
        
    }
}
