

let myDishes = ['Pizza','Soße', 'Salat', 'Pasta'];

function init(){
    let  menuContainer = document.getElementById('menu_place');
 
   for (let i = 0; i < myDishes.length; i++) {
    const menu = myDishes[i];
    menuContainer.innerHTML += ", " + menu;
    
   }    

 };