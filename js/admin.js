'use strict';
var newOrders = 
{jay: [1, ['coke', 1,],['fries', 2,]],
moe:[2, ['sausage', 4],['samosa',3]],
emm: [3, ['burger', 3],['coke', 5],['sausage', 2]],
fiddy: [4, ['coke', 1],['fries', 1]]};

var acceptedOrders = 
{
    moe:[2, false, ['sausage', 4],['samosa',3]],
};

const orderDiv = document.createElement('DIV');
orderDiv.className = 'order'

function displayOrders(){
    const ordersDiv = document.querySelector('#o-list')
     for (var name in newOrders){
         var orderList = newOrders[name];
         var orderNo = orderList[0];
         const orderDiv = document.createElement('DIV');
         orderDiv.className = 'order'
         const foodList = document.createElement('UL');
         const qtyList = document.createElement('UL');

         orderDiv.innerHTML=  `<span>${orderNo}</span>
         <h5>${name}</h5>
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

// invoked when reject and accept buttons are clicked
function orderButtons(event){
    
    if (event.target.className == 'accept'){
        var orderList =                                 
    }
    
    if (event.target.className == 'reject'){

    }

}

function displayAcceptedOrders(){
    const acceptedOrdersDiv = document.querySelector('#ao-list');
    //acceptedOrders.innerHTML = '';
    const orderDiv = document.createElement('DIV');
    orderDiv.className = 'order';

    for (name in acceptedOrders){
        var orderList = acceptedOrders[name];
        var orderNo = orderList[0];
        var status = orderList[1];
        const statusBtn = document.createElement('BUTTON');

        if (status){
            statusBtn.innerText = Completed;
            statusBtn.style.color = 'rgb(7, 175, 58)';
        }else{
            statusBtn.innerText = Completed;
            statusBtn.style.color = 'rgb(255, 16, 16)';
        }

        orderDiv.innerHTML = `                                    
        <div class="order">
        <span>${orderNo}</span>
        <h5>${name}</h5>
        <div class="order-list">
            
        </div>
        <div class="qty">
            
        </div>
        <span><span>Kshs</span>500</span>
        <div class="cmplt-order">

        </div>                                            
    </div>`


    const cmpltBtnDiv = orderDiv.querySelector('.cmplt-order');
    cmpltBtnDiv.appendChild(statusBtn);
    const nameListDiv = orderDiv.querySelector('.order-list');
    const qtyListDiv = orderDiv.querySelector('.qty'); 
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
    acceptedOrdersDiv.appendChild(ordersDiv)
   }
}

displayOrders();

