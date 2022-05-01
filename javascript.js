window.addEventListener("load", init);

gsap.registerPlugin(gsap);

function ID(elem) {
  return document.getElementById(elem);
}
function QS(elem) {
  return document.querySelector(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

const here = QS(".click_here");
const bemutato = QS(".bemutato");
var tl = gsap.timeline();
var i = 0;
var kepek = [
  "kepek/kep_1.jpg",
  "kepek/kep_2.jpg",
  "kepek/kep_3.jpg",
  "kepek/kep_4.jpg",
  "kepek/kep_5.jpg",
];

function init() {
  kepBetoltes();
  for (let index = 0; index < 1; index++)
    tl.fromTo(here, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });
  setTimeout(function () {
    tl.fromTo(here, 2, { x: "0%" }, { x: "200%", ease: Power2.easeInOut });
  }, 4000);
  setInterval(function () {
    for (let index = 0; index < 1; index++)
      tl.fromTo(here, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });
    setTimeout(function () {
      tl.fromTo(here, 2, { x: "0%" }, { x: "200%", ease: Power2.easeInOut });
    }, 4000);
  }, 10000);
}
function kepBetoltes() {
  ID("hatter").style.backgroundImage = "url(" + kepek[4] + ")";
  setInterval(function () {
    ID("hatter").style.opacity = "0";
    ID("hatter").style.transitionDuration = "1000ms";
    ID("hatter").style.backgroundImage = "url(" + kepek[i] + ")";
    ID("hatter").style.opacity = "1";
    ID("hatter").style.transitionDuration = "1000ms";
    //https://stackoverflow.com/questions/3489270/wait-until-images-in-background-css-are-loaded
    if (i === 4) {
      i = 0;
    } else {
      i++;
    }
    console.log(i);
  }, 4000);
}
