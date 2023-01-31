// import { StringifyOptions } from "querystring";

export class Product {
    url:string;
    title:string;
    location:string;
    price:number;
    date:string;
    rating:number;
    category:string
    make:string
    color:string

    sellerName:string
    sellerPhone:String
    sellerEmail:string
    millage:number
    

    constructor(url='',title='',location='',price=0,date='',rating=0,category='',make='',color='',sellerName='',sellerPhone='',sellerEmail=''
    ,millage=0){
        this.url=url
        this.title=title
        this.location=location
        this.price=price
        this.date=date
        this.rating=rating  
        this.category=category
        this.make=make
        this.color=color

        this.sellerName=sellerName
        this.sellerPhone=sellerPhone
        this.sellerEmail=sellerEmail    
        this.millage=millage

    }

}
