const form = document.querySelector('.form');
const input = document.querySelector('.emailInput');
const error = document.querySelector('.errorSpan');
const successPopUp = document.querySelector('.successDivContainer');
const successSpan = document.querySelector('.successSpan');
const successBtn = document.querySelector('.successBtn');



function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    return isValid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value;

    if(email === ''){
      error.style.visibility = 'visible';
      input.style.border = '2px solid var( --Tomato)';
      input.style.background = "rgba(255, 97, 85, 0.15)";
    }


    else if(!validateEmail(email)){
      error.textContent = 'Please enter a valid email';
      input.style.border = '2px solid var( --Tomato)';
      input.style.background = "rgba(255, 97, 85, 0.15)";
    }

    else if(validateEmail(email)){
        successPopUp.style.visibility = 'visible';
        successSpan.textContent = email;
    }

})




successBtn.addEventListener('click', ()=>{
    location.reload();
})




