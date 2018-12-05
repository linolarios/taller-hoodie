//if ("serviceWorker" in navigator) {
//  navigator.serviceWorker
//    .register("sw.js")
//    .then(console.log)
//    .catch(console.error);
//}

//register dialog element
let loginDialog = document.querySelector("#login-dialog");
dialogPolyfill.registerDialog(loginDialog);
let registerDialog = document.querySelector("#register-dialog");
dialogPolyfill.registerDialog(registerDialog);

let closeLoginDialog = function() {
  loginDialog.close();
};

let showLoginDialog = function() {
  loginDialog.showModal();
};

let closeRegisterDialog = function() {
  registerDialog.close();
};

let showRegisterDialog = function() {
  registerDialog.showModal();
};

let showAnonymous = function() {
  document.getElementsByClassName("login")[0].style.display = "inline";
  document.getElementsByClassName("login")[1].style.display = "inline";
  document.getElementsByClassName("register")[0].style.display = "inline";
  document.getElementsByClassName("register")[1].style.display = "inline";
  document.getElementsByClassName("logout")[0].style.display = "none";
  document.getElementsByClassName("logout")[1].style.display = "none";
};

let showLoggedIn = function() {
  document.getElementsByClassName("login")[0].style.display = "none";
  document.getElementsByClassName("login")[1].style.display = "none";
  document.getElementsByClassName("register")[0].style.display = "none";
  document.getElementsByClassName("register")[1].style.display = "none";
  document.getElementsByClassName("logout")[0].style.display = "inline";
  document.getElementsByClassName("logout")[1].style.display = "inline";
};

let login = function() {
  let username = document.querySelector("#login-username").value;
  let password = document.querySelector("#login-password").value;

  
};

let signOut = function() {
  
};

let register = function() {
  let username = document.querySelector("#register-username").value;
  let password = document.querySelector("#register-password").value;
  let options = { username: username, password: password };


};

let updateDOMLoginStatus = () => {

};

export {
  register,
  login,
 // signOut,
  showRegisterDialog,
  closeRegisterDialog,
  showLoginDialog,
  closeLoginDialog,
  showLoggedIn,
  showAnonymous,
  //updateDOMLoginStatus
};
