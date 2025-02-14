abstract class Photos{

    constructor(
        public angle:string,
        public filter:string,
        public ratio:number){
                
    }
    abstract getsepia():void

    GetreelTime():number{
        return 8;
    }
}

class Instagram extends Photos{

    constructor( public angle:string,
        public filter:string,
        public ratio:number){
            super(angle,filter,ratio)
        }

        getsepia(): void {
            console.log("Sepia");
        }
}

const User1 = new Instagram("Nintey degree","vintage",16)

User1.getsepia();
