

/*=================toggle style switcher =======*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})



/*=================HIDE STYLE SCWITCHER ON SCROLL =======*/

window.addEventListener("scroll", () => {
  if( document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open")
  }
})

/*=================SELECTING THEME COLORS =======*/

const alternateStyle = document.querySelectorAll(".alternate-style")

function setActiveStyle(color) {

  alternateStyle.forEach((style) =>  {

    if(color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    }
    else{
      style.setAttribute("disabled", "true")
    }

  })

}

/*=================CHANGING BETWEEN LIGHT AND DARK =======*/

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun")
  dayNight.querySelector("i").classList.toggle("fa-moon")

  document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {

  if(document.body.classList.contains("dark"))

    {
      dayNight.querySelector("i").classList.add("fa-sun")
    } 
    else 
    {
      dayNight.querySelector("i").classList.add("fa-moon")
    }
})

// Function to cycle through colors automatically
// Array to store the available theme colors
const colors = ["color-1", "color-2", "color-3", "color-4", "color-5"]; // Update with your actual color titles

// Function to switch colors automatically every 10 seconds
let colorIndex = 0;

function autoSwitchColors() {
  setActiveStyle(colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors
}

// Start the automatic color switching
setInterval(autoSwitchColors, 10000); // Switch every 10 seconds



