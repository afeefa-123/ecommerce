import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:any
  productDetails:any

  constructor(private activatedRoute:ActivatedRoute,private productServices:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productId = data['id']
    })
    this.productServices.viewProduct(this.productId)
    .subscribe((data)=>{
      this.productDetails=data
      console.log(this.productDetails);
    }
    )
  }
  updateProduct(form:any){
    
    var updateProduct={
      id:form.value.id, 
      ProductName: form.value.ProductName,
      Description:form.value.Description,
      rating:form.value.rating,
      price:form.value.price,
      warranty:form.value.warranty,
      review:form.value.review,
      vendor_name:form.value.vendor_name,
      CategoryId:form.value.CategoryId,
      availability:form.value.availability,
      image:form.value.image
  
    }
   
    this.productServices.updateProduct(this.productId,updateProduct)
    .subscribe((data)=>{
      alert('product successfully updated')
      this.router.navigateByUrl('products')
    }
    )
  }

}
