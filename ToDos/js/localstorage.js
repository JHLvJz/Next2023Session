const username = document.querySelector(".username");
const usernameWrapper = document.querySelector(".usernameWrapper");
const header = document.querySelector("#header");

/* 입력했던 사용자의 이름을 읽어오는 함수 */
function checkUsername() {
  const checkName = window.localStorage.getItem("username");
  if (checkName) {
    usernameWrapper.style.display = "none";
    header.innerHTML = `<h1> ${window.localStorage.getItem(
      "username"
    )} 의 Todo List</h1><button type="button" onclick="resetUsername()">초기화</button>`;
  } else {
    usernameWrapper.style.display = "flex";
    header.innerHTML = "";
  }
}

checkUsername();

/* 입력한 값으로 사용자의 이름을 설정하는 함수 */
function setUsername() {
  const name = username.value;
  window.localStorage.setItem("username", name);
  username.value = "";
  checkUsername();
}

/* 입력했던 사용자의 이름을 초기화하는 함수 */
function resetUsername() {
  window.localStorage.removeItem("username");
  console.log("username 초기화");
  checkUsername();
}
