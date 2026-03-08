
let saveRandNum = 0;



/* Return to page 1 if this button pressed   */
 
const numBtn = document.querySelector(".goto-page1");

    numBtn.addEventListener("click", goback); 

    function goback () {  
    window.location.href = "index.html"; 
    
};

/* get the random number and display it next to 
  selection box.
*/  
  const numCont = document.getElementById("numberContainer");
  const randBtn = document.querySelector(".random-num");
 

  const randNumber = randBtn.addEventListener("click",getRandNum);              
  
function getRandNum () {   
     
     
      const randNumber = Math.trunc(Math.random()*7)+1;   
      
     randNumber.html = `     
      <div class="num-container">
        <div class="the-num"">"${randNumber}"</div>
       </div>      
      `;
     
      document.querySelector(".the-num").innerHTML = randNumber;
/*     
      displayNumbers(randNumber);
            
   };
   

   

      function displayNumbers (randNumber) {
*/      
      for (let i = 1; i <= randNumber; i++) {        
      const divItem = document.createElement("div");

      divItem.classList.add("colour");     
      divItem.innerText = i;
      numCont.appendChild(divItem); 
    

      };   
    
   };

function clrContainer() {   

      let clrNumCont = document.getElementById("xyz"); 
      
       clrNumCont.innerText = "";

    
 
};  










/* working prog with function


 function getRandNum () {   
      //       clrContainer ();     
      const randNumber = Math.trunc(Math.random()*7)+1;   
      
     randNumber.html = `     
      <div class="num-container">
        <div class="the-num"">"${randNumber}"</div>
       </div>      
      `;
     
      document.querySelector(".the-num").innerHTML = randNumber;
     
      displayNumbers(randNumber);
            
   };
   

   

      function displayNumbers (randNumber) {
      
      for (let i = 1; i <= randNumber; i++) {        
      const divItem = document.createElement("div");

      divItem.classList.add("colour");     
      divItem.innerText = i;
      numCont.appendChild(divItem); 
    

      };   
    
   };


function clrContainer() {   

      let clrNumCont = document.getElementById("xyz"); 
      
       clrNumCont.innerText = "";

    
 
};  
*/