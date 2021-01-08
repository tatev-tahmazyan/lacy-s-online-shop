import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   price: number;
//   date: string;
//   partners: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Jorden', price: 50, date: '15/11/20'},
//   {position: 2, name: 'Anna', price: 55.6, date: '10/09/20'},
//   {position: 3, name: 'Lidia', price: 60.3, date: '09/12/20'},
//   {position: 4, name: 'Polo', price: 90.13, date: '08/11/20'},
//   {position: 5, name: 'Berta', price: 20, date: '07/12/20'},
//   {position: 6, name: 'Calvin', price: 15.31, date: '05/12/20'},
//   {position: 7, name: 'Natali', price: 40.36, date: '02/12/20'},
//   {position: 8, name: 'Jack', price: 56.60, date: '06/12/20'},
//   {position: 9, name: 'Fiona', price: 80.15, date: '10/12/20'},
//   {position: 10, name: 'Lizi', price: 75.13, date: '15/12/20'},
// ];

// const PARTNER_DATA: PeriodicPartners[] = [
//   {position: 1, name: 'Nike', remove: 'highlight_off'},
//   {position: 2, name: 'Adidas', remove: 'highlight_off'},
//   {position: 3, name: 'Puma', remove: 'highlight_off'},
//   {position: 4, name: 'Levis', remove: 'highlight_off'},
//   {position: 5, name: 'Pandora', remove: 'highlight_off'},
//   {position: 6, name: 'Gucci', remove: 'highlight_off'},
//   {position: 7, name: 'Louis Vuitton', remove: 'highlight_off'},
// ];

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

	public customerList: Array<any> = [

		{ id : 0, price : 34.35, date : '15/11/20', name : 'Jorden'},
    { id : 1, price : 54.64, date : '10/09/20', name : 'Anna'},
    { id : 2, price : 25.12, date : '09/12/20', name : 'Lidia'},
    { id : 3, price : 46.17, date : '08/11/20', name : 'Polo'},
    { id : 4, price : 51.15, date : '07/12/20', name : 'Berta'},
    { id : 5, price : 37.10, date : '25/12/20', name : 'Calvin'},
    { id : 6, price : 36.56, date : '26/12/20', name : 'Natali'},
    { id : 7, price : 50.56, date : '10/12/20', name : 'Jack'},
    { id : 8, price : 47.36, date : '15/12/20', name : 'Fiona'},
    { id : 9, price : 20.59, date : '26/12/20', name : 'Lizi'},

	];

	public partnerList: Array<any> = [

		{ id : 0, partner : 'Nike', remove : 'highlight_off', showPartner : true},
    { id : 1, partner : 'Adidas', remove : 'highlight_off', showPartner : true},
    { id : 2, partner : 'Puma', remove : 'highlight_off', showPartner : true},
    { id : 3, partner : 'Levis', remove : 'highlight_off', showPartner : true},
    { id : 4, partner : 'Pandora', remove : 'highlight_off', showPartner : true},
    { id : 5, partner : 'Gucci', remove : 'highlight_off', showPartner : true},
    { id : 6, partner : 'Louis Vuitton', remove : 'highlight_off', showPartner : true},
	];
	
	// displayedColumns1: string[] = ['position', 'name', 'price', 'date'];
	// displayedColumns2: string[] = ['position', 'partners', 'remove'];
 //  dataSource1 = new MatTableDataSource(ELEMENT_DATA);
 //  dataSource2 = new MatTableDataSource(PARTNER_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource1.filter = filterValue.trim().toLowerCase();
  // }

  removePartner(item : any) : void{
  	item.showPartner = false;
  }

}



