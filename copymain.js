

let itemData = [  

{
  id: "a",
  name: "Anchor",
  img: "images/download (5).png"
},
{
  id: "a",
  name: "Apple",
  img: "images/download (3).jpg"
},

{
  id: "b",
  name: "Banana",
  img: "images/download (1).jpg"
},
{
  id: "b",
  name: "Butterfly",
  img: "images/download (4).jpg"
},

{
  id: "c",
  name: "cat",
  img: "images/download (11).jpg"
},
{
  id: "c",
  name: "Clock",
  img: "images/download (10).jpg"
},
{
  id: "e",
  name: "Eagle",
  img: "images/download (12).jpg"
},
{
  id: "e",
  name: "Elephants",
  img: "images/download (8).jpg"
},

{
  id: "g",
  name: "Goat",
  img: "images/download (6).jpg"
},
{
  id: "g",
  name: "Giraffe",
  img: "images/download (7).jpg"
},

{
  id: "g",
  name: "Grapes",
  img: "images/download (2).jpg"
}];

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
                     <div class="contents-box">
                        <div>         
                            <img src="${x.img}">        
                          <p>${x.name}</p>  
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

 


