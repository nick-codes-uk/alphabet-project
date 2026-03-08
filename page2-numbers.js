let saveRandNum = 0;

/* Return to page 1 */
const numBtn = document.querySelector(".goto-page1");
numBtn.addEventListener("click", goback);

function goback() {
  window.location.href = "index.html";
}

/* Random number generator */
const numCont = document.getElementById("numberContainer");
const randBtn = document.querySelector(".random-num");

randBtn.addEventListener("click", getRandNum);

function getRandNum() {
  // Clear previous numbers
  numCont.innerHTML = "";

  // Generate random number 1–7
  const randNumber = Math.trunc(Math.random() * 7) + 1;

  // Display the number
  document.querySelector(".the-num").innerText = randNumber;

  // Create the coloured boxes
  for (let i = 1; i <= randNumber; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("colour");
    divItem.innerText = i;
    numCont.appendChild(divItem);
  }
}
