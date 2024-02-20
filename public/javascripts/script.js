let themeBtn = document.querySelectorAll(".themeDark");
let dropMenuBars = document.querySelector(".dropMenuBars");
let dropDown = document.querySelector(".dropDown");
let dropMenuIcon = document.getElementById("dropMenuIcon");
let socialIcons = document.querySelector(".socials");
let contactIcons = document.querySelectorAll(".contactImg");

themeBtn[0].addEventListener("click", () => {
  if (document.body.classList.contains("darkTheme")) {
    lightTheme();
    themeBtn[0].src = "images/moon.svg";
    themeBtn[1].src = "images/moon.svg";
  } else {
    darkTheme();
    themeBtn[0].src = "images/sun.svg";
    themeBtn[1].src = "images/sun.svg";
  }
});

themeBtn[1].addEventListener("click", () => {
  if (document.body.classList.contains("darkTheme")) {
    lightTheme();
    themeBtn[1].src = "images/moon.svg";
  } else {
    darkTheme();
    themeBtn[1].src = "images/sun.svg";
  }
});

const lightTheme = () => {
  document.body.classList.remove("darkTheme");
  document.getElementById("dropMenuIcon").style.filter = "none";
  socialIcons.style.filter = "none";
  contactIcons.forEach((icon) => {
    icon.style.filter = "none";
  });
};

const darkTheme = () => {
  document.body.classList.add("darkTheme");
  document.getElementById("dropMenuIcon").style.filter = "invert(100%)";
  socialIcons.style.filter = "invert()";
  contactIcons.forEach((icon) => {
    icon.style.filter = "invert()";
  });
};

dropMenuBars.addEventListener("click", () => {
  dropDown.classList.toggle("open");
  if (dropDown.classList.contains("open")) {
    dropMenuIcon.src = "images/close.svg";
  } else {
    dropMenuIcon.src = "images/menu.svg";
  }
});


