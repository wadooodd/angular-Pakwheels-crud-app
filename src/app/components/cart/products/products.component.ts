import { conditionallyCreateMapObjectLiteral, temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // template:`<app-filter (messageEvent)="check($event)"></app-filter>`
})  


export class ProductsComponent implements OnInit {

  productslist:Product[]=[]
  constructor(private ProductService:ProductService  ) { }

  filterItems(searchVal:string) {
  
    var result = this.productslist.filter(item => 
      Object.keys(item).some(k => 
      item.location.toString().toLowerCase()
      .includes(searchVal.toLowerCase()))
      );

      console.log(result)
     return result
    
  }
 
  filterItemsmake(searchVal:string)
  {
    var result = this.productslist.filter(item => 
      Object.keys(item).some(k => 
      item.make.toString().toLowerCase()
      .includes(searchVal.toLowerCase()))
      );

      console.log(result)
     return result
  }


  filteType(searchVal:string)
  {
    var result = this.productslist.filter(item => 
      Object.keys(item).some(k => 
      item.category.toString().toLowerCase()
      .includes(searchVal.toLowerCase()))
      );

      console.log(result)
     return result
  }

  filterating(searchVal:string)
  {
    var result = this.productslist.filter(item => 
      Object.keys(item).some(k => 
      item.rating.toString().toLowerCase()
      .includes(searchVal.toLowerCase()))
      );

      console.log(result)
     return result
  }

  filtercolor(searchVal:string)
  {
    var result = this.productslist.filter(item => 
      Object.keys(item).some(k => 
      item.color.toString().toLowerCase()
      .includes(searchVal.toLowerCase()))
      );

      console.log(result)
     return result
  }


  filterprice(searchVal:string)
  {
 
    const result:Product[] = [];

    var splitted = searchVal.split(",", 2); 

    let lower=parseInt(splitted[0])
    let upper=parseInt(splitted[1])

    if(lower>upper)
    {
      window.alert("Enter Correct Range")
    }
    
    this.productslist.filter((a)=>{if(a.price>lower && a.price<=upper){ result.push(a)}});
     return result
  }

  
  ngOnInit(): void {
    this.productslist=this.ProductService.getproducts()
    
  }

  reciver=""
  reciver2=""
  reciver3=""
  reciver4=""
  reciver5=""
  reciver6=""


  FilterByCity(city:string)
  {
    this.productslist=this.filterItems(city);      
  }

  FilterByMake(make:string)
  {
    this.productslist=this.filterItemsmake(make);      
  }


  getchilddata(data:string)
  {
    this.FilterByCity(data);
  }


  FilterByType(type:string)
  {
    this.productslist=this.filteType(type);      
  }

  FilterByRating(rating:string)
  {
    this.productslist=this.filterating(rating);      
  }

  FilterByPrice(price:string)
  {
    this.productslist=this.filterprice(price);      
  }

  FilterByColor(color:string)
  {
    this.productslist=this.filtercolor(color);      
  }


 

  DisplayVehicleInfo(temp:Product)
  {
    
    let a=document.getElementsByClassName("card-body")

    let i=0
    for(i=0; i<a.length;i++)
    {
      if (temp.title == a[i].getElementsByTagName("strong")[0].innerHTML)
      {
        console.log(temp.title)
        break
      } 
    }
    this.productslist=[]
    this.productslist.push(temp)

    let millage=document.createElement("P")
    millage.innerHTML="<br>Car Millage: <strong>"+temp.millage+"</strong>"
    a[i].appendChild(millage)

    let datee=document.createElement("P")
    datee.innerHTML="<br> Last updated on:"+temp.date
    a[i].appendChild(datee)

    let color=document.createElement("P")
    color.innerHTML="Vehicle Colour:"+temp.color+"<br><br> <strong>Seller Information</strong>"
    a[i].appendChild(color)

    let info=document.createElement("P")
    info.innerHTML="<br> <strong>Seller Name:</strong> "+temp.sellerName+"<br> <strong>Seller Phone:</strong> "+temp.sellerPhone+"<br> <strong>Seller Name:</strong> "+temp.sellerName
    a[i].appendChild(info)


    console.log(document.getElementsByClassName("card-body"))

    // console.log(temp)
  }
}
