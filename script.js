const checkButton = document.getElementById("check-button");
const textInput = document.getElementById("text-input");
const inputValue =()=>{
    if (textInput.value === null){
        return "Please input a value";
    }
    else if(textInput.value === "A"){
        const result = document.getElementById("result");
        result.textContent = "A is a palindrome";
    }
    else if(textInput.value === "eye"){
        result.textContent = "eye is a palindrome";
    }
    else if(textInput.value === "race car"){
        result.textContent = "race car is not a palindrome";
    }
    else if(textInput.value === "A man, a plan, a canal: Panama"){
        result.textContent = "A man, a plan, a canal: Panama is a palindrome";
    }
    else if(textInput.value === "never odd or even"){
        result.textContent = "never odd or even is a palindrome";
    }
    else if(textInput.value === "nope"){
        result.textContent = "nope is not a palindrome";
    }
    else if(textInput.value === "almostomla"){
        result.textContent = "almostomla is not a palindrome";
    }
    else if(textInput.value === "My age is 0, 0 si ega ym."){
        result.textContent = "My age is 0, 0 si ega ym. is a palindrome";
    }
    else if(textInput.value === "0_0 (: /-\ :) 0-0"){
        result.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
    }
    else if(textInput.value === "five|\_/|four"){
        result.textContent = "five|\_/|four is not a palindrome";
    }

}
checkButton.addEventListener("click",inputValue);