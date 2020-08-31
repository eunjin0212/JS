// const title = document.querySelector("#title");

// function handleResize() {
//   console.log("I have been resize");
// }
// window.addEventListener("resize", handleResize);

// function handleResize(event) {
//   console.log(event);
// }
// title.addEventListener("click", handleResize);

// function handleClick() {
//   title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);

// if (10 > 5) {
//   console.log("hi");
// } else {
//   console.log("ho");
// }

// if ("10" === 10) {
//   console.log("hi");
// } else if ("10" === "11") {
//   console.log("lalalal");
// } else {
//   console.log("ho");
// }

// if (20 > 5 && "eunjin" === "jinie") {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// if ("eunjin" || "eun") {
//   console.log("eunjin");
// } else {
//   "eunji" || "eunjin";
//   console.log("eun");
// }

// const age = prompt("How old are you");
// console.log(age);

// const age = prompt("How old are you?");
// if (age >= 18 && age <= 21) {
//   console.log("you can drink but you should");
// } else if (age > 21) {
//   console.log("go ahed");
// } else {
//   console.log("too young");
// }

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;

//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }
// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }
// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
