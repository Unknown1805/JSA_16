// localStorage.setItem("0", "P");
// localStorage.setItem("1", "A");
// localStorage.setItem("2", "B");
// localStorage.setItem("4", "D");

// for(let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)))
// }
let x = document.getElementById("btn");
let y = document.getElementById("setKey");
let z = document.getElementById("setValue");
x.addEventListener("click", function() {
    localStorage.setItem(y.value,z.value);
    y.value = "";
    z.value = "";
    document.write(localStorage.key(y.value))
})



