const clock = document.querySelector("#clock");

function getClock(){
    clock.innerText = new Date().toLocaleTimeString(); //차이점은 오전,오후로 표현됨
    /*
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;*/
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock(); //setInterval()이 처음부터 실행되지 않음으로 최초에 한 번 호출
setInterval(getClock, 1000);
//setInterval(sayHello, 1000);  ms초마다 반복
//setTimeout(sayHello,1000);    ms초에 한번만 실행