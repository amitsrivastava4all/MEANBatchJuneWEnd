window.addEventListener("load",init);
const seq = {
    counter : sequence()
}
function init(){
    loadCounts();
    bindEvents();
    printSequence();
}
function loadCounts(){
    document.querySelector("#total").innerText = questionOperations.questions.length;
    document.querySelector("#mark").innerText = 0;
    document.querySelector("#unmark").innerText = 0;
}
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function printRow(questionObject){
    if(questionObject){
        let tbody = document.querySelector("#questionlist");
        let tr = tbody.insertRow();
        //tr.insertCell(0).innerText = questionObject.id;
        let index = 0;
        for(let key in questionObject){
            tr.insertCell(index).innerText = questionObject[key];
            index++;
        }
    }
}
const printSequence = ()=>document.querySelector("#qid").innerText = seq.counter.next().value;

function addQuestion(){
  // var id = seq.next().value;
     var id = document.querySelector("#qid").innerText;
    var name = document.querySelector("#name").value;
    var ans1 = document.querySelector("#ans1").value;
    var ans2 = document.querySelector("#ans2").value;
    var ans3 = document.querySelector("#ans3").value;
    var ans4 = document.querySelector("#ans4").value;
    var rans = document.querySelector("#rans").value;
    var score = document.querySelector("#score").value;
    var date = document.querySelector("#date").value;
    questionOperations.add(id, name, ans1, ans2, ans3, ans4, rans, score, date);
    printRow(questionOperations.getLastObject());
    loadCounts();
    printSequence();

}