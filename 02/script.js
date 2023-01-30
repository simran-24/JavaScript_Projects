let form=document.querySelector("form");
let username=document.getElementById("Username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let Confirm_password=document.getElementById("Confirm-Password");


// Function of error message
    function showError(input,message)
    {
        const formControl=input.parentElement;
        formControl.className="form-control error";
        const errorMessage=formControl.querySelector("p");
        errorMessage.innerText=message;
    }

//Function of Success message
    function showSuccess(input)
    {
        const formControl=input.parentElement;
        formControl.className="form-control success";
       
    }

// Function for making first character of an error message

function FirstElementUpperCase(input)
{
   
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) 
}

// Funtion for checking the length of charactor in input fields

function checkLength(input,min,max)
{
    if(input.value.length < min)
        {
            showError(input,`${FirstElementUpperCase(input)} should contains more than ${min} characters`);
        }
    else if (input.value.length > max)
        {
            showError(input,`${FirstElementUpperCase(input)} should contains less than ${max} characters`); 
        }
    else
        {
            showSuccess(input)
        }

}

//Function for checking the password match with Confirm_password 
 function checkPasswordMatch(input)
 {
    if(input.value!==password.value)
          {
            showError(input,`${FirstElementUpperCase(input)} doesn't match`);
        }
    else
    {
        showSuccess(input)
    }
    
 }


// ========================================================================================================================
//                                               Method 3 for event Listener
// ========================================================================================================================

// Function for conditions

function conditions(inputarr)
{
    inputarr.forEach(function (input)
    {
         if(input.value==="")
            {
              showError(input,`${FirstElementUpperCase(input)} is required`);
            } 
        else
            {
                showSuccess(input)
            }
    })
}

// Function of validating Email
function isValidEmail(input)
{

    let mailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

     if (mailregex.test(String(input.toLowerCase())))
        {
            showSuccess(input);
        }
    else
        {
            showError(input,`${FirstElementUpperCase(input)} is not valid`);
        }
}
 // Event listener
form.addEventListener('submit', function(e)
{ 
e.preventDefault();
conditions([username,email,password,Confirm_password])
checkLength(username,3,10)
checkLength(email,5,30)
checkLength(password,5,10)
checkPasswordMatch(Confirm_password)
isValidEmail(email)
});





// ========================================================================================================================
//                                               Method 1 for event Listener
// ========================================================================================================================
 

// Event listener
// form.addEventListener('submit', function(e)
// { 
// e.preventDefault();

// if (username.value === "" ) 
// {
//     showError(username,"Username is required")  
// }
// else
// {
//     showSuccess(username)
// }
// if (email.value === "" ) 
// {
//     showError(email,"Email is required")
// }
// else if (!isValidEmail(email.value))
// {
//     showError(email,"Email is not valid")
// }
// else
// {
//     showSuccess(email)
// }

// if (password.value === "" ) 
// {
//     showError(password,"Password is required")
// }
// else
// {
//     showSuccess(password)
// }
// if (Confirm_password.value === "") 
// {
//     showError(Confirm_password,"Password is required")
// }
// else if (Confirm_password.value !== password.value ) 
// {
//     showError(Confirm_password,"Password should be same")
// }
// else
// {
//     showSuccess(Confirm_password)
// }
// });


// Function of validating Email
// function isValidEmail(email)
// {
//     let mailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return mailregex.test(String(email.toLowerCase()))
// }

// =============================================================================================================
//                                          METHOD 2
// =============================================================================================================

// function conditions(input)
// {
//     if(input.value==="")
//     {
//         showError(input,`${input.id}  is required`);
//     }
//     else
//     {
//         showSuccess(input)
//     }
// } 

// // // Event listener
// form.addEventListener('submit', function(e)
// { 
// e.preventDefault();
// conditions(username)
// conditions(email)
// conditions(password)
// conditions(Confirm_password)
// });

