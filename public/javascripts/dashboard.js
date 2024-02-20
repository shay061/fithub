var dropDownBars = document.querySelector(".dropDownBarsIcon");
var dropDownMenu = document.querySelector(".dropDownMenu");
var mainContent = document.querySelector(".mainContent");
var profile = document.querySelector(".profile");
var gender = document.querySelector(".gender").innerText;

dropDownBars.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  document
    .querySelector(".topBar .mobileLogo .mobileTitleIcon")
    .classList.toggle("hidden");
  if (dropDownMenu.classList.contains("open")) {
    dropDownBars.src = "/images/close.svg";
  } else {
    dropDownBars.src = "/images/menu.svg";
  }
});

if(gender == "male"){
  document.querySelector(".humanImg").src = "/images/dashboardImages/male.png"
}
else{
  document.querySelector(".humanImg").src = "/images/dashboardImages/female.png"
}
console.log(gender);