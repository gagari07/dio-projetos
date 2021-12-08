subtrair.addEventListener("click", decrement);
adicionar.addEventListener("click", increment);


   
   

var currentNumber = 0; 

function increment (){
    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
    if (currentNumber < 0 ){
        document.getElementById("currentNumber").style.color = "red";
    }
   
    else{
        document.getElementById("currentNumber").style.color = "blue";  
    }
    
    if (currentNumber > 9 ){
         currentNumber = 10;
        document.getElementById("currentNumber").innerHTML = 10;
    }
    else{
        document.getElementById("currentNumber").innerHTML = currentNumber;
    }
}


function decrement (){
    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
    if (currentNumber < 0 ){
        document.getElementById("currentNumber").style.color = "red";
    } 
    
    else{
        document.getElementById("currentNumber").style.color = "blue";   
    }

    if (currentNumber < -9 ){
        currentNumber = -10;
       document.getElementById("currentNumber").innerHTML = -10;
   }
   else{
       document.getElementById("currentNumber").innerHTML = currentNumber;
   }
}




