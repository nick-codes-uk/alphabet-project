



/* read thru itemData array and sort out elements and store in new array
*/
let allId = [];
function findTheAlphabet(x) {
  console.log("in the allphabet function");

 itemData.filter(function(mov, i) {         
        
         if (mov.id === x) {
              allId.push(mov);
         }
  });
};

// Display the contents of the array
 const showItems = document.querySelector(".container-2");
 
   
 let displayMovements = function(movements) {
     showItems.innerHTML = ""; 
      movements.forEach(function(x, i) {
          console.log("in display function");

    const html = `    
      <div class="container-2">
          <div class="picture-box">
            <img src="${x.img}">
            
           <p>
             ${x.name}
           <p> 
           </div>            
      </div>
    `;


          
              showItems.insertAdjacentHTML("afterbegin" ,html) 
     }
    ); 
  };

  //Main body starts here
 const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener("click", function(){
        
      let lowecasebtn = (this.textContent).toLowerCase();

        console.log("in the main body");
        findTheAlphabet(lowecasebtn);
        displayMovements(allId);
        allId = [];
        

      });
    });

//clear previous displayed items
    showItems.innerHTML = "";

 
// All about numbers from here DO NOT CHANGE ABOVE    //

const numBtn = document.getElementById("numbers-game");
    numBtn.addEventListener("click", doSomething); 

function doSomething () {
window.location.href = "page2-numbers.html";
  
    
};
 /*
const numBtn2 = document.querySelectorAll(".nums");
numBtn2.classList.toggle(".nums")
  
  console.log(numBtn2[0].textContent);
console.log(numBtn2[1].textContent);
console.log(numBtn2[2].textContent);
console.log(numBtn2[3].textContent);


};
*/