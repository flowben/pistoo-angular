export class Enigme {
    
    public title: string ;
    public image: string ;
    public context: string ;
    public question: string ;
    public choiceList: string[]; 
    public answer: string; 
    public  prop1 : string;
    public  prop2 : string;
    public  prop3 : string;
    public  prop4 : string;
     
    constructor(){
        this.title= '';
        this.context = '';
        this.image= '';
        this.question = ''
        this.choiceList = [];
        this.answer = '';
        this.prop1 = '';
        this.prop2 = '';
        this.prop3 = '';
        this.prop4 = '';
    }
    
}
