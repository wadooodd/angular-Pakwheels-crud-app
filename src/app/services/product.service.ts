import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products:Product[]=[
    new Product('https://cache2.pakwheels.com/ad_pictures/6499/bmw-i8-roadster-5-2018-64998586.jpg','BMW i8 Roadster 2018','Lahore',34500000,'15/2/19',4,'car','Bmw','Orange','Seller A','123xx232','abc@gmail.com',2332),
    new Product('https://cache2.pakwheels.com/ad_pictures/6484/mercedes-benz-e-class-e-180-exclusive-2020-64843105.jpg','Mercedes Benz E Class E 180 Exclusive 2020','Islamabad',22500000,'2/3/22',3,'car','Mercedes','Black','Seller B','123xx232','abc@gmail.com',23343),
    new Product('https://images.olx.com.pk/thumbnails/216356732-400x300.webp','kawasaki ninja 250cc single cylinder replica with TFT display sport','Lahore',470000,'17/1/22',3,'bike','kawasaki','Blue','Seller c','123xx232','abc@gmail.com',321332),
    new Product('https://cache3.pakwheels.com/ad_pictures/6104/bmw-x7-xdrive40i-2022-61044495.jpg','BMW X7 xDrive40i 2022','Islamabad',12000000,'4/2/22',2,'car','Bmw','Black','Seller D','123xx232','abc@gmail.com',232),  
    new Product('https://cache2.pakwheels.com/ad_pictures/6499/toyota-prado-tx-4-2012-64998212.jpg','Toyota Prado TX 2.7 2012','Lahore', 12000000,'14/5/21',5,'car','Toyota','Black','Seller D','123xx232','abc@gmail.com',912332),
    new Product('https://images.olx.com.pk/thumbnails/214736767-400x300.webp','kawasaki ninja, Yamaha R1m, BMW S1000RR 250cc, 400cc','Okara',475000,'22/4/21',3,'bike','kawasaki','White','Seller E','123xx232','abc@gmail.com',41232),
    new Product('https://cache4.pakwheels.com/ad_pictures/6471/mg-hs-2-1-5-turbo-2021-64716663.jpg','MG HS 1.5 Turbo 2021','Karachi',675000,'22/4/21',3,'car','Mg','White','Seller F','123xx232','abc@gmail.com',532312),
    new Product('https://cache3.pakwheels.com/ad_pictures/6484/audi-a5-sportsback-2019-64843156.jpg','Audi A5 1.4 TFSI Sportback 2019','Karachi',975000,'22/4/21',1,'car','Audi','Black','Seller G','123xx232','abc@gmail.com',328323),
    
  ]

  getproducts():Product[]{
    return this.products
  }

  constructor() { }
}
