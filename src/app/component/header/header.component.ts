import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem:number=0;
public searchTerm:string='';
@Output() searchKey = new EventEmitter
  constructor(private CartService:CartService){}
  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
this.totalItem=res.length;
this.searchKey.emit(this.searchTerm)
    })
    
  }
//   enterSearchValue :string="";
//   @Output()

// searchTextChanged: EventEmitter<string>=new EventEmitter<string>();

// onSearchTextChanged(){
//   this.searchTextChanged.emit(this.enterSearchValue);
// }

  
  search(event:any){
 this.searchTerm=(event.target as HTMLInputElement).value;
 console.log(this.searchTerm);
 this.CartService.search.next(this.searchTerm);
   }
}
