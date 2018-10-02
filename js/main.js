'use strict';

// Global constants and variables
const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');
var isCheckoutBtn = false;

// Image html strings
var item = 
{
    Coke:     [50,  '<img src="../static/img/coke.jpg">'],
    Burger:   [50,  '<img src="../static/img/burger.jpg">'],
    Pizza:    [500, '<img src="../static/img/pizza.jpg">'],
    Fries:    [100, '<img src="../static/img/fries.jpg">'],
    Hotdog:   [70,  '<img src="../static/img/hotdog.jpg">'],
    Drumstcks:[120, '<img src="../static/img/drumsticks.jpg">'],
    Wings:    [120, '<img src="../static/img/wings.jpg">'],
    Samosa:   [50,  '<img src="../static/img/samosa.jpg">'],
} 
var tray = {};

// Fuction to check if tray is empty
function isEmpty(dict){
    return Object.getOwnPropertyNames(dict) == 0;
}

// Liten for domcontentloaded event
document.addEventListener('DOMContentLoaded', () =>{    
    addButtonClickListener();
});

// Display or not display checkout button
function displayCheckoutBtn(){
    const sidebar = document.querySelector('#sidebar');
    if (isEmpty(tray)){
        sidebar.querySelector('#checkout-btn').className = 'invincible';        
    }    
}

// Add listeners to add button
/* function addButtonClickListener(){
    for (const addButton of addButtons){        
        addButton.addEventListener('click', () =>{
            const boxItem = addButton.parentElement.parentElement;
            addItemToFoodTray(boxItem);
            displayItemsInTray();                      
            
        })
  
    }        
} */


// Add Items to tray object
function addItemToFoodTray(item){
    const itemName = item.querySelector('.name').innerHTML;
    const itemPrice = item.querySelector('.item-price').innerHTML;
    const itemImg = item.querySelector('.image').innerHTML;
    const itemQuantity = 1;
    const itemsInFoodTray = foodTray.querySelectorAll('item');
    const checkoutBtn = document.querySelector('#checkout-btn');
    

    

    if (itemName in tray){
        tray[itemName][1] += 1;
    }
    else{
        tray[itemName] = [itemImg, itemQuantity, itemPrice];
    }
    
    checkoutBtn.className = '';
    
}


// Remove function from tray
function removeItemFromTray(name){
    delete tray[name];
    displayCheckoutBtn();
    displayItemsInTray();
}


// Display current items in the tray object 
function displayItemsInTray(){
    foodTray.innerHTML = "";
    if (tray.isEmpty){
        foodTray.innerHTML="";
    }
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
