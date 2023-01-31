import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AddService } from 'src/app/add.service';
// import { Product } from 'src/app/models/product';
import { Product } from '../product.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  prodForm:FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  products: Product[];

  constructor(private fb:FormBuilder, private addService:AddService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.prodForm = this.fb.group({
      _id: [''],
      title: ['BMW'],
      location: ['Islamabad'],
      price: [200000],
      date: ['1/1/1'],
      rating: [5],
      category: ['Car'],
      make: ['bmw'],
      color: ['silver'],
      sellerName: ['Ahmed Wad'],
      sellerPhone: ['123'],
      sellerEmail: ['abc@gmail'],
      millage: [20000]
    })
  }

  getProducts(){
    this.addService.getProductList().subscribe((res: Product[]) => {
      console.log(res);
      this.products = res;
    })
  }

  onProdSubmit(){
    if(this.prodForm.valid){
      if(this.editMode){
        this.addService.updateProduct(this.prodForm.value).subscribe(
          res => {
            this.getProducts();
            this.onCloseModal();
          },err => console.log(err))
      }
      else{
        this.addService.addProduct(this.prodForm.value).subscribe(
          res => {
            this.getProducts();
            this.onCloseModal();
          },err => console.log(err))
      }
    }
  }

  onAddProduct(){
    this.showModal=true;
  }

  onCloseModal(){
    this.showModal=false;
  }

  onDeleteProduct(id: any){
    if(confirm('Do you want to delete this employee?')){
      this.addService.deleteProduct(id).subscribe(
        (res) => {
          console.log(res);
          this.getProducts();
        },
        err => {
          console.log(err);
        })
    }
  }

  onEditProduct(prod:Product){
    this.editMode = true;
    this.showModal = true;
    this.prodForm.patchValue(prod);
  }
}
