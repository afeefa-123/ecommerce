import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductForm = this.formBuilder.group({
    id: [''], 
    ProductName: [''], 
    Description:[''], 
    rating:[''], 
    price:['"1000"'], 
    warranty:[''], 
    review:[''], 
    vendor_name:[''], 
    CategoryId:[''], 
    availability:[''], 
    image:['']

  })

  constructor(private formBuilder:FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
addProduct(){
  console.log(this.addproductForm.value.id);
  var newProduct={
    id:this.addproductForm.value.id, 
    ProductName: this.addproductForm.value.ProductName,
    Description:this.addproductForm.value. Description,
    rating:this.addproductForm.value. rating,
    price:this.addproductForm.value. price,
    warranty:this.addproductForm.value. warranty,
    review:this.addproductForm.value. review,
    vendor_name:this.addproductForm.value. vendor_name,
    CategoryId:this.addproductForm.value.CategoryId,
    availability:this.addproductForm.value.availability,
    image:this.addproductForm.value.image

  }
 this.productService.addProduct(newProduct)
 .subscribe((data)=>{
  alert("New product added successfully")
  this.router.navigateByUrl('products')
 })
  }
  
}

