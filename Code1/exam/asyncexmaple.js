window.addEventListener("load",init);

function init(){
    document.querySelector("#hello").addEventListener("click",sayHello);
    document.querySelector("#heavy").addEventListener("click",doItLater);

}
var counter = 1;
function sayHello(){
    document.querySelector("#msg").innerText = "Hello "+counter;
    counter++;
}
function doItLater(){
    setTimeout(doHeavyTask,7000);
}
function doHeavyTask(){
    for(let i =1; i<=1000000; i++){
        for(let j = 1; j<=10000; j++){

        }

    }
    document.querySelector("#result").innerText="Heavy Task Done...";
    return "I am Done ";
}