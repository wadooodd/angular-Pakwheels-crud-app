import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  // template:`<input class="btn btn-primary btn-block" type="button" (click)="FILTERCITY($event,city.value)" value="Search">`
})
export class FilterComponent implements OnInit {


  productslist:Product[]=[]
  constructor(private ProductService:ProductService  ) { }

  @Input() inpmsg:string=""
  @Output() output:EventEmitter<string>=new EventEmitter();

  @Input() inpmsg2:string=""
  @Output() output2:EventEmitter<string>=new EventEmitter();

  @Input() inpmsg3:string=""
  @Output() output3:EventEmitter<string>=new EventEmitter();

  @Input() inpmsg4:string=""
  @Output() output4:EventEmitter<string>=new EventEmitter();



  ngOnInit(): void {
    this.productslist=this.ProductService.getproducts()
  }

  FilterByCity(city:string)
  {
    this.output.emit(city);
  }

  FilterByMake(make:string)
  {
    this.output2.emit(make);
  }

  FilterByType(type:string)
  {
    this.output3.emit(type);
  }

  FilterByRating(rating:string)
  {
    this.output4.emit(rating);
  }

  

  @Input() inpmsg5:string=""
  @Output() output5:EventEmitter<string>=new EventEmitter();

  FilterByPrice(pricel:string,priceu:string)
  {
    let temp:string
    temp=pricel+','+priceu
    console.log(temp)
    this.output5.emit(temp);
  }

  @Input() inpmsg6:string=""
  @Output() output6:EventEmitter<string>=new EventEmitter();

  FilterByColor(color:string)
  {
    this.output6.emit(color);
  }
}
