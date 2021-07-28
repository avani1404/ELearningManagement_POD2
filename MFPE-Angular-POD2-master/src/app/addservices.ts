// export class AddService{
//       constructor (
//          public service : String,
//          public name : String, 
//          public  duration : Number,
//          public  desc : String,
//          public vendorid:Number,
//          public status:String,
//          public launchdate:String
//             ){    
//     }
// }

export class AddService{
   service : String;
   coursename : String;
   coursedurration : Number;
   coursedescription : String;
   vendorid:Number;
// vendorid:string;

   status:String;
   launchdate:String;

   constructor (service : String, name : String, duration : Number, desc : String, vendorid:Number, status:String,launchdate:String){
       this.service=service;
       this.coursename=name;
       this.coursedurration=duration;
       this.coursedescription=desc;
       this.vendorid=vendorid;
       this.status=status;
       this.launchdate=launchdate;
   }
}