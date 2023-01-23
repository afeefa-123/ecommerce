import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  search(event:any){
    var searchTearm=event.target.value
   this.productService.search.next(searchTearm)
    
  }

}
