function Bai1() {
  function findEven(a) {
    if (a < 4 || a > 20) {
      alert("Bạn đã nhập sai giá trị");
    } else
      for (let i = 4; i <= a; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
  }

  let x = prompt("Nhập số bất kì từ 4-20: ");
  findEven(Number(x));
}

function Bai3() {
  function numberOneTriangle(a) {
    let tamgiacvuong = "";
    for (let i = 1; i <= x; i++) {
      for (let k = 1; k <= i; k++) {
        if (k == i) {
          tamgiacvuong = tamgiacvuong + "1\n";
        } else tamgiacvuong = tamgiacvuong + "1";
      }
    }
    console.log(tamgiacvuong);
  }
  let x = Number(prompt("Chọn độ cao của tam giác"));
  numberOneTriangle(x);
}

function bai4() {
  function time() {
    let date = new Date
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let hour_now = date.getHour();
    let min_now = date.getMinutes();
    let sec_now = date.getSeconds();
    hour.innerText = hour_now;
    min.innerText = min_now;
    sec.innerText = sec_now;
  }
  setInterval(time, 1000);
}

bai4();                                   
