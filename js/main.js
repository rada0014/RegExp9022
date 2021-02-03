

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");
const input1 = document.querySelector("#fname");
const input2 = document.querySelector("#lname");
const input3 = document.querySelector("#email");
const input4 = document.querySelector("#BACKUPemail");
const input5 = document.querySelector("#SQinput");
const input6 = document.querySelector("#SQ2input");
const submitBtn = document.querySelector("#submit")

// submitBtn.disabled = true;
//validations (I did not make them, but learnt more than intended.)
const nameValidation = /^[a-zA-Z ]{1,30}$/ ;
const firstLetterCaps = /^[A-Z][a-z0-9_-]{2,19}$/;
const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SQValidation = /^(?=.*[a-zA-Z\d])(\w|[\s\.\@\-\?\,\&\/\_\#\+\(\)\"'"\'"']){3,50}$/;

    form.addEventListener("submit", (e) => {
                console.log("form was submitted");
                inputFunctionOne()
                inputFunctionTwo()
                inputFunctionThree()
                inputFunctionFour()
                inputFunctionFive()
                inputFunctionSix()
                //That's a lot of formatting.
    })




function inputFunctionOne() {
    input1.addEventListener("change", () => {
        if(input1.value.match(nameValidation) && input1.value.match(firstLetterCaps))
        {
            document.getElementsByTagName("span")[0].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[0].innerHTML = `${input1.value} is not valid`;
        }
    })
}

function inputFunctionTwo() {
    input2.addEventListener("change", () => {
        if(input2.value.match(nameValidation) && input2.value.match(firstLetterCaps))
        {
            document.getElementsByTagName("span")[1].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[1].innerHTML = `${input2.value} is not valid`;
        }
    })
}

function inputFunctionThree() {
    input3.addEventListener("change", () => {
        if(input3.value.match(emailValidation))
        {
            document.getElementsByTagName("span")[2].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[2].innerHTML = `${input3.value} is not valid`;
        }
    })
}

function inputFunctionFour() {
    input4.addEventListener("change", () => {
        if(input4.value.match(emailValidation))
        {
            document.getElementsByTagName("span")[3].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[3].innerHTML = `${input4.value} is not valid`;
        }
    })
}

function inputFunctionFive() {
    input5.addEventListener("change", () => {
        if(input5.value.match(SQValidation))
        {
            document.getElementsByTagName("span")[4].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[4].innerHTML = `Must be a sentence!`;
        }
    })
}

function inputFunctionSix() {
    input6.addEventListener("change", () => {
        if(input6.value.match(SQValidation))
        {
            document.getElementsByTagName("span")[5].innerHTML = ``;
        } else {
            document.getElementsByTagName("span")[5].innerHTML = `Must be a sentence!`;
        }
    })
}

                inputFunctionOne()
                inputFunctionTwo()
                inputFunctionThree()
                inputFunctionFour()
                inputFunctionFive()
                inputFunctionSix()

    // const spanOne = document.querySelector(".error one");
    // const spanTwo = document.querySelector(".error two");
    // const spanThree = document.querySelector(".error three");
    // const spanFour = document.querySelector(".error four");
    // const spanFive = document.querySelector(".error five");
    // const spanSix = document.querySelector(".error six");
    // submitBtn.disabled = false;
    // function checkSpans() {
    //     if (spanOne.value !== '' || spanTwo.value !== null || spanThree.value !== null || spanFour.value !== null || spanFive.value !== null || spanSix.value !== null)
    //     {
    //         submitBtn.disabled = true;
    //     }
    // }

    // checkSpans();
    //^ This very important check doesn't want to work.
});

const inputs = document.querySelectorAll("input");

function clearForm() {
    inputs.forEach(input => input.value = '');
    submitBtn.value = 'Submit';
    e.preventDefault();

}