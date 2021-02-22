export class Form{
    Name:string;
    Email:string;
    Text:string;

    constructor(){
        this.Name = "";
        this.Email = "";
        this.Text = "";
    }
}


export class Building{
    Id:string;
    City:string;
    Data:string;
    Name:string;
    Description:string;
    Img:string;
    Img2:string;
    Img3:string;
    Chosen:boolean;

    constructor(id:string,city:string,data:string,name:string,description:string,img:string,img2:string,img3:string,chosen:boolean){
        this.Id = id;
        this.City = city;
        this.Data = data;
        this.Name = name;
        this.Description = description;
        this.Img = img;
        this.Img2 = img2;
        this.Img3 = img3;
        this.Chosen = chosen;

    }
}

export class About{
    Img:string;
    Position:string;
    Name:string;
    Description:string;
    Email:string;

    constructor(img:string,position:string,name:string,description:string,email:string){
        this.Img = img;
        this.Position = position;
        this.Name = name;
        this.Description = description;
        this.Email = email;
    }
}