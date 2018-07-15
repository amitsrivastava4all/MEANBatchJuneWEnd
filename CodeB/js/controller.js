// Glue B/w View and Model
window.addEventListener("DOMContentLoaded",init);

function init(){
document.querySelector("#compute").addEventListener("click",computeSalary);
}
function computeSalary(){
    var basicSalary = isNaN(parseFloat(document.querySelector("#basicsalary").value))?0:parseFloat(document.querySelector("#basicsalary").value);
    salaryOperations.takeSalary(basicSalary);
    printResult();
    console.log("Compute Salary Called..");
}

function printResult(){
    for(let key in salaryOperations){
        if(typeof salaryOperations[key]==="function"){
            if(key!='takeSalary'){
                document.querySelector("#"+key).innerHTML = salaryOperations[key]();
            }
        }
    }
    // document.querySelector("#hra").innerHTML = salaryOperations.hra();
    // document.querySelector("#da").innerHTML = salaryOperations.da();
    // document.querySelector("#ta").innerHTML = salaryOperations.ta();
    // document.querySelector("#gs").innerHTML = salaryOperations.gs();
}
