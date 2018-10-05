'use strict';

// Global constants and variables
const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');
var isCheckoutBtn = false;
const boxes = document.querySelector('#boxes'); 

// Image html strings
var items = 
{
    Coke:     [50,  '<img src="static/img/coke.png">'],
    Burger:   [50,  '<img src="static/img/burger.png">'],
    'Mountain Dew':    [500, '<img src="static/img/mountaindew.png">'],
    Fries:    [100, '<img src="static/img/fries.png">'],
    Hotdog:   [70,  '<img src="static/img/hotdog.png">'],
    Drumsticks:[120, '<img src="static/img/drumsticks.png">'],
    Wings:    [120, '<img src="static/img/wings.png">'],
    Taco:   [50,  '<img src="static/img/taco.png">'],
} 
var tray = {};

// Fuction to check if tray is empty
function isEmpty(dict){
    return Object.getOwnPropertyNames(dict) == 0;
}

// Liten for domcontentloaded event
/*document.addEventListener('DOMContentLoaded', () =>{    
    addButtonClickListener();
});*/


function displayItems(){
    for (var item in items){
        var price =  items[item][0];
        var imgHtml = items[item][1]; 
        const boxDiv = document.createElement('div');
        boxDiv.className = 'box';
        boxDiv.innerHTML = 
        `<div class="image">${imgHtml}

</div>
<div class="description">
  <div> <span class="name">${item}</span><br>
  <span class="price"><span>Kshs</span><span class="item-price">${price}</span><span>/=</span></span></div>
  <span class="button_1"><img src="static/img/add-icon.png" alt=""></span>
</div>`;

 boxDiv.querySelector('.button_1 img').addEventListener('click',  (e) =>{
    const boxItem = e.target.parentElement.parentElement.parentElement;
    addItemToFoodTray(boxItem);
    displayItemsInTray();
})


        boxes.appendChild(boxDiv);


    }
}

displayItems();
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
       `<div class="button">
            <span class="delete-btn" onclick="removeItemFromTray('${name}');"><img src="static/img/trash.png" alt=""></span>\                      
        </div>
       <div class="cart-image">
        ${tray[name][0]}                        
        </div>
        <div class="description">
            <span class="item-name">${name}</span>
        </div>
        <div class="quantity">        
            <span class="qt"> ${tray[name][1]}</span>                              
        </div>
        <div class="total-price"><span>Kshs</span> <span>${totalPrice}</span></div>`;
        
       
        const elementToBeAdded = document.createElement('DIV');
        elementToBeAdded.className = 'item';
        elementToBeAdded.innerHTML = orderDetails;        
        foodTray.appendChild(elementToBeAdded);

        
        
    }
}
