export class Purchase{
    constructor(        
       public purchaseid : number,
       public learnerid : number,       
       public vendorid : number,
       public courseid : number,       
       public status : string      
    ){}
}