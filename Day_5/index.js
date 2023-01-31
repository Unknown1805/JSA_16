// let btn = document.getElementsByClassName("btn");
// let box = document.getElementsByClassName("box_1");
// btn[0].addEventListener("click", function () {
//   let color = document.getElementsByClassName("color");
//   box[0].style.backgroundColor = color[0].value;
// });

let btn = document.getElementsByClassName("btn");
let users = [];
btn[0].addEventListener("click", function () {
  let usern = document.getElementsByClassName("username")[0].value;
  let pwd = document.getElementsByClassName("password")[0].value;
    let eachUser = {
        username: usern,
        password: pwd,
    }
