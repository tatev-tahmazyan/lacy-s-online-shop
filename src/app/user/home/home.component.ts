import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	  public newCollectionList: Array<any> = [
    { id : 0, src : '../../../assets/user-images/clothing/s1.jpg'},
    { id : 1, src : '../../../assets/user-images/clothing/n1.jpg'},
    { id : 2, src : '../../../assets/user-images/clothing/d7.jpg'},
  ];

  public trendList: Array<any> = [
    { id : 0, src : '../../../assets/user-images/clothing/a15.jpg'},
    { id : 1, src : '../../../assets/user-images/clothing/a16.jpg'},
    { id : 2, src : '../../../assets/user-images/clothing/a17.jpg'},
  ];

  public shopList: Array<any> = [
    { id : 0, src : '../../../assets/user-images/clothing/a1.jpg', heart : "favorite_border", price : "$49.99", wishlist : false,  context : "yfsdv hdgebf sgdfb"},
    { id : 1, src : '../../../assets/user-images/clothing/a14.jpg', heart : "favorite_border", price : "$40.99", wishlist : false,  context : "yfsdv hdgebf sgdfb"},
    { id : 2, src : '../../../assets/user-images/shoes/b8.jpg', heart : "favorite_border", price : "$50.00", wishlist : false, context : "yfsdv hdgebf sgdfb"},
    { id : 3, src : '../../../assets/user-images/clothing/d5.jpg', heart : "favorite_border", price : "$38.00", wishlist : false,  context : "yfsdv hdgebf sgdfb"},
  ];

  public wantedList: Array<any> = [
    { id : 0, src: '../../../assets/user-images/clothing/a6.jpg'},
    { id : 1, src: '../../../assets/user-images/clothing/d3.jpg'},
    { id : 2, src: '../../../assets/user-images/clothing/s2.jpg'},
  ];

  public slideShowItems: Array<any> = [
    { id : 0, src : '../../../assets/user-images/clothing/s7.jpg'},
    { id : 1, src : '../../../assets/user-images/clothing/s4.jpg'},
    { id : 2, src : '../../../assets/user-images/clothing/s6.jpg'},
    { id : 3, src : '../../../assets/user-images/clothing/s5.jpg'},
  ];

  public selectedItems: Array<any> = [];

  public currentItemId = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plusDivs(tmp: number): void{
    this.currentItemId += tmp;

    if(this.currentItemId === 4){
      this.currentItemId = 0;
    }
    if(this.currentItemId === -1){
      this.currentItemId = 3;
    }
  }

  addToWishList(item: any): void {
    item.wishlist = true;
    console.log(item);
    this.selectedItems.push(item);
    console.log('Favorite :' + this.selectedItems);
  }

}
