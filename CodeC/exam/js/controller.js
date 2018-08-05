window.addEventListener("load",init);
function init(){
    document.querySelector("#login").addEventListener("click",login);
}
function login(){
    var userid = document.querySelector("#userid").value;
    var pwd= document.querySelector("#pwd").value;
    userOperations.login(userid, pwd);
}