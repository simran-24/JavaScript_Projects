let container=document.querySelector(".container");
let seat=document.querySelectorAll(".rows .seats" )
let p=document.querySelector("p");
let number=document.querySelectorAll(".number");
let movieSelected=document.getElementById("movie");
let ticketprice= +movieSelected.value ;

populateUI()   //to get the items from local storage


function populateUI()
{
    const getSelectedSeat=JSON.parse(localStorage.getItem("seatsSelected"));
    if(getSelectedSeat!==null && getSelectedSeat.length>0)
    {
      seat.forEach((seat,index) =>
      {
        const mySeats= getSelectedSeat.indexOf(index);
        if(mySeats>-1)
        {
          seat.classList.add("select")
        }

      })
    }
    const getSelectedmovie=localStorage.getItem("Selected Movie");
   
    movieSelected.selectedIndex=getSelectedmovie; 
}



//Save the data of movie into local storage

function updateMovie(movieIndex,movieprice)
{
  localStorage.setItem("Selected Movie",movieIndex);
  localStorage.setItem("Selected Movie Price",movieprice)
}

// Count the selected seats and update it return the index of all the selected seats in an array
function updateSelectedSeats()
{
  let SelectedSeat=document.querySelectorAll(".rows .seats.select");
  let seatsIndex=[...SelectedSeat].map(function(seats)
  {
    return [...seat].indexOf(seats)
  } )
  
  localStorage.setItem("seatsSelected",JSON.stringify(seatsIndex)); // JSON.stringify converts number into string
  
  let SelectedSeatCount= SelectedSeat.length;
  number[0].innerText=SelectedSeatCount;
  number[1].innerText=SelectedSeatCount * ticketprice;
}

//update movie selection
movieSelected.addEventListener("change",(e)=>
{
  ticketprice=+e.target.value; // + sign  converts string into number
  updateMovie(e.target.selectedIndex ,e.target.value)
  updateSelectedSeats()
}
)

// Event for selecting the seats 
container.addEventListener("click",e=>
{
  if(e.target.classList.contains('seats') && !e.target.classList.contains("occupied"))
  {
    e.target.classList.toggle("select");
    updateSelectedSeats()
  }
 
}
); 
updateSelectedSeats()
