window.addEventListener("load",init);
function init(){
    document.querySelector("#search").addEventListener("click",doAjax);
}
function printImage(url){
    var div = document.querySelector("#result");
var img = document.createElement("img");
img.src = url;
img.className="size";
div.appendChild(img);
}
function doAjax(){
    var searchValue = document.querySelector("#searchtxt").value;
    // var url = "http://api.giphy.com/v1/gifs/search?q="+searchValue+"&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5";
    var url = `http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5`;
    var pr = fetch(url);
    console.log("Do Something Else...");
    for(let i = 1; i<10; i++){
        console.log('I am Doing something else',i);
    }
    // response = data  + Headers
    pr.then(response=>{
        response.json().then(object=>{
            console.log("Valid JSON ",object);
            document.querySelector("#result").innerHTML = "";
            for(let currentObject of object.data){
                console.log("Images are ",currentObject.images.original.url);
                printImage(currentObject.images.original.url);
            }
        }).catch(err=>{
            console.log("Invalid JSON ",err);
        }).catch(err=>{
            console.log("Invalid Response ",err);
        })
    })
}