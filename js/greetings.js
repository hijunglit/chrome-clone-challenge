const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = loginForm.querySelector("input");

loginForm.addEventListener("submit", handleToSubmit);

function handleToSubmit(event) {
    event.preventDefault();
    const loginValue = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${loginValue}`;
    localStorage.setItem("user name", loginValue);
}
const userName = localStorage.getItem("user name");
if(userName == null) {
    loginForm.classList.remove("hidden");
} else {
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${userName}`;
}