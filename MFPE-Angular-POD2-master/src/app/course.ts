export class Course{
    constructor(
        public courseid:number,
        // public services :string,
        public service :string,
        public vendorid: number,
        public coursename :string,
        public coursedurration: number,
        public coursedescription :string,
        public launchdate:String,
        public status :string
    ){}
}
//try changing launchdate type here!!!