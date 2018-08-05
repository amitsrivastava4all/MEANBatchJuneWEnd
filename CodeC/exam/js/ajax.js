const userOperations = {
    login(userid, pwd){
        fetch("http://localhost:3000/users").then(response=>{
        console.log("Response is ",response);
        response.json().then(userArray=>{
            console.log("Object is ",userArray);
            var matchArray = userArray.filter(currentObject =>{
               return  currentObject.userid==userid && currentObject.password ==pwd;
            });
            var message = matchArray.length>0?location.href="test.html":"Invalid Userid or Password";
            document.querySelector("#msg").innerText = message;
        }).catch(err=>{
            console.log("Invalid JSON ",err);
        })
        }).catch(err=>{
            console.log("Error is ",err);
        });
    },
    
}