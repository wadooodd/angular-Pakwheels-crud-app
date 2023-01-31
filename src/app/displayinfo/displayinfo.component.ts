import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.css']
})
export class DisplayinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reciver=""

  DisplayVehicleInfo(v:Product)
  {
    console.log(v)
  }
}
