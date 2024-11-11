const numRan = document.getElementById("num-random")
const btnRan = document.getElementById("btn-random")
const counterElem = document.getElementById("counter")
const timerElem = document.getElementById("timer")
const numElem = document.getElementById("num")
const formElem = document.getElementById("form")
const numOne = document.getElementById("num-one")
const numTwo = document.getElementById("num-two")
const numThree = document.getElementById("num-three")
const numFour = document.getElementById("num-four")
const numFive = document.getElementById("num-five")
const verifyElem = document.getElementById("verify")




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
        let arrayOne = [];
        for (let i = 0; i < length; i++) {
            arrayOne.push(Math.floor(Math.random() * (max - min + 1)) + min);
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
          counterElem.classList.add("d-none")
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

verifyElem.addEventListener("click", function(event){
        event.preventDefault();
        numOneValue = numOne.value.trim()
        console.log(numOneValue);
        numTwoValue = numTwo.value.trim()
        console.log(numTwoValue);
        numThreeValue = numThree.value.trim()
        console.log(numThreeValue);
        numFourValue = numFour.value.trim()
        console.log(numFourValue);
        numFiveValue = numFive.value.trim()
        console.log(numFiveValue);
})
    


    






