const loginForm = document.querySelector("#inButton");
const getInput = document.querySelector("#inButton input");
const greeting = document.querySelector("#greeting");
const resetBtn = document.querySelector("#resetBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //localStorage key
function onLoginSubmit(event){
    event.preventDefault(); //이벤트가 실행하는 브라우저의 기본 동작을 막아줌    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, getInput.value);
    paintGreetings();
}

function paintGreetings(){
    const savedUsrName = localStorage.getItem("username");
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsrName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // onLoginSubmit를 직접 실행하지 않는다. 브라우저가 실행해주고 이벤트에 대한 정보를 받는다.(object)
    // object 자리에 자리를 할당하면 해당 이벤트가 발생시킨 정보를 확인 할 수 있다.
} else {
    paintGreetings();
}

function localStorageCleaner(event){ //localStorage를 초기화 하는 함수.
    //event.preventDefault(); 없어도 됨
    localStorage.removeItem("username");
    //greeting.classList.add(HIDDEN_CLASSNAME);
    //loginForm.classList.remove(HIDDEN_CLASSNAME);
    window.location.reload(); // 초기상태로되돌림
}

resetBtn.addEventListener("click", localStorageCleaner);