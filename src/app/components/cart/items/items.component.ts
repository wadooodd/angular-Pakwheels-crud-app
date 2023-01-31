import { Component, OnInit,Input } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() pitems:Product;


  constructor() { }

  ngOnInit(): void {
  } 


}
