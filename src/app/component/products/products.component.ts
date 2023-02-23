import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  searchKey: string = '';
  //  searchText:string=""
  public productList: any;
  public filterCategory: any;
  @Input() skey: any;
  constructor(private api: ApiService, private cartService: CartService) {}
  ngOnInit(): void {
    this.skey = this.searchKey;
    console.log('search key value', this.skey);
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        // console.log('oninit', a);
        if (
          a.category === "men's clothing" ||
          a.category === "women's clothing"
        ) {
          a.category = 'fashion';
        }

        Object.assign(a, { Quantity: 1, total: a.price });
      });

      console.log(this.productList);
    });
    /* onSearchTextChanged(searchValue:string){
      this.searchText=searchValue;
     
    }; */

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log('search key', this.searchKey);
    });
  }
  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      console.log('test', a.category, category);
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
