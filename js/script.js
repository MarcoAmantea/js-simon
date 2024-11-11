const numRan = document.getElementById("num-random")
const btnRan = document.getElementById("btn-random")
const counterElem = document.getElementById("counter")
const timerElem = document.getElementById("timer")
const numElem = document.getElementById("num")
const formElem = document.getElementById("form")
const allInputs = document.querySelectorAll("input")
console.log(allInputs);
const textElem = document.getElementById("text")



let arrayOne = [];
let arrayUser = []

btnRan.addEventListener("click", function(){
    if(numRan.classList.contains("d-none")){
    numRan.classList.remove("d-none")
    }
    if(timerElem.classList.contains("d-none")){
        timerElem.classList.remove("d-none")
    }
    if(numElem.classList.contains("d-none")){
        numElem.classList.remove("d-none")
    }
    if(counterElem.classList.contains("d-none")){
    counterElem.classList.remove("d-none")
    }
    function riempiArrayCasuale(length, min, max) {
        for (let i = 0; i < length; i++) {
            arrayOne.push(Math.floor(Math.random() * (max - min + 1)) + min);
            const arrayCur = arrayOne[i];
            console.log(arrayOne);
            
        }
        return arrayOne;   
        
   }
    
    numRan.innerHTML = riempiArrayCasuale(5, 1, 100);
    let counter = 30;
    const intervalId = setInterval(function() {
        console.log(counter);
        counterElem.innerHTML = counter;
        counter--;
        if(counter < 0) {
          numRan.classList.add("d-none")
          btnRan.classList.add("d-none")
          timerElem.classList.add("d-none")
          numElem.classList.add("d-none")
          clearInterval(intervalId);
        }
      }, 100);
      const myTimer = setTimeout(function(){
        formElem.classList.remove("d-none")
    }, 4000);
});


formElem.addEventListener("submit", function(event){
        event.preventDefault();
        for(let i = 0; i < allInputs.length; i++) {
            let curInput = allInputs[i];
            arrayUser.push(curInput.value);    
            console.log(arrayUser);
          }          
         
         
 })
 

  
  
  

    
    


    






