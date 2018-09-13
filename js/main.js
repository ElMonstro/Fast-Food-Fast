'use strict';

const foodTray = document.querySelector('.food-tray');
const addButtons = document.querySelectorAll('.button_1');

document.addEventListener('DomContentLoaded', () =>{
    addButtonClickListener();
})


function addButtonClickListener(){
    for (const addButton of addButtons){
        addButton.addEventListener('click', () =>{
            boxItem = addButton.parentElement.parentElement;
            addItemToFoodTray(boxItem);                         
            
        })
    }        
}

function addItemToFoodTray(item){
    const itemName = item.querySelector('.name').innerHTML;
    const itemPrice = item.querySelector('.item-price').innerHTML;
    const itemImg = item.querySelector.image.innerHTML;
    const itemQuantity = 1;
    const totalPrice = parseInt(itemPrice) * itemQuantity;

    const orderDetails =  
    '<div class="buttons">\
        <span class="delete-btn"><img src="../static/img/delete-icn.svg" alt=""></span>'+                        
    '</div>\
    <div class="cart-image">\
        ${itemImg}' +                        
    '</div>\
    <div class="description">\
        <span>${itemName}</span>\
    </div>\
    <div class="quantity">' +        
        '<input type="text" class="qt" value="${itemQuantity}">' +                               
    '</div>\
    <div class="total-price"><span>Kshs</span> <span>${totalPrice}</span></div>';

    elementToBeAdded = document.createElement('DIV');
    elementToBeAdded.setAttrbute('class','item');
    elementToBeAdded.innerHTML = orderDetails;

    foodTray.appendChild(elementToBeAdded);
}
