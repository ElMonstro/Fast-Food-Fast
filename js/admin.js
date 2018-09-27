'use strict';
var newOrders = 
{jay: [1, ['coke', 1,],['fries', 2,]],
moe:[2, ['sausage', 4],['samosa',3]],
emm: [3, ['burger', 3],['coke', 5],['sausage', 2]],
fiddy: [4, ['coke', 1],['fries', 1]]};

function displayOrders(){
    const ordersDiv = document.querySelector('#orders')
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
                 <span class="accept"><img src="../static/img/tick.jpg" alt="OK"></span>
                 <span class="reject"><img src="../static/img/trash.png" alt="NO"></span>                                        
         </div>`

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

         ordersDiv.appendChild(orderDiv);
     }        
}

displayOrders();