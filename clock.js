const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

getClock();//화면 시작하자 마자 바로 띄워주기 위해서 호출함
//1000단위가 1초
setInterval(getClock, 1000);
// setTimeout(getClock, 5000);