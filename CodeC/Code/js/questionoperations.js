const questionOperations = {
    questions:[],
    add(id, name, ans1, ans2, ans3, ans4, rans, score, date){
        let questionObject = new Question(id, name, ans1,ans2,ans3,ans4,rans, score, date);
      
        this.questions.push(questionObject);
    },
    getLastObject(){
        if(this.questions.length>0){
        return this.questions[this.questions.length-1];
        }
        else{
            return null;
        }
    }
}