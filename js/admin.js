'use strict';



var newOrders = 
{jay: [1, ['coke', 1,],['fries', 2,]],
moe:[2, ['sausage', 4],['samosa',3]],
emm: [3, ['burger', 3],['coke', 5],['sausage', 2]],
fiddy: [4, ['coke', 1],['fries', 1]],
dmx: [1, ['coke', 1,],['fries', 2,]],
hov:[2, ['sausage', 4],['samosa',3]],
pac: [3, ['burger', 3],['coke', 5],['sausage', 2]],
biggy: [4, ['coke', 1],['fries', 1]],
ti: [3, ['burger', 3],['coke', 5],['sausage', 2]],
joc: [4, ['coke', 1],['fries', 1]],
wayne: [1, ['coke', 1,],['fries', 2,]],
jon:[2, ['sausage', 4],['samosa',3]],
kaka: [3, ['burger', 3],['coke', 5],['sausage', 2]],
kanye: [4, ['coke', 1],['fries', 1]]
};

var acceptedOrders = 
{
    
};
// Global constants and vaiables
const ordersDiv = document.querySelector('#o-list');
const acceptedOrdersDiv = document.querySelector('#ao-list');
const addItemBtn = document.querySelector('#addItem');
const addFoodbtn = document.querySelector('#add-fds');
const adminModal = document.querySelector('.admin-modal');
const closeButton = document.querySelector('.close-btn');
const itemNameInput = document.querySelector('#item-name');
const imgNameInput = document.querySelector('#img');
const priceInput = document.querySelector('#itm-price');
// Liten for domcontentloaded event
document.addEventListener('DOMContentLoaded', () =>{ 
    addItemBtn.addEventListener('click', addItem);
    addFoodbtn.addEventListener('click', addItem);
    adminModal.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
});

// Displays Orders by looping through newOrders object
function displayOrders(){
    ordersDiv.innerHTML = '';
     for (var name in newOrders){
         var orderList = newOrders[name];
         var orderNo = orderList[0];
         const orderDiv = document.createElement('DIV');
         orderDiv.className = 'order'
         const foodList = document.createElement('UL');
         const qtyList = document.createElement('UL');

         orderDiv.innerHTML=  `<span>${orderNo}</span>
         <span>${name}</span>
         <div class="order-list">
             
         </div>
         <div class="qty">
             
         </div>
         <span><span>Kshs </span>500</span>
         <div class="buttons">
                 <span><img class="accept" src="../static/img/tick.jpg" alt="OK"></span>
                 <span><img class="reject" src="../static/img/trash.png" alt="NO"></span>                                        
         </div>`


         const nameListDiv = orderDiv.querySelector('.order-list');
         const qtyListDiv = orderDiv.querySelector('.qty'); 
         const buttonDiv = orderDiv.querySelector('.buttons');
         buttonDiv.addEventListener('click', orderButtons);
         for (var i = 1; i < orderList.length; i++){
             var order = orderList[i];
             var orderName = order[0];
             var qty = order[1];
             var nameLi = document.createElement('LI');
             nameLi.innerText = orderName;
             var qtyLi = document.createElement('LI');
             qtyLi.innerText = qty;
             nameListDiv.appendChild(nameLi);
             qtyListDiv.appendChild(qtyLi);                                      
         }

         ordersDiv.appendChild(orderDiv);
     }        
}

// Displays Orders by looping through acceptedOrders object

function displayAcceptedOrders(){
    acceptedOrdersDiv.innerHTML = '';
    
    for (name in acceptedOrders){
        const orderDiv = document.createElement('DIV');
        orderDiv.className = 'order';

        var orderList = acceptedOrders[name];
        var orderNo = orderList[0];
        var lastIndex = orderList.length - 1;
        var status = orderList[lastIndex];
        const statusBtn = document.createElement('BUTTON');
        statusBtn.addEventListener('click', completeOrder);

        if (status){
            statusBtn.innerText = 'Completed';
            statusBtn.style.backgroundColor = 'rgb(7, 175, 58)';
            statusBtn.disabled = true;
        }else{
            statusBtn.innerText = 'Incomplete';
            statusBtn.style.backgroundColor = 'rgb(255, 16, 16)';
        }

        orderDiv.innerHTML = `
        <span>${orderNo}</span>
        <span>${name}</span>
        <div class="order-list">
            
        </div>
        <div class="qty">
            
        </div>
        <span><span>Kshs </span>500</span>
        <div class="cmplt-order">
        </div>`


    const cmpltBtnDiv = orderDiv.querySelector('.cmplt-order');
    cmpltBtnDiv.appendChild(statusBtn);
    const nameListDiv = orderDiv.querySelector('.order-list');
    const qtyListDiv = orderDiv.querySelector('.qty'); 
         for (var i = 1; i < orderList.length-1; i++){
             var order = orderList[i];
             var orderName = order[0];
             var qty = order[1];
             var nameLi = document.createElement('LI');
             nameLi.innerText = orderName;
             var qtyLi = document.createElement('LI');
             qtyLi.innerText = qty;
             nameListDiv.appendChild(nameLi);
             qtyListDiv.appendChild(qtyLi);                                      
         }
    acceptedOrdersDiv.appendChild(orderDiv);
   }
}

displayOrders();
displayAcceptedOrders();

// Event Functions

// invoked when reject and accept buttons are clicked
function orderButtons(event){
    
    if (event.target.className == 'accept'){
        var name = event.target.parentElement.parentElement.parentElement.children[1].innerText;
        var orderList = newOrders[name];
        orderList.push(false);
        acceptedOrders[name] = orderList;
        delete newOrders[name];
        displayOrders();
        displayAcceptedOrders();
        
                                          
    }    
    if (event.target.className == 'reject'){
        var name = event.target.parentElement.parentElement.parentElement.children[1].innerText;
        delete newOrders[name];
        displayOrders();
    }

}


// Invoked when complete order button is clicked
function completeOrder(event){
    event.target.style.backgroundColor = 'rgb(7, 175, 58)';
    event.target.innerText = 'Completed';
    var name = event.target.parentElement.parentElement.children[1].innerText;
    var lastIndex = acceptedOrders[name].length -1;
    acceptedOrders[name][lastIndex] = true;
    event.target.disabled = true;   
}


// Add item to homepage
function addItem (e){
    if (e.target.id == 'add-fds'){
        adminModal.style.display = 'block';        
    }else{
        var imgName = imgNameInput.value;
        var itemName = itemNameInput.value;
        var price = priceInput.value
        var imgHtml = `<img src="../static/img/${imgName}">`;
        items[itemName] = [price, imgHtml];    
    }

}


// Close modal
function closeModal(e){
    if (e.target.className == 'admin-modal' || e.target.className == 'close-btn'){
    adminModal.style.display = 'none';
    }
}

