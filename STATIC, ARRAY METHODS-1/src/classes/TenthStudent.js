class TenthStudent{
    static passMarks=35;
    constructor(){
        console.log("Inside TenthStudent Constructor.");
        this.engMarks=0;
        this.telMarks=0;
        this.hinMarks=0;
        this.mathMarks=0;
        this.sciMarks=0;
        this.socMarks=0;

    }
    calculateResult=()=>{
        if(this.engMarks>=TenthStudent.passMarks&&
            this.telMarks>=TenthStudent.passMarks&&
            this.hinMarks>=TenthStudent.passMarks&&
            this.mathMarks>=TenthStudent.passMarks&&
            this.sciMarks>=TenthStudent.passMarks&&
            this.socMarks>=TenthStudent.passMarks

        ){
            console.log("Student Passed in Tenth")
        }else{
            console.log("Student Failed in Tenth")
        }
    }
}
export default TenthStudent;