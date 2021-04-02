import { Enigme } from "../../enigmes/shared/model/enigme.model";

export class Story {
    
    public title: string;
    public image: string; 
    public description: string ;
    public level: string;
    public time : string;
    public distance : string; 
    // enigmeList: Enigme[]; 

    constructor(){ 
       
        this.title='';
        this.image= '';
        this.description='';
        this.level = '';
        this.time = '';
        this.distance = '';
    
        // this.enigmeList=[];
    }
}
