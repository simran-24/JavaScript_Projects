var htmlElement = document.querySelector("html");
let element = document.getElementById('shape');   //target div in HTML
let msg= document.getElementsByClassName("message")
       

// To generate random color
function randomcolor()
{

    let arr="0123456789ABCDEF";
    let hex = "#";
    for(let i=0;i<6;i++)
        {
            let number=Math.floor(Math.random(arr)*16);
            hex=hex+arr[number];    
           
        }
        return hex;
    }

//  change the color and coordinates of the circle displayed on the screen
function changecolor()
   {
     element.style.visibility="visible";
     element.style.backgroundColor=randomcolor();
   }
function Takecord(e)
{
   let x_axis=e.clientX
   let y_axis=e.clientY
   element.style.top=y_axis + "px";
   element.style.left=x_axis + "px";
   
   changecolor()

}

htmlElement.addEventListener('click',Takecord);



