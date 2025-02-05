class students{

     constructor(public S_ID:number,private S_name:string){
         this.S_ID=S_ID;
         this.S_name=S_name;
    }

    getStudentID(){
        return this.S_ID
    }

    getStudentName(){
        return this.S_name
    }
}

const student1 = new students(10,"goushik")

console.log(student1.S_ID);
console.log(student1);
